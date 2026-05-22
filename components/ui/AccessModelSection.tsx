"use client";

const TIERS = [
  {
    name: "Free",
    tagline: "Core dashboard access and general macro data streams",
    price: null,
    cta: "Start Free",
    ctaHref: "/signup/free",
    features: [
      "Core Prescient dashboard",
      "General macro data streams",
      "Regime summaries and basic telemetry",
      "Community support",
    ],
    note: "No credit card required. Unlimited duration.",
    variant: "light" as const,
  },
  {
    name: "Professional",
    tagline: "For advanced solo traders and finance professionals",
    price: "$199 / month",
    cta: "Start 1-Month Trial",
    ctaHref: "/signup/professional",
    features: [
      "Everything in Free",
      "Market narrative analysis",
      "Signal histories and backtest trails",
      "Explicit machine-learning verdicts",
      "Deeper analytical views and attribution",
      "Priority email support",
    ],
    note: "One-month trial, then billed monthly. Cancel anytime.",
    variant: "premium" as const,
  },
  {
    name: "Institutional",
    tagline: "Bespoke commercial arrangement for allocators and entities",
    price: "Custom pricing",
    cta: "Request institutional access",
    ctaHref: "/request-allocation",
    features: [
      "Everything in Professional",
      "API access and webhooks",
      "Higher-throughput delivery",
      "Custom inference pipelines",
      "Tailored workflows",
      "Dedicated onboarding and support",
      "Service-level agreements",
    ],
    note: "Allocated by seat. Subject to compliance review.",
    variant: "institutional" as const,
  },
];

function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  const isPremium = tier.variant === "premium";
  const isInstitutional = tier.variant === "institutional";

  return (
    <div
      className={`pricing-card flex flex-col h-full border ${
        isPremium
          ? "border-mineral bg-mineral-muted"
          : isInstitutional
            ? "border-ink bg-surface"
            : "border-border bg-surface"
      }`}
    >
      <div className="pricing-card__content flex flex-col flex-1 p-8 md:p-10">
        {/* Header */}
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h3
              className={`font-serif text-2xl font-light tracking-tight ${
                isPremium ? "text-mineral" : "text-ink"
              }`}
            >
              {tier.name}
            </h3>
            {isPremium && (
              <span className="text-[10px] uppercase tracking-ultra text-mineral">
                Recommended
              </span>
            )}
          </div>
          <p className="mt-3 text-sm font-light leading-body text-ink-light">
            {tier.tagline}
          </p>

          {tier.price && (
            <p className="mt-6 text-sm font-medium tracking-section uppercase text-ink">
              {tier.price}
            </p>
          )}
        </div>

        {/* Features */}
        <div className="flex-1 pb-16">
          <ul className="mt-8 space-y-3">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  className={`mt-2 block w-1 h-1 shrink-0 ${
                    isPremium ? "bg-mineral" : "bg-ink-light"
                  }`}
                />
                <span className="text-sm font-light text-ink-light leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer — pushed to bottom with consistent height */}
        <div className="pricing-card__footer mt-auto flex flex-col justify-start min-h-[120px]">
          <a
            href={tier.ctaHref}
            className={`pricing-card__button inline-flex items-center justify-center text-center font-sans h-12 w-full text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border ${
              isPremium
                ? "border-mineral bg-mineral text-white hover:bg-transparent hover:text-mineral"
                : isInstitutional
                  ? "border-ink bg-ink text-white hover:bg-transparent hover:text-ink"
                  : "border-border-dark bg-transparent text-ink hover:border-ink"
            }`}
          >
            {tier.cta}
          </a>
          <p className="mt-4 text-[11px] font-light text-ink-lighter leading-relaxed">
            {tier.note}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AccessModelSection() {
  return (
    <section id="access" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Structured Access
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Access Model
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base font-light leading-body text-ink-light max-w-prose">
              Prescient operates on a freemium data utility model. The core
              dashboard and general macro data streams are free and unlimited —
              because broad access to sovereign-risk telemetry serves the market.
              Deeper analytical layers, signal histories, and institutional
              infrastructure are governed by structured access tiers that reflect
              the value of the underlying system and the compliance requirements
              of institutional deployment.
            </p>
          </div>
        </div>

        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm font-light leading-body text-ink-lighter max-w-prose">
            Professional pricing is indicative and may vary by jurisdiction.
            Institutional arrangements are bespoke and priced according to
            integration scope, access level, throughput, and support
            requirements. Nothing herein constitutes an offer or solicitation to
            transact.
          </p>
        </div>
      </div>
    </section>
  );
}
