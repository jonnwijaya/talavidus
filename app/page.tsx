import SeatAllocationForm from "@/components/ui/SeatAllocationForm";
import Navbar from "@/components/ui/Navbar";
import ResearchSection from "@/components/ui/ResearchSection";
import ArchitectureSection from "@/components/ui/ArchitectureSection";
import GovernanceSection from "@/components/ui/GovernanceSection";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tight leading-hero text-ink select-none">
            Talavidus
          </h1>
          <p className="mt-10 text-xs uppercase tracking-ultra text-ink-light">
            Sovereign Risk Intelligence
          </p>
          <p className="mt-6 text-sm font-light leading-body text-ink-light max-w-md mx-auto">
            Talavidus is a macro technology firm that builds sovereign‑risk
            engines for institutional allocators and reserve managers.
          </p>

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#allocation"
              className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink"
            >
              Request Allocation
            </a>
            <a
              href="#engine"
              className="inline-flex items-center justify-center text-center font-sans h-14 bg-transparent px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-border-dark text-ink hover:border-ink"
            >
              Learn about the Prescient Engine
            </a>
          </div>
          <p className="mt-4 text-[11px] text-ink-lighter tracking-body">
            For institutional entities and reserve managers.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* The Prescient Engine */}
      <section
        id="engine"
        className="py-32 md:py-48 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Engine
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                The Prescient Engine
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                The Prescient Engine ingests sovereign curves, FX regimes,
                rates volatility, macro series, and balance‑sheet telemetry
                as one system. It reads geopolitical signals alongside
                quantitative data to detect regime transitions and stress
                paths — not intraday moves, but structural inflections that
                alter the risk landscape over quarters and years.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Output is structured for institutional governance: regime
                probability states, risk corridors calibrated to mandate
                constraints, and allocation scaffolds that can be reviewed,
                challenged, and overridden by an investment committee.
                Every suggestion carries attribution to its underlying
                indicators, documented confidence intervals, and known
                failure modes.
              </p>

              {/* Facts row */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                    Universe
                  </p>
                  <p className="text-sm font-light text-ink">
                    Sovereign curves, FX, rates, macro data, balance sheets
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                    Horizon
                  </p>
                  <p className="text-sm font-light text-ink">
                    Regime shifts and stress paths (3 months to 5 years)
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                    Output
                  </p>
                  <p className="text-sm font-light text-ink">
                    Regime states, risk corridors, allocation scaffolds
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Sovereign risk telemetry
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Real‑time calibration of systemic exposure across sovereign
                balance sheets, currency regimes, and geopolitical fault
                lines.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Regime‑aware positioning
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Probabilistic regime detection across inflation, growth,
                and financial stress cycles — with explicit confidence
                intervals and known failure modes.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Governed architecture
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Every output is versioned, attributed, and auditable.
                Committees retain full discretion and override authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Architecture */}
      <section id="architecture" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
        <div className="max-w-container mx-auto">
          <ArchitectureSection />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Research & Evidence */}
      <section id="research" className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <ResearchSection />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Governance */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-surface">
        <div className="max-w-container mx-auto">
          <GovernanceSection />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Seat Allocation */}
      <section id="allocation" className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Allocation
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Seat allocation<br />process
              </h2>
              <p className="mt-8 text-sm font-medium tracking-section uppercase text-ink">
                Access by institutional mandate
              </p>
              <div className="mt-8 space-y-6 text-base font-light leading-body text-ink-light">
                <p>
                  Access to the Prescient Engine is allocated by seat, not
                  by subscription. Each seat is provisioned for a specific
                  institutional entity and tied to its mandate and
                  governance structure.
                </p>
                <p>
                  Submissions are non‑binding expressions of interest.
                  Allocation is capacity‑constrained and subject to
                  internal review, regulatory obligations, and compliance
                  verification in each relevant jurisdiction.
                </p>
                <p className="text-sm text-ink-lighter">
                  Nothing on this site constitutes an offer or
                  solicitation. Described capabilities are subject to
                  jurisdictional constraints, data availability, and
                  model limitations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <SeatAllocationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Footer */}
      <footer
        id="jurisdiction"
        className="py-16 md:py-24 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="font-serif text-lg tracking-wide text-ink mb-4">
                Talavidus
              </p>
              <p className="text-xs font-light text-ink-lighter tracking-body max-w-sm">
                A macro technology and research firm focused on sovereign
                risk intelligence and institutional capital allocation.
              </p>
            </div>
            <div className="md:col-span-4 md:col-start-9 md:text-right">
              <p className="text-xs font-light text-ink-lighter tracking-body">
                &copy; 2025 Talavidus Limited. All rights reserved.
              </p>
              <p className="mt-4 text-xs font-light text-ink-lighter tracking-body">
                Talavidus Limited is regulated in all jurisdictions in
                which it operates. Nothing on this site constitutes
                investment advice, an offer, or a solicitation to transact.
              </p>
              <div className="mt-6 flex md:justify-end gap-6">
                <a
                  href="#"
                  className="text-xs uppercase tracking-ultra text-ink-lighter transition-colors duration-300 hover:text-ink"
                >
                  Jurisdictions
                </a>
                <a
                  href="#"
                  className="text-xs uppercase tracking-ultra text-ink-lighter transition-colors duration-300 hover:text-ink"
                >
                  Risk disclosures
                </a>
                <a
                  href="mailto:compliance@talavidus.com"
                  className="text-xs uppercase tracking-ultra text-ink-lighter transition-colors duration-300 hover:text-ink"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
