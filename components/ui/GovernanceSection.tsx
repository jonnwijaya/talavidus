"use client";

export default function GovernanceSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
          Governance,<br />risk, and<br />limitations
        </h2>
      </div>

      <div className="lg:col-span-8 space-y-10">
        <p className="text-base font-light leading-body text-ink-light max-w-prose">
          Model failure and regime misspecification are treated as design
          assumptions, not edge cases. Every signal carries documented
          confidence intervals, known failure modes, and override
          protocols. Independent risk review is conducted quarterly.
          Investment committees retain full discretion over every
          deployment decision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Model Governance
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light">
              Versioned model cards, back‑test documentation, and
              standing committee review of signal drift and decay.
            </p>
          </div>
          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Override & Audit
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light">
              Full attribution for every suggestion. Committees can
              override any signal with documented rationale.
            </p>
          </div>
          <div className="border-t border-border pt-8">
            <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
              Limitations
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light">
              Output depends on data availability, jurisdictional
              constraints, and mandate alignment. Past calibration
              does not guarantee future performance.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm font-light leading-body text-ink-lighter max-w-prose">
            Nothing on this site constitutes investment advice, an offer,
            or a solicitation to transact. Described capabilities are
            subject to data availability, model limitations, and the
            regulatory constraints of each jurisdiction. Talavidus
            Limited does not manage client assets or execute trades on
            behalf of institutions.
          </p>
        </div>
      </div>
    </div>
  );
}
