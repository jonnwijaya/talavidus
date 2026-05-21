"use client";

interface Paper {
  tag: string;
  title: string;
  summary: string;
  href: string;
}

const PAPERS: Paper[] = [
  {
    tag: "WHITEPAPER",
    title: "Thinking Machine: Macro Regime Engine Evidence",
    summary:
      "A methodology paper on how discretionary committees can integrate quantitative regime signals without ceding mandate authority. Covers attribution, override protocols, and audit trails.",
    href: "#",
  },
  {
    tag: "TECHNICAL NOTE",
    title: "ML Integration: Design, Training, and Architecture",
    summary:
      "An empirical assessment of classifier performance across four decades of sovereign balance‑sheet data. Documents precision, recall, and failure modes under structural break conditions.",
    href: "#",
  },
  {
    tag: "WHITEPAPER",
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
        <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
          Research
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
          Research and<br />evidence base
        </h2>
        <p className="mt-8 text-sm font-light leading-body text-ink-light">
          Every engine capability is backed by a documented evidence base
          and methodology reviewed for institutional governance standards.
        </p>
      </div>
      <div className="lg:col-span-8 space-y-12">
        {PAPERS.map((paper) => (
          <div
            key={paper.title}
            className="group border-t border-border pt-8"
          >
            <span className="text-[10px] uppercase tracking-ultra text-ink-lighter">
              {paper.tag}
            </span>
            <h3 className="mt-3 font-serif text-xl md:text-2xl font-light text-ink leading-heading">
              {paper.title}
            </h3>
            <p className="mt-4 text-sm font-light leading-body text-ink-light max-w-prose">
              {paper.summary}
            </p>
            <a
              href={paper.href}
              className="inline-block mt-6 text-xs uppercase tracking-ultra text-ink-light transition-colors duration-300 hover:text-ink"
            >
              Download paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
