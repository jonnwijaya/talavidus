"use client";

const EVIDENCE_CARDS = [
  {
    label: "6 / 6 rules",
    headline: "Positive lift versus baseline",
    body: "All six rules demonstrated positive lift over their full available histories. Lift is measured as the increase in hit rate above each rule's own base rate.",
  },
  {
    label: "Defined downside event",
    headline: ">5% S&P 500 max drawdown within 4 weeks",
    body: 'A "hit" is defined strictly: a rule fires, followed by an S&P 500 max drawdown greater than 5% within the next four trading weeks. This creates a transparent, auditable test framework.',
  },
  {
    label: "Since 1980",
    headline: "^GSPC historical window",
    body: "Validation uses backfill_results plus ^GSPC from 1980 onward. SPY does not exist that far back, so the broader index is used to maximize historical depth.",
  },
  {
    label: "Rule-specific variation",
    headline: "Regime-dependent behavior",
    body: "On the common 2023–present window, RULE_1 and RULE_5 showed the strongest performance, while RULE_3 and RULE_6 underperformed their own base rates on that narrower overlap. This is expected regime-specific variation, not system failure.",
  },
];

export default function HistoricalValidationSection() {
  return (
    <section id="validation" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
      <div className="max-w-container mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Validation
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Observed edge, measured against defined downside events.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base font-light leading-body text-ink-light max-w-prose">
              The Prescient Engine is validated against explicit downside-event
              conditions, not directional price targets. Over each rule's
              available history, all six rules showed positive lift versus their
              own baseline — meaning each signal fires more frequently before
              defined stress events than it does at random. This is
              observational evidence of signal quality, not a guarantee of
              future performance.
            </p>
          </div>
        </div>

        {/* Evidence cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EVIDENCE_CARDS.map((card) => (
            <div
              key={card.label}
              className="border border-border bg-background p-8 md:p-10"
            >
              <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
                {card.label}
              </p>
              <h3 className="font-serif text-xl font-light leading-heading tracking-tight text-ink">
                {card.headline}
              </h3>
              <p className="mt-4 text-sm font-light leading-body text-ink-light">
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Methodology + nuance */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <div className="border-t border-border pt-8">
            <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
              Methodology
            </p>
            <p className="text-sm font-light leading-body text-ink-light">
              A "hit" is defined as a rule firing followed by an S&P 500 max
              drawdown greater than 5% within the next 4 trading weeks.
              Historical validation used backfill_results plus ^GSPC from 1980
              onward because SPY does not exist that far back. Over each
              rule's available history, all six rules showed positive lift
              versus their own base rate.
            </p>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
              Nuance
            </p>
            <p className="text-sm font-light leading-body text-ink-light">
              On the common 2023–present window, RULE_1 and RULE_5 were
              strongest, while RULE_3 and RULE_6 underperformed base on that
              narrower overlap. This variation is consistent with
              regime-dependent signal behavior and is documented as part of
              the engine's known performance profile.
            </p>
          </div>
        </div>

        {/* Disclaimer + CTA */}
        <div className="mt-20 pt-10 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
            <div className="lg:col-span-8">
              <p className="text-sm font-light leading-body text-ink-lighter max-w-prose">
                These are observational historical results, not guarantees of
                future performance. Past calibration does not imply future
                accuracy. Signal quality varies across market regimes, and each
                rule carries documented confidence intervals and known failure
                modes.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#research"
                className="inline-flex items-center justify-center text-center font-sans h-12 bg-transparent px-8 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-border-dark text-ink hover:border-ink"
              >
                Review Full Methodology
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
