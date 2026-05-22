import { NextResponse, type NextRequest } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

/**
 * Talavidus — Edge Middleware
 * Responsibilities:
 *   1. Subdomain detection (storefront vs. dashboard)
 *   2. Authentication enforcement on prescientmacro.com
 *   3. Cross-subdomain cookie handling for Supabase Auth
 *   4. Geoblocking (configurable)
 *   5. Rate limiting headers on API routes
 *   6. Security header injection per route context
 */

// ── Configuration ─────────────────────────────────────────────────────

/** Blocked ISO 3166-1 alpha-2 country codes */
const BLOCKED_COUNTRIES: string[] = [
  // Configure as required by compliance / sanctions policy
]

/** Routes exempt from auth check on dashboard subdomain */
const DASHBOARD_PUBLIC_ROUTES = [
  '/login',
  '/auth/callback',
  '/auth/confirm',
  '/api/auth',
  '/_next',
  '/static',
  '/favicon.ico',
]

// ── Helpers ───────────────────────────────────────────────────────────

function getAppContext(request: NextRequest): 'storefront' | 'dashboard' | 'unknown' {
  const host = request.headers.get('host') || ''

  // Local development
  if (host.startsWith('localhost') || host.startsWith('127.0.0.1')) {
    return 'storefront'
  }

  if (host === 'talavidus.com' || host === 'www.talavidus.com') {
    return 'storefront'
  }

  if (host === 'prescientmacro.com') {
    return 'dashboard'
  }

  return 'unknown'
}

function isDashboardPublicRoute(pathname: string): boolean {
  return DASHBOARD_PUBLIC_ROUTES.some((route) => pathname.startsWith(route))
}

// ── Middleware ────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const context = getAppContext(request)

  // ── 1. Geoblocking ────────────────────────────────────────────────
  const country = request.geo?.country || 'unknown'
  if (BLOCKED_COUNTRIES.includes(country)) {
    return new NextResponse('Access denied from your region.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-store',
      },
    })
  }

  // ── 2. Subdomain Authentication (Dashboard) ───────────────────────
  if (context === 'dashboard') {
    let response = NextResponse.next()

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            response.cookies.set({
              name,
              value,
              ...options,
              domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com',
              sameSite: 'lax',
              secure: true,
              httpOnly: true,
            })
          },
          remove(name: string, options: CookieOptions) {
            response.cookies.set({
              name,
              value: '',
              ...options,
              domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com',
              maxAge: 0,
            })
          },
        },
      }
    )

    if (!isDashboardPublicRoute(pathname)) {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (error || !session) {
        const loginUrl = new URL('https://talavidus.com')
        loginUrl.searchParams.set('redirect', `https://prescientmacro.com${pathname}${search}`)
        return NextResponse.redirect(loginUrl, { status: 302 })
      }

      const userRole = session.user.user_metadata?.role || 'user'
      if (pathname.startsWith('/admin') && userRole !== 'admin') {
        return new NextResponse('Forbidden — insufficient privileges.', { status: 403 })
      }
    }

    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin')
    response.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), accelerometer=(), autoplay=(), encrypted-media=(), gyroscope=(), magnetometer=(), midi=(), payment=(), picture-in-picture=(), usb=(), interest-cohort=()'
    )

    return response
  }

  // ── 3. Storefront Context ─────────────────────────────────────────
  if (context === 'storefront') {
    const response = NextResponse.next()

    const cspDirectives = [
      `default-src 'self'`,
      `script-src 'self' 'unsafe-inline' https://*.supabase.co`,
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
      `img-src 'self' data: https:`,
      `font-src 'self' data: https://fonts.gstatic.com`,
      `connect-src 'self' https://*.supabase.co wss://*.supabase.co https://fonts.gstatic.com`,
      `media-src 'self'`,
      `object-src 'none'`,
      `frame-ancestors 'none'`,
      `base-uri 'self'`,
      `form-action 'self'`,
      `upgrade-insecure-requests`,
    ]

    response.headers.set('Content-Security-Policy', cspDirectives.join('; '))
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin')
    response.headers.set('Cross-Origin-Resource-Policy', 'cross-origin')
    response.headers.set(
      'Permissions-Policy',
      'camera=(), microphone=(), geolocation=(), accelerometer=(), autoplay=(), encrypted-media=(), gyroscope=(), magnetometer=(), midi=(), payment=(), picture-in-picture=(), usb=(), interest-cohort=()'
    )

    return response
  }

  // ── 4. Unknown / Fallback context ─────────────────────────────────
  return NextResponse.next()
}

// ── Matcher Configuration ─────────────────────────────────────────────

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|static/).*)',
  ],
}
