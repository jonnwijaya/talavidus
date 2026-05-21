"use client";

const SYSTEM_CAPABILITIES = [
  {
    title: "Governed API Access",
    body: "Authenticated REST endpoints with subscription-gated analytical depth. Every request is traced, rate-limited, and auditable. Institutional clients receive dedicated API keys with higher-trust access pathways.",
  },
  {
    title: "Real-Time Data Delivery",
    body: "Multi-container cloud cluster ingesting sovereign curves, FX regimes, rates volatility, and macro telemetry continuously. Data is validated, transformed, and versioned before it reaches the inference layer.",
  },
  {
    title: "ML Verdict Routing",
    body: "Machine-learning models produce structured verdicts with confidence scores, attribution trails, and known failure modes. Verdicts are routed through subscription-aware middleware — free users see summaries; professional and institutional users receive full inference depth.",
  },
  {
    title: "Worker-Based Digest Delivery",
    body: "Celery workers manage asynchronous digest generation and delivery. Free digests provide regime summaries. Premium digests include narrative analysis, signal histories, and explicit ML verdicts routed via webhook or secure push.",
  },
  {
    title: "Subscription Middleware",
    body: "Gated access to analytical depth is enforced at the API and worker layers, not just the UI. This ensures institutional clients can trust that sensitive inference pipelines and custom models remain within their governed perimeter.",
  },
  {
    title: "Institutional Workflows",
    body: "Custom ML inference pipelines, webhook integrations, and dedicated onboarding for entities with specific mandate constraints. Every integration is documented, tested, and supported by direct engineering contact.",
  },
];

export default function SystemCredibilitySection() {
  return (
    <section id="architecture" className="py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
              System Credibility
            </p>
            <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
              Operating<br />infrastructure
            </h2>
            <p className="mt-8 text-sm font-light leading-body text-ink-light max-w-prose">
              Talavidus is an operating systems company, not a concept brand.
              The Prescient Engine runs on production infrastructure designed for
              reliability, auditability, and institutional governance.
            </p>
          </div>

          <div className="lg:col-span-8">
            {/* System diagram */}
            <div className="border border-border p-8 md:p-12 bg-surface mb-16">
              <div className="flex flex-col items-center gap-0">
                {/* Data Sources */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {["Sovereign Curves", "FX Regimes", "Macro Telemetry", "Geopolitical Signals"].map(
                    (src) => (
                      <div
                        key={src}
                        className="text-center border border-border px-3 py-3"
                      >
                        <span className="text-[11px] uppercase tracking-section text-ink-light">
                          {src}
                        </span>
                      </div>
                    )
                  )}
                </div>

                {/* Connector */}
                <div className="w-px h-6 bg-border-dark" />

                {/* Ingestion Layer */}
                <div className="w-full max-w-md text-center border border-border px-6 py-3">
                  <span className="text-[11px] uppercase tracking-section text-ink-light">
                    Real-Time Ingestion & Validation
                  </span>
                </div>

                {/* Connector */}
                <div className="w-px h-6 bg-border-dark" />

                {/* Inference Layer */}
                <div className="w-full max-w-md text-center border border-ink bg-ink px-6 py-4">
                  <span className="font-serif text-lg text-white tracking-tight">
                    Prescient Engine
                  </span>
                  <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mt-2">
                    Regime detection · Risk corridors · ML verdicts
                  </p>
                </div>

                {/* Connector */}
                <div className="w-px h-6 bg-border-dark" />

                {/* Delivery Layer */}
                <div className="w-full max-w-md text-center border border-border px-6 py-3">
                  <span className="text-[11px] uppercase tracking-section text-ink-light">
                    Subscription-Gated Delivery
                  </span>
                </div>

                {/* Connector */}
                <div className="w-px h-6 bg-border-dark" />

                {/* Interfaces */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg">
                  {[
                    { label: "Dashboard", sub: "Free & Professional" },
                    { label: "API & Webhooks", sub: "Institutional" },
                    { label: "Digest Bots", sub: "All tiers" },
                  ].map((iface) => (
                    <div
                      key={iface.label}
                      className="text-center border border-border px-4 py-3"
                    >
                      <span className="text-sm font-light text-ink">
                        {iface.label}
                      </span>
                      <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mt-1">
                        {iface.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Capability grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {SYSTEM_CAPABILITIES.map((cap) => (
                <div key={cap.title} className="border-t border-border pt-6">
                  <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                    {cap.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-body text-ink-light">
                    {cap.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
