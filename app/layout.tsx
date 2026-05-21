import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talavidus — Sovereign Risk Intelligence",
  description:
    "Foreknowledge of the sovereign. Macro orchestration for capital that moves civilisations. Talavidus is a proprietary analytical system for sovereign risk calibration.",
  keywords: [
    "sovereign risk",
    "macro intelligence",
    "institutional capital",
    "risk calibration",
    "talavidus",
  ],
  openGraph: {
    title: "Talavidus — Sovereign Risk Intelligence",
    description:
      "Foreknowledge of the sovereign. Macro orchestration for capital that moves civilisations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Talavidus — Sovereign Risk Intelligence",
    description:
      "Foreknowledge of the sovereign. Macro orchestration for capital that moves civilisations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://talavidus.com"),
};

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
      </head>
      <body className="bg-background text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
