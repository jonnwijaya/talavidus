import SeatAllocationForm from "@/components/ui/SeatAllocationForm";
import Navbar from "@/components/ui/Navbar";
import ResearchSection from "@/components/ui/ResearchSection";
import ArchitectureSection from "@/components/ui/ArchitectureSection";

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

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#seat-allocation"
              className="group relative inline-flex items-center justify-center text-center border font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo overflow-clip border-ink text-white hover:bg-transparent hover:text-ink"
            >
              <span className="relative z-10">Request Allocation</span>
            </a>
            <a
              href="#prescient-engine"
              className="group relative inline-flex items-center justify-center text-center border font-sans h-14 bg-transparent px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo overflow-clip border-border-dark text-ink hover:border-ink"
            >
              <span className="relative z-10">Learn about the Prescient Engine</span>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* The Problem + Solution */}
      <section className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Institutional Context
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                What Traditional Macro Processes Miss
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Discretionary macro relies on narrative coherence: a story
                about inflation, a conviction on rates, a read on political
                risk. These stories are persuasive in committee rooms, but
                they fracture when regimes shift. The underlying data —
                sovereign balance sheets, cross‑border flow anomalies, term
                structure stress — often contradicts the consensus view
                weeks before the narrative breaks.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Talavidus builds sovereign risk telemetry and regime‑aware
                allocation frameworks that surface these contradictions
                early. The Prescient Engine measures sovereign curves, FX
                misalignments, rates volatility, and macro data coherence
                across horizons from three months to five years. Outputs
                are signals, risk corridors, and deployment suggestions
                designed to integrate into existing governance — not to
                replace it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* The Prescient Engine */}
      <section
        id="prescient-engine"
        className="py-32 md:py-48 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Flagship Product
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                The Prescient Engine
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                The Prescient Engine is a proprietary analytical system for
                sovereign risk calibration and macro regime detection. It
                operates on principles of unyielding precision and zero
                redundancy, transforming raw intelligence into decisive
                capital positioning.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Where conventional models react to headline surprises, the
                Engine anticipates regime transitions by monitoring
                petabytes of sovereign data, market microstructure, and
                geopolitical telemetry. Its architecture spans sovereign
                curves, FX regimes, rates volatility, and balance‑sheet
                stress indicators — distilling asymmetric positioning
                opportunities through rigorous quantitative frameworks.
              </p>
              <p className="text-base font-light leading-body text-ink-light max-w-prose">
                Output is structured for institutional consumption: regime
                probability signals, risk corridors calibrated to mandate
                constraints, and reserve deployment suggestions with full
                attribution. Every output is explainable to an investment
                committee and auditable for compliance review.
              </p>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Sovereign Telemetry
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Real‑time calibration of systemic exposure across sovereign
                balance sheets, currency regimes, and geopolitical fault
                lines.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Regime Calibration
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Probabilistic regime detection across inflation, growth,
                and financial stress cycles — with explicit confidence
                intervals and known failure modes.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Deployment Frameworks
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Sequenced reserve deployment into regime‑critical
                inflection points, mapped to existing mandate constraints
                and liquidity requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Research & Evidence */}
      <section className="py-32 md:py-48 px-8 md:px-16 bg-surface">
        <div className="max-w-container mx-auto">
          <ResearchSection />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Architecture & Governance */}
      <section className="py-32 md:py-48 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <ArchitectureSection />
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Seat Allocation */}
      <section id="seat-allocation" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Institutional Access
              </p>
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Request Seat Allocation
              </h2>
              <div className="mt-10 space-y-6 text-base font-light leading-body text-ink-light">
                <p>
                  Access to the Prescient Engine is allocated exclusively
                  to qualifying institutional entities. Each seat
                  represents a binding position within our operational
                  architecture, not a subscription.
                </p>
                <p>
                  Allocation decisions are made by Talavidus on a
                  rolling basis, subject to internal review, regulatory
                  obligations, and capacity constraints. Submission
                  constitutes a non‑binding expression of interest.
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
            <div className="md:col-span-6">
              <p className="font-serif text-lg tracking-wide text-ink mb-4">
                Talavidus
              </p>
              <p className="text-xs font-light text-ink-lighter tracking-body max-w-sm">
                A macro technology and research firm focused on sovereign
                risk intelligence and institutional capital allocation.
              </p>
            </div>
            <div className="md:col-span-6 md:text-right">
              <p className="text-xs font-light text-ink-lighter tracking-body">
                &copy; 2025 Talavidus Limited. All rights reserved.
              </p>
              <p className="mt-4 text-xs font-light text-ink-lighter tracking-body max-w-sm md:ml-auto">
                Talavidus Limited is regulated in all jurisdictions in
                which it operates. This website does not constitute an
                offer to contract. Nothing described herein is a
                solicitation. Capabilities are subject to jurisdictional
                constraints, data availability, and model limitations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
