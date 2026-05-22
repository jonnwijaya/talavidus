import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Risk Disclosures — Talavidus",
  description:
    "Risk disclosures and limitations for Talavidus and the Prescient Engine.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RiskDisclosuresPage() {
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
              Risk disclosures
            </h1>
            <p className="mt-8 text-sm font-light leading-body text-ink-light">
              Nothing on this site constitutes investment advice, an offer, or a
              solicitation to transact. Described capabilities are subject to
              data availability, model limitations, and the regulatory
              constraints of each jurisdiction. Talavidus Limited does not
              manage client assets or execute trades on behalf of institutions.
            </p>
            <p className="mt-6 text-sm font-light leading-body text-ink-light">
              Past calibration does not guarantee future performance. Model
              failure and regime misspecification are treated as design
              assumptions. Every signal carries documented confidence intervals
              and known failure modes. Investment committees and individual
              users retain full discretion and responsibility for every
              deployment decision.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
