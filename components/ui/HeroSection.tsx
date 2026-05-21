"use client";

export default function HeroSection() {
  return (
    <section
      id="talavidus"
      className="min-h-screen flex flex-col items-center justify-center px-8 md:px-16 pt-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs uppercase tracking-ultra text-ink-light mb-8">
          The systems company behind Prescient
        </p>
        <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tight leading-hero text-ink select-none">
          Talavidus
        </h1>
        <p className="mt-10 text-sm md:text-base font-light leading-body text-ink-light max-w-lg mx-auto">
          Talavidus builds sovereign-risk intelligence systems for institutional
          allocators, reserve managers, and advanced individual practitioners.
        </p>
        <p className="mt-4 text-xs text-ink-lighter tracking-body max-w-md mx-auto">
          Capital preservation through regime-aware macro telemetry, machine-learning
          verdicts, and governed data architecture.
        </p>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#prescient"
            className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink"
          >
            Explore Prescient
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-center font-sans h-14 bg-transparent px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-border-dark text-ink hover:border-ink"
          >
            Request Access
          </a>
        </div>
        <p className="mt-4 text-[11px] text-ink-lighter tracking-body">
          Free core access available. Professional and institutional tiers
          governed by seat allocation.
        </p>
      </div>
    </section>
  );
}
