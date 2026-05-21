"use client";

export default function ArchitectureSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
          Architecture<br />& Governance
        </h2>
      </div>

      <div className="lg:col-span-8 space-y-16">
        {/* Hierarchy Diagram */}
        <div className="border border-border p-8 md:p-12 bg-surface">
          <div className="flex flex-col items-center gap-6">
            {/* Talavidus */}
            <div className="w-full max-w-xs text-center border border-ink px-6 py-4">
              <span className="font-serif text-lg text-ink">Talavidus</span>
              <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-1">
                Holdco & Governance
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-6 bg-border-dark" />

            {/* Prescient Engine */}
            <div className="w-full max-w-xs text-center border border-ink bg-ink px-6 py-4">
              <span className="font-serif text-lg text-white">
                Prescient Engine
              </span>
              <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mt-1">
                Core Signal & Risk System
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-6 bg-border-dark" />

            {/* Interfaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
              <div className="text-center border border-border px-4 py-3">
                <span className="font-serif text-base text-ink">
                  Prescient Macro
                </span>
                <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-1">
                  Invite‑Only Beta
                </p>
              </div>
              <div className="text-center border border-border px-4 py-3">
                <span className="font-serif text-base text-ink">
                  Future Interfaces
                </span>
                <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-1">
                  Under Development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Copy */}
        <div className="space-y-8">
          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Model Governance
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light max-w-prose">
              Every signal produced by the Prescient Engine is versioned,
              back‑tested, and documented before it reaches any interface.
              Model cards record training windows, feature sets,
              hyperparameters, and known limitations. A standing risk
              committee reviews signal drift, regime coverage, and
              out‑of‑sample decay on a quarterly basis.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Explainability & Audit
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light max-w-prose">
              Allocators and their investment committees receive
              attribution reports that map every allocation suggestion to
              its underlying telemetry: which sovereign indicators moved,
              which regime probability shifted, and what the confidence
              interval was at the time of generation. Nothing is opaque
              by design.
            </p>
          </div>

          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Risk Controls
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light max-w-prose">
              The engine does not execute trades, manage mandates, or
              assume discretion. It produces signals and risk corridors.
              Final reserve deployment decisions rest entirely with the
              allocator’s committee and are subject to their own
              investment policy, regulatory constraints, and liquidity
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
