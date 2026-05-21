import { createBrowserClient } from '@supabase/ssr'
import type { SupabaseClient } from '@supabase/supabase-js'

/**
 * Talavidus — Client-Side Supabase Client
 * Creates a Supabase client for use in Client Components.
 * Uses the PKCE auth flow with cookie-based session storage.
 *
 * The browser client automatically handles:
 *   - Token refresh
 *   - Cookie persistence
 *   - Cross-subdomain session sharing (via .talavidus.com cookie domain)
 */

let browserClient: SupabaseClient | null = null

export function getBrowserSupabaseClient(): SupabaseClient {
  if (browserClient) {
    return browserClient
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

  browserClient = createBrowserClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      flowType: 'pkce',
      autoRefreshToken: true,
      detectSessionInUrl: true,
      persistSession: true,
    },
    cookieOptions: {
      domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_DOMAIN || '.talavidus.com',
      sameSite: 'lax',
      secure: true,
    },
  })

  return browserClient
}

export function useSupabaseBrowser() {
  return getBrowserSupabaseClient()
}
