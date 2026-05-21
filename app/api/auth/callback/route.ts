import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'

/**
 * Talavidus — OAuth / PKCE Auth Callback Handler
 * GET /api/auth/callback
 *
 * Handles the OAuth redirect from Supabase after authentication.
 * Exchanges the authorization code for a session and sets cookies
 * for cross-subdomain authentication.
 */

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') || '/'

  const cookieDomain = process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com'
  const dashboardHost = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://prescient.talavidus.com'
  const storefrontHost = process.env.NEXT_PUBLIC_STOREFRONT_URL || 'https://talavidus.com'

  if (code) {
    const response = NextResponse.redirect(`${origin}${next}`)

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
              domain: cookieDomain,
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
              domain: cookieDomain,
              maxAge: 0,
              path: '/',
            })
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      const dashboardUrl = new URL(next, dashboardHost)
      return NextResponse.redirect(dashboardUrl)
    }

    console.error('[auth/callback] Session exchange error:', error.message)
  }

  const errorUrl = new URL('/', storefrontHost)
  errorUrl.searchParams.set('error', 'auth_failed')
  return NextResponse.redirect(errorUrl)
}
