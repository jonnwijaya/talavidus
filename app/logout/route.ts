import { createServerSupabaseClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

/**
 * Talavidus — Logout Handler
 * GET /logout
 *
 * Signs the user out and clears all auth cookies across subdomains,
 * then redirects to the storefront.
 */

export async function GET() {
  const supabase = createServerSupabaseClient()
  await supabase.auth.signOut()

  const cookieDomain = process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com'
  const storefrontUrl = process.env.NEXT_PUBLIC_STOREFRONT_URL || 'https://talavidus.com'

  return NextResponse.redirect(storefrontUrl, {
    headers: {
      'Set-Cookie': [
        `sb-access-token=; Domain=${cookieDomain}; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
        `sb-refresh-token=; Domain=${cookieDomain}; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`,
      ].join(', '),
    },
  })
}
