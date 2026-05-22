import { cookies } from 'next/headers'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

/**
 * Talavidus — Server-Side Supabase Client
 * Creates a Supabase client configured for SSR with cookie-based session
 * management. Use in Server Components, API routes, and Server Actions.
 *
 * Cookie configuration uses .talavidus.com domain for cross-subdomain
 * auth sharing between talavidus.com and prescientmacro.com.
 */

const AUTH_COOKIE_DOMAIN = process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com'

export function createServerSupabaseClient() {
  const cookieStore = cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({
            name,
            value,
            ...options,
            domain: AUTH_COOKIE_DOMAIN,
            sameSite: 'lax',
            secure: true,
            httpOnly: true,
            path: '/',
          })
        } catch {
          // Cookie cannot be set in a Server Component context
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({
            name,
            value: '',
            ...options,
            domain: AUTH_COOKIE_DOMAIN,
            maxAge: 0,
            path: '/',
          })
        } catch {
          // Cookie cannot be removed in a Server Component context
        }
      },
    },
  })
}

export function createMiddlewareSupabaseClient(
  request: NextRequest,
  response: NextResponse
) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        response.cookies.set({
          name,
          value,
          ...options,
          domain: AUTH_COOKIE_DOMAIN,
          sameSite: 'lax',
          secure: true,
          httpOnly: true,
          path: '/',
        })
      },
      remove(name: string, options: CookieOptions) {
        response.cookies.set({
          name,
          value: '',
          ...options,
          domain: AUTH_COOKIE_DOMAIN,
          maxAge: 0,
          path: '/',
        })
      },
    },
  })
}

export function createAdminSupabaseClient() {
  const { createClient } = require('@supabase/supabase-js')

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}
