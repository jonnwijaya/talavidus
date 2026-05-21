"use client";

const TIERS = [
  {
    name: "Free",
    tagline: "Core intelligence for individual practitioners",
    price: null,
    cta: "Start Free",
    ctaHref: "https://prescient.talavidus.com",
    features: [
      "Core Prescient dashboard",
      "General data streams and regime summaries",
      "Basic sovereign risk telemetry",
      "Community support",
    ],
    note: "No credit card required. Free access is unlimited in duration with calibrated rate limits.",
    variant: "light" as const,
  },
  {
    name: "Professional",
    tagline: "Deeper analytical depth for serious practitioners",
    price: "$99–199 / month",
    cta: "Start 1-Month Trial",
    ctaHref: "https://prescient.talavidus.com/subscribe",
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
    tagline: "Governed system access for allocators and entities",
    price: "~$749 / month",
    cta: "Request Allocation",
    ctaHref: "#contact",
    features: [
      "Everything in Professional",
      "REST API endpoints and webhooks",
      "Custom ML inference pipelines",
      "Dedicated onboarding and integration support",
      "Higher-trust access pathways and audit trails",
      "Telegram digest integration (premium routing)",
      "Service-level agreements",
    ],
    note: "Allocated by seat, tied to mandate and governance structure. Subject to compliance review.",
    variant: "institutional" as const,
  },
];

function TierCard({ tier }: { tier: (typeof TIERS)[number] }) {
  const isPremium = tier.variant === "premium";
  const isInstitutional = tier.variant === "institutional";

  return (
    <div
      className={`flex flex-col border ${
        isPremium
          ? "border-mineral bg-mineral-muted"
          : isInstitutional
            ? "border-ink bg-surface"
            : "border-border bg-surface"
      }`}
    >
      <div className="p-8 md:p-10 flex flex-col flex-grow">
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

        <div className="mt-auto pt-10">
          <a
            href={tier.ctaHref}
            className={`inline-flex items-center justify-center text-center font-sans h-12 w-full text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border ${
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
              dashboard and general data streams are free and unlimited — because
              broad access to sovereign-risk telemetry serves the market. Deeper
              analytical layers, signal histories, and institutional
              infrastructure are governed by structured access tiers that reflect
              the value of the underlying system and the compliance requirements
              of institutional deployment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TIERS.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-border">
          <p className="text-sm font-light leading-body text-ink-lighter max-w-prose">
            Pricing is indicative and may vary by jurisdiction, seat volume, and
            integration complexity. Institutional allocations are
            capacity-constrained and subject to internal review. Nothing herein
            constitutes an offer or solicitation to transact.
          </p>
        </div>
      </div>
    </section>
  );
}
