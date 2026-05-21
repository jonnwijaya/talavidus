"use client";

interface Paper {
  title: string;
  summary: string;
  href: string;
}

const PAPERS: Paper[] = [
  {
    title: "Thinking Machine: A Governance Framework for Algorithmic Macro",
    summary:
      "A methodology paper on how discretionary committees can integrate quantitative regime signals without ceding mandate authority. Covers attribution, override protocols, and audit trails.",
    href: "#",
  },
  {
    title: "Machine Learning in Macro Regime Detection: Feasibility and Limits",
    summary:
      "An empirical assessment of classifier performance across four decades of sovereign balance‑sheet data. Documents precision, recall, and failure modes under structural break conditions.",
    href: "#",
  },
  {
    title: "Sovereign Risk Telemetry: Signal Construction and Calibration",
    summary:
      "Describes the data architecture behind the Prescient Engine’s sovereign risk layer: source validation, ingestion frequency, transformation logic, and out‑of‑sample testing protocols.",
    href: "#",
  },
];

export default function ResearchSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-4">
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
          Research &<br />Evidence
        </h2>
      </div>
      <div className="lg:col-span-8 space-y-12">
        {PAPERS.map((paper) => (
          <div
            key={paper.title}
            className="group border-t border-border pt-8"
          >
            <h3 className="font-serif text-xl md:text-2xl font-light text-ink leading-heading">
              {paper.title}
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light max-w-prose">
              {paper.summary}
            </p>
            <a
              href={paper.href}
              className="inline-block mt-6 text-xs uppercase tracking-ultra text-ink-light transition-colors duration-300 hover:text-ink"
            >
              Download PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
