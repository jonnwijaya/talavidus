import SeatAllocationForm from "@/components/ui/SeatAllocationForm";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="max-w-container mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-lg tracking-wide text-white select-none"
          >
            Talavidus
          </a>
          <ul className="flex items-center gap-10">
            <li>
              <a
                href="#prescient-engine"
                className="text-xs uppercase tracking-ultra text-white transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Engine
              </a>
            </li>
            <li>
              <a
                href="#seat-allocation"
                className="text-xs uppercase tracking-ultra text-white transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Allocation
              </a>
            </li>
            <li>
              <a
                href="#jurisdiction"
                className="text-xs uppercase tracking-ultra text-white transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Jurisdiction
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tight leading-hero text-ink select-none">
            Talavidus
          </h1>
          <p className="mt-10 text-xs uppercase tracking-ultra text-ink-light">
            Sovereign Risk Intelligence
          </p>
          <div className="mt-16">
            <a
              href="#seat-allocation"
              className="group relative inline-flex items-center justify-center text-center border font-sans h-14 bg-transparent px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo overflow-clip border-border-dark text-ink hover:border-ink active:border-ink"
            >
              <span className="relative z-10">Request Allocation</span>
              <span className="absolute inset-0 bg-ink transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-expo" />
              <span className="absolute inset-0 z-10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-expo">
                Request Allocation
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Technical Core Section */}
      <section
        id="prescient-engine"
        className="py-32 md:py-48 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                The Prescient Engine
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base font-light leading-body text-ink-light">
                The Prescient Engine is a proprietary analytical system for
                sovereign risk calibration. It operates on principles of
                unyielding precision and zero redundancy, transforming raw
                intelligence into decisive capital positioning. Where
                conventional models react, the Engine anticipates. Its
                architecture processes petabytes of sovereign data, market
                microstructure, and geopolitical telemetry — distilling
                asymmetric positioning through rigorous quantitative frameworks.
                The result: institutional foresight. The measurement of macro
                forces before they register publicly.
              </p>
            </div>
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Sovereign Risk Telemetry
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Real-time calibration of systemic exposure across sovereign
                balance sheets, currency regimes, and geopolitical fault lines.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Asymmetric Positioning
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Capital allocation engineered for convex outcomes under stress
                conditions conventional architecture cannot model.
              </p>
            </div>
            <div className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                Macro Orchestration
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                Sequenced deployment of institutional reserves into
                regime-critical inflection points, guided by predictive
                analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-border-dark" />
      </div>

      {/* Seat Allocation Form Section */}
      <section id="seat-allocation" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Request Seat Allocation
              </h2>
              <p className="mt-10 text-base font-light leading-body text-ink-light">
                Access to the Prescient Engine is allocated exclusively to
                qualifying institutional entities. Each seat represents a
                binding position within our operational architecture, not a
                subscription.
              </p>
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <p className="text-xs font-light text-ink-lighter tracking-body">
              &copy; 2025 Talavidus Limited. All rights reserved.
            </p>
            <p className="text-xs font-light text-ink-lighter tracking-body max-w-md text-right">
              Talavidus Limited is regulated in all jurisdictions in which it
              operates. This website does not constitute an offer to contract.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
