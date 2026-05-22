# Talavidus

Corporate web presence for Talavidus — sovereign risk intelligence and macro orchestration.

## Domains

| Domain | Application | Auth Required |
|--------|-------------|---------------|
| `talavidus.com` | Static Storefront | No |
| `prescientmacro.com` | Secure Dashboard | Yes (PKCE OAuth) |

## Tech Stack

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- Supabase (Auth + Database)

## Local Development

```bash
npm install
npm run dev
```

Set environment variables in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_AUTH_COOKIE_DOMAIN=localhost
NEXT_PUBLIC_STOREFRONT_URL=http://localhost:3000
NEXT_PUBLIC_DASHBOARD_URL=http://localhost:3000
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Add the environment variables in **Project Settings > Environment Variables**.
4. For production, set:
   - `NEXT_PUBLIC_AUTH_COOKIE_DOMAIN` = `.talavidus.com`
   - `NEXT_PUBLIC_STOREFRONT_URL` = `https://talavidus.com`
   - `NEXT_PUBLIC_DASHBOARD_URL` = `https://prescientmacro.com`
5. Deploy.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/
│   │   ├── auth/callback/  # OAuth PKCE callback
│   │   └── seat-request/   # Seat allocation form handler
│   ├── login/              # Dashboard login
│   ├── logout/             # Clears session cookies
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx            # Storefront landing page
├── components/
│   └── ui/
│       └── SeatAllocationForm.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts       # Browser Supabase client
│   │   └── server.ts       # Server / middleware / admin clients
│   └── validations.ts      # Form validation helpers
├── middleware.ts           # Edge middleware (subdomain routing + auth)
├── next.config.js          # Next.js config + security headers
├── tailwind.config.ts
└── vercel.json             # Vercel platform config
```
