"use client";

export default function ArchitectureSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      <div className="lg:col-span-4">
        <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
          Architecture
        </p>
        <h2 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
          Architecture of<br />the Talavidus stack
        </h2>
      </div>

      <div className="lg:col-span-8 space-y-10">
        <p className="text-base font-light leading-body text-ink-light max-w-prose">
          Talavidus owns, builds, and governs the Prescient Engine.
          The Engine is the sovereign‑risk and macro regime core.
          Interfaces such as Prescient Macro sit on top of it,
          translating engine outputs into actionable workflows for
          allocators and committees.
        </p>

        {/* Hierarchy */}
        <div className="border border-border p-8 md:p-12 bg-surface">
          <div className="flex flex-col items-center gap-0">
            {/* Talavidus */}
            <div className="w-full max-w-sm text-center border border-ink px-6 py-5">
              <span className="font-serif text-xl text-ink">Talavidus</span>
              <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-2">
                Macro technology and research architecture
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-border-dark" />

            {/* Prescient Engine */}
            <div className="w-full max-w-sm text-center border border-ink bg-ink px-6 py-5">
              <span className="font-serif text-xl text-white">
                Prescient Engine
              </span>
              <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mt-2">
                Sovereign‑risk and macro regime core
              </p>
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-border-dark" />

            {/* Interfaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
              <div className="text-center border border-border px-5 py-4">
                <span className="font-serif text-lg text-ink">
                  Prescient Macro
                </span>
                <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-2">
                  Invite‑only beta interface
                </p>
              </div>
              <div className="text-center border border-border px-5 py-4">
                <span className="font-serif text-lg text-ink">
                  Future Interfaces
                </span>
                <p className="text-[10px] uppercase tracking-ultra text-ink-light mt-2">
                  Under development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
