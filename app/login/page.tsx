/**
 * Talavidus — Login Page (Dashboard Subdomain)
 * prescient.talavidus.com/login
 *
 * Server-rendered login page that initiates the Supabase PKCE OAuth flow.
 */

import { createServerSupabaseClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { redirect?: string; error?: string }
}) {
  const supabase = createServerSupabaseClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect(searchParams.redirect || '/')
  }

  const callbackUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL
    ? `${process.env.NEXT_PUBLIC_DASHBOARD_URL}/api/auth/callback`
    : 'https://prescient.talavidus.com/api/auth/callback'

  const {
    data: { url },
    error,
  } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: callbackUrl,
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  })

  if (error || !url) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-8">
          <h1 className="text-2xl font-serif font-light text-ink mb-4">Authentication Error</h1>
          <p className="text-ink-light">
            {error?.message || 'Failed to initialize authentication flow.'}
          </p>
        </div>
      </main>
    )
  }

  redirect(url)
}
