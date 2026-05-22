import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Compliance — Talavidus",
  description:
    "Compliance, regulatory, and jurisdictional information for Talavidus Limited.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CompliancePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Legal
            </p>
            <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Compliance
            </h1>
            <p className="mt-8 text-sm font-light leading-body text-ink-light">
              Talavidus Limited is regulated in all jurisdictions in which it
              operates. Nothing on this site constitutes investment advice, an
              offer, or a solicitation to transact.
            </p>
            <p className="mt-6 text-sm font-light leading-body text-ink-light">
              For compliance inquiries, please contact{" "}
              <a
                href="mailto:compliance@talavidus.com"
                className="text-ink transition-colors duration-300 hover:text-ink-light"
              >
                compliance@talavidus.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
