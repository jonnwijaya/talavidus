"use client";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 md:py-48 px-8 md:px-16 bg-surface">
      <div className="max-w-container mx-auto">
        {/* Governance intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Governance
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Access &<br />allocation
            </h2>
          </div>
          <div className="lg:col-span-8 space-y-10">
            <p className="text-base font-light leading-body text-ink-light max-w-prose">
              Model failure and regime misspecification are treated as design
              assumptions, not edge cases. Every signal carries documented
              confidence intervals, known failure modes, and override protocols.
              Independent risk review is conducted quarterly. Investment
              committees retain full discretion over every deployment decision.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                  Model Governance
                </h3>
                <p className="mt-4 text-sm font-light leading-body text-ink-light">
                  Versioned model cards, back-test documentation, and standing
                  committee review of signal drift and decay.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                  Override & Audit
                </h3>
                <p className="mt-4 text-sm font-light leading-body text-ink-light">
                  Full attribution for every suggestion. Committees can override
                  any signal with documented rationale.
                </p>
              </div>
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                  Limitations
                </h3>
                <p className="mt-4 text-sm font-light leading-body text-ink-light">
                  Output depends on data availability, jurisdictional
                  constraints, and mandate alignment. Past calibration does not
                  guarantee future performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border-dark mb-24" />

        {/* Dual access paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Individual path */}
          <div>
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Individual Practitioners
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-heading tracking-tight text-ink">
              Start with free core access
            </h3>
            <p className="mt-6 text-sm font-light leading-body text-ink-light max-w-prose">
              Explore the Prescient dashboard, general macro data streams, and
              regime summaries at no cost. Upgrade to Professional when you need
              deeper analytical depth, signal histories, and explicit ML
              verdicts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="/signup/free"
                className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink"
              >
                Start Free
              </a>
              <a
                href="/signup/professional"
                className="inline-flex items-center justify-center text-center font-sans h-14 bg-transparent px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-border-dark text-ink hover:border-ink"
              >
                Start Professional Trial
              </a>
            </div>
          </div>

          {/* Institutional path */}
          <div>
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              Institutions
            </p>
            <h3 className="font-serif text-2xl md:text-3xl font-light leading-heading tracking-tight text-ink">
              Discuss deployment
            </h3>
            <p className="mt-6 text-sm font-light leading-body text-ink-light max-w-prose">
              Institutional access is a bespoke commercial arrangement priced
              according to integration scope, access level, throughput,
              workflow requirements, onboarding, and support. Each engagement is
              provisioned for a specific entity and tied to its mandate and
              governance structure.
            </p>
            <p className="mt-6 text-sm font-light leading-body text-ink-lighter max-w-prose">
              Capabilities include API access, webhooks, higher-throughput
              delivery, custom inference pipelines, tailored workflows, and
              dedicated onboarding and support.
            </p>
            <div className="mt-10">
              <a
                href="/request-allocation"
                className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink"
              >
                Request institutional access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
