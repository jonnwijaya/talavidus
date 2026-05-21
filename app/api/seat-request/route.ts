import { NextRequest, NextResponse } from 'next/server'
import { createAdminSupabaseClient } from '@/lib/supabase/server'

/**
 * Talavidus — Seat Request API Handler
 * POST /api/seat-request
 *
 * Accepts seat allocation form submissions from the storefront,
 * validates input, applies rate limiting, and writes to Supabase.
 *
 * Rate Limiting: 3 requests per 15 minutes per IP address.
 */

// ── Configuration ─────────────────────────────────────────────────────────

const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000 // 15 minutes

type RateLimitEntry = { count: number; resetAt: number }
const rateLimitStore = new Map<string, RateLimitEntry>()

const TABLE_NAME = 'seat_requests'

// ── Schema ────────────────────────────────────────────────────────────────

interface SeatRequestPayload {
  entity: string
  signatory: string
  domain: string
  aum: string
  intent: string
}

// ── Validation ────────────────────────────────────────────────────────────

function validatePayload(body: unknown): { valid: false; error: string } | { valid: true; data: SeatRequestPayload } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body must be a JSON object.' }
  }

  const payload = body as Record<string, unknown>

  // entity: required, string, 2-200 chars
  if (typeof payload.entity !== 'string' || payload.entity.trim().length < 2 || payload.entity.trim().length > 200) {
    return { valid: false, error: 'Field "entity" is required and must be 2-200 characters.' }
  }

  // signatory: required, string, 2-200 chars
  if (typeof payload.signatory !== 'string' || payload.signatory.trim().length < 2 || payload.signatory.trim().length > 200) {
    return { valid: false, error: 'Field "signatory" is required and must be 2-200 characters.' }
  }

  // domain: required, valid email
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (typeof payload.domain !== 'string' || !emailRegex.test(payload.domain.trim())) {
    return { valid: false, error: 'Field "domain" is required and must be a valid email address.' }
  }

  // aum: required, non-empty string
  if (typeof payload.aum !== 'string' || payload.aum.trim().length === 0) {
    return { valid: false, error: 'Field "aum" is required.' }
  }

  // intent: optional, max 500
  if (payload.intent !== undefined && (typeof payload.intent !== 'string' || payload.intent.length > 500)) {
    return { valid: false, error: 'Field "intent" must be a string of maximum 500 characters.' }
  }

  return {
    valid: true,
    data: {
      entity: payload.entity.trim(),
      signatory: payload.signatory.trim(),
      domain: payload.domain.trim().toLowerCase(),
      aum: payload.aum.trim(),
      intent: typeof payload.intent === 'string' ? payload.intent.trim() : '',
    },
  }
}

// ── Rate Limiting ─────────────────────────────────────────────────────────

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.ip || 'unknown'
}

function checkRateLimit(clientIp: string): { allowed: true } | { allowed: false; retryAfter: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(clientIp)

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(clientIp, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    })
    return { allowed: true }
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000)
    return { allowed: false, retryAfter }
  }

  entry.count += 1
  return { allowed: true }
}

// ── CORS ──────────────────────────────────────────────────────────────────

function getAllowedOrigin(origin: string): string {
  if (process.env.NODE_ENV === 'development') {
    return origin || 'http://localhost:3000'
  }
  return origin === 'https://talavidus.com' ? origin : 'https://talavidus.com'
}

function getCorsHeaders(origin: string): Record<string, string> {
  const allowedOrigin = getAllowedOrigin(origin)

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Max-Age': '86400',
  }
}

// ── Handlers ──────────────────────────────────────────────────────────────

export async function OPTIONS(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  const corsHeaders = getCorsHeaders(origin)

  return new NextResponse(null, {
    status: 204,
    headers: {
      ...corsHeaders,
      'Content-Length': '0',
    },
  })
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin') || ''
  const corsHeaders = getCorsHeaders(origin)

  // ── 1. CORS preflight validation ─────────────────────────────────
  if (process.env.NODE_ENV !== 'development' && origin !== 'https://talavidus.com') {
    return NextResponse.json(
      { error: 'CORS policy: origin not allowed.' },
      { status: 403, headers: corsHeaders }
    )
  }

  // ── 2. Content-Type validation ───────────────────────────────────
  const contentType = request.headers.get('content-type') || ''
  if (!contentType.includes('application/json')) {
    return NextResponse.json(
      { error: 'Content-Type must be application/json.' },
      { status: 415, headers: corsHeaders }
    )
  }

  // ── 3. Rate limiting ─────────────────────────────────────────────
  const clientIp = getClientIp(request)
  const rateLimit = checkRateLimit(clientIp)

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Maximum 3 requests per 15 minutes.' },
      {
        status: 429,
        headers: {
          ...corsHeaders,
          'Retry-After': String(rateLimit.retryAfter),
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': String(Math.ceil(Date.now() / 1000) + rateLimit.retryAfter),
        },
      }
    )
  }

  // ── 4. Body parsing ──────────────────────────────────────────────
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid JSON body.' },
      { status: 400, headers: corsHeaders }
    )
  }

  // ── 5. Validation ────────────────────────────────────────────────
  const validation = validatePayload(body)
  if (!validation.valid) {
    return NextResponse.json(
      { error: validation.error },
      { status: 422, headers: corsHeaders }
    )
  }

  const payload = validation.data

  // ── 6. Supabase insert ───────────────────────────────────────────
  try {
    const adminClient = createAdminSupabaseClient()

    const { data, error } = await adminClient
      .from(TABLE_NAME)
      .insert({
        full_name: payload.signatory,
        email: payload.domain,
        company: payload.entity,
        role: payload.aum,
        message: payload.intent || null,
        ip_address: clientIp,
        user_agent: request.headers.get('user-agent') || null,
        status: 'pending',
      })
      .select('id')
      .single()

    if (error) {
      console.error('[seat-request] Supabase insert error:', error.message)
      return NextResponse.json(
        { error: 'Failed to process seat request. Please try again later.' },
        { status: 500, headers: corsHeaders }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Seat request submitted successfully.',
        requestId: data?.id,
      },
      {
        status: 201,
        headers: {
          ...corsHeaders,
          'X-RateLimit-Limit': String(RATE_LIMIT_MAX),
          'X-RateLimit-Remaining': String(
            Math.max(0, RATE_LIMIT_MAX - (rateLimitStore.get(clientIp)?.count || 0))
          ),
        },
      }
    )
  } catch (err) {
    console.error('[seat-request] Unexpected error:', err)
    return NextResponse.json(
      { error: 'Internal server error.' },
      { status: 500, headers: corsHeaders }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed.' },
    { status: 405, headers: { Allow: 'POST, OPTIONS' } }
  )
}
