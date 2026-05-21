"use client";

const OUTPUTS = [
  {
    label: "Ingests",
    value:
      "Sovereign curves, FX regimes, rates volatility, macro series, balance-sheet telemetry, and geopolitical signals",
  },
  {
    label: "Outputs",
    value:
      "Regime probability states, risk corridors, allocation scaffolds, signal histories, and explicit ML verdicts",
  },
  {
    label: "Horizon",
    value:
      "Regime shifts and structural stress paths (3 months to 5 years)",
  },
];

const CAPABILITIES = [
  {
    title: "Sovereign risk telemetry",
    body: "Real-time calibration of systemic exposure across sovereign balance sheets, currency regimes, and geopolitical fault lines. Detects stress before it propagates to liquid markets.",
  },
  {
    title: "Regime-aware positioning",
    body: "Probabilistic regime detection across inflation, growth, and financial stress cycles — with explicit confidence intervals, attribution, and documented failure modes.",
  },
  {
    title: "Machine-learning verdicts",
    body: "Structured inference from multi-modal data. Every verdict carries a confidence score, historical backtest reference, and an explainability trail for committee review.",
  },
];

export default function PrescientSection() {
  return (
    <section id="prescient" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Flagship Engine
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Prescient
            </h2>
            <p className="mt-6 text-base font-light leading-body text-ink-light max-w-prose">
              Prescient is Talavidus&apos; macro regime and sovereign-risk
              intelligence platform. It ingests quantitative and qualitative
              signals as one system, then outputs structured intelligence for
              allocation decisions — not intraday moves, but structural
              inflections that alter the risk landscape over quarters and years.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-base font-light leading-body text-ink-light max-w-prose">
              The Engine is designed for users who need more than data. It
              produces regime probability states, risk corridors calibrated to
              mandate constraints, and allocation scaffolds that can be reviewed,
              challenged, and overridden by an investment committee. Every
              suggestion carries attribution to its underlying indicators,
              documented confidence intervals, and known failure modes.
            </p>

            {/* Facts row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border">
              {OUTPUTS.map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm font-light text-ink leading-relaxed">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {CAPABILITIES.map((cap) => (
            <div key={cap.title} className="border-t border-border pt-10">
              <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                {cap.title}
              </h3>
              <p className="mt-6 text-sm font-light leading-body text-ink-light">
                {cap.body}
              </p>
            </div>
          ))}
        </div>

        {/* Who it serves */}
        <div className="mt-24 pt-10 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
                Advanced Individuals
              </p>
              <p className="text-sm font-light leading-body text-ink-light max-w-prose">
                Portfolio managers, analysts, and sophisticated practitioners who
                need regime-aware intelligence, market narrative analysis, and
                explicit ML verdicts to inform discretionary decisions.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
                Institutions
              </p>
              <p className="text-sm font-light leading-body text-ink-light max-w-prose">
                Reserve managers, family offices, asset allocators, and
                sovereign-wealth entities that require API access, custom
                inference pipelines, webhook delivery, and governed audit trails
                integrated into their existing workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
