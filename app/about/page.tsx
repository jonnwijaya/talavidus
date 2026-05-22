import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "About — Talavidus",
  description:
    "Talavidus is a macro technology and research firm that builds, governs, and operates the Prescient Engine — a sovereign-risk intelligence platform for institutional allocators and advanced practitioners.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                About
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                The company<br />behind Prescient
              </h1>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Talavidus is a macro technology and research firm focused on
                sovereign-risk intelligence and institutional capital
                allocation. We build, govern, and operate the Prescient Engine —
                a regime-aware macro intelligence system that ingests sovereign
                curves, FX regimes, rates volatility, macro telemetry, and
                geopolitical signals as one unified architecture.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Prescient is our flagship engine and product family. Talavidus
                owns the full stack: data ingestion, model governance, inference
                pipelines, subscription middleware, and institutional delivery
                infrastructure. Every output is versioned, attributed, and
                auditable. Investment committees retain full discretion and
                override authority over every signal.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                We serve two audiences. Advanced individual practitioners use
                Prescient for regime-aware intelligence, market narrative
                analysis, and explicit machine-learning verdicts. Institutions —
                reserve managers, family offices, asset allocators, and
                sovereign-wealth entities — use Prescient for API access, custom
                inference pipelines, webhook delivery, and governed audit trails
                integrated into their existing workflows.
              </p>
            </div>
          </div>

          {/* Hierarchy */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Parent company
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-ink-light">
                Talavidus is the institutional brand and operating architecture.
                It governs research, engineering, compliance, and product
                development.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Flagship engine
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-ink-light">
                Prescient is the macro regime and sovereign-risk intelligence
                platform. It is the core system that Talavidus builds, operates,
                and continuously validates.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Future interfaces
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-ink-light">
                Additional products and interfaces will sit on top of the
                Prescient Engine, governed by the same trust and audit
                architecture.
              </p>
            </div>
          </div>

          {/* Facts */}
          <div className="mt-24 pt-10 border-t border-border">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                  Focus
                </p>
                <p className="text-sm font-light text-ink">
                  Sovereign-risk intelligence and regime-aware capital allocation
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                  Output
                </p>
                <p className="text-sm font-light text-ink">
                  Regime states, risk corridors, allocation scaffolds, ML verdicts
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                  Governance
                </p>
                <p className="text-sm font-light text-ink">
                  Versioned, attributed, auditable. Committee override always enabled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
