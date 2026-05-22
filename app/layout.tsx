import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talavidus — Sovereign Risk Intelligence",
  description:
    "Talavidus is a macro technology and research firm focused on sovereign risk intelligence and institutional capital allocation. The Prescient Engine provides regime‑aware signals, risk corridors, and deployment frameworks for allocators and reserve managers.",
  keywords: [
    "sovereign risk",
    "macro intelligence",
    "institutional capital",
    "risk calibration",
    "regime detection",
    "talavidus",
    "prescient engine",
  ],
  openGraph: {
    title: "Talavidus — Sovereign Risk Intelligence",
    description:
      "Macro technology and research for institutional allocators and reserve managers.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talavidus — Sovereign Risk Intelligence",
    description:
      "Macro technology and research for institutional allocators and reserve managers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://talavidus.com"),
};

const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-ink font-sans antialiased transition-colors duration-300 ease-out">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
