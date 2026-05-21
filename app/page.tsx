import SeatAllocationForm from "@/components/ui/SeatAllocationForm";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-obsidian-deep/90 backdrop-blur-sm">
        <div className="max-w-container mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
          <a
            href="#"
            className="font-serif text-lg tracking-wide text-snow select-none"
          >
            Talavidus
          </a>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="#prescient-engine"
                className="text-xs uppercase tracking-ultra text-snow transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Engine
              </a>
            </li>
            <li>
              <a
                href="#seat-allocation"
                className="text-xs uppercase tracking-ultra text-snow transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Allocation
              </a>
            </li>
            <li>
              <a
                href="#jurisdiction"
                className="text-xs uppercase tracking-ultra text-snow transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60"
              >
                Jurisdiction
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-8 md:px-16">
        <div className="max-w-container mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight leading-hero text-snow select-none">
            Foreknowledge of the Sovereign
          </h1>
          <p className="mt-8 text-base font-light tracking-body text-slate uppercase">
            Macro orchestration for capital that moves civilisations.
          </p>
          <div className="mt-16">
            <a
              href="#seat-allocation"
              className="inline-block px-10 py-4 bg-obsidian-deep text-snow text-xs uppercase tracking-ultra border border-snow transition-all duration-300 ease-out hover:bg-snow hover:text-obsidian-deep active:bg-ash"
            >
              Request Allocation
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-ink" />
      </div>

      {/* Technical Core Section */}
      <section
        id="prescient-engine"
        className="py-24 md:py-32 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <h2 className="text-2xl font-serif font-normal tracking-section uppercase text-snow">
            The Prescient Engine
          </h2>

          <div className="mt-12 max-w-3xl">
            <p className="text-base font-light leading-body text-slate">
              The Prescient Engine is a proprietary chronometric system for
              sovereign risk calibration. It operates on the same principles
              that govern the finest mechanical timepieces: unyielding precision,
              zero redundancy, and the patient accumulation of potential energy
              into decisive motion. Where conventional models react, the Engine
              anticipates. Its analytical mainspring draws tension from
              petabytes of sovereign data, market microstructure, and
              geopolitical telemetry — releasing that force through calibrated
              escapements of asymmetric capital positioning. Each cycle is
              measured not in seconds, but in the distance between projected
              risk and realised outcome. The result: institutional chronometry.
              The disciplined measurement of macro forces before they register
              on any public dial.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div>
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-snow">
                Sovereign Risk Telemetry
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-slate">
                Real-time calibration of systemic exposure across sovereign
                balance sheets, currency regimes, and geopolitical fault lines.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-snow">
                Asymmetric Positioning
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-slate">
                Capital allocation engineered for convex outcomes under stress
                conditions conventional architecture cannot model.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-snow">
                Macro Orchestration
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-slate">
                Sequenced deployment of institutional reserves into
                regime-critical inflection points, guided by predictive
                chronometry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-ink" />
      </div>

      {/* Seat Allocation Form Section */}
      <section id="seat-allocation" className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-2xl font-serif font-normal tracking-section uppercase text-snow">
                Request Seat Allocation
              </h2>
              <p className="mt-8 text-base font-light leading-body text-slate">
                Access to the Prescient Engine is allocated exclusively to
                qualifying institutional entities. Each seat represents a
                binding position within our operational architecture, not a
                subscription.
              </p>
            </div>
            <SeatAllocationForm />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 md:px-16">
        <div className="w-full h-px bg-ink" />
      </div>

      {/* Footer */}
      <footer
        id="jurisdiction"
        className="py-12 md:py-16 px-8 md:px-16"
      >
        <div className="max-w-container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-xs font-light text-slate-muted">
              &copy; 2025 Talavidus Limited. All rights reserved.
            </p>
            <p className="text-xs font-light text-slate-muted">
              Talavidus Limited is regulated in all jurisdictions in which it
              operates. This website does not constitute an offer to contract.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
