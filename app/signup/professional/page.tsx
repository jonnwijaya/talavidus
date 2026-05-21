import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Start Professional Trial — Talavidus",
  description:
    "Start a one-month trial of Prescient Professional. For advanced solo traders and finance professionals who need market narratives, signal histories, and machine-learning verdicts.",
  robots: {
    index: true,
    follow: true,
  },
};

const FEATURES = [
  "Everything in Free",
  "Market narrative analysis",
  "Signal histories and backtest trails",
  "Explicit machine-learning verdicts",
  "Deeper analytical views and attribution",
  "Priority email support",
];

export default function ProfessionalSignupPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Professional
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Start your<br />1-month trial
              </h1>
              <p className="mt-8 text-sm font-light leading-body text-ink-light max-w-prose">
                Prescient Professional is designed for advanced solo traders and
                finance professionals who need deeper analytical depth, signal
                histories, and explicit machine-learning verdicts to inform
                discretionary decisions.
              </p>

              <p className="mt-6 text-sm font-medium tracking-section uppercase text-mineral">
                $99–199 / month
              </p>

              <ul className="mt-10 space-y-4">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 block w-1 h-1 shrink-0 bg-mineral" />
                    <span className="text-sm font-light text-ink-light leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href="https://prescient.talavidus.com/subscribe"
                  className="inline-flex items-center justify-center text-center font-sans h-14 bg-mineral px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-mineral text-white hover:bg-transparent hover:text-mineral"
                >
                  Start 1-Month Trial
                </a>
                <p className="mt-4 text-[11px] font-light text-ink-lighter leading-relaxed">
                  Billed monthly after trial. Cancel anytime. Pricing is
                  indicative and may vary by jurisdiction.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-mineral p-8 md:p-12 bg-mineral-muted">
                <p className="text-xs uppercase tracking-ultra text-mineral mb-6">
                  What you get
                </p>
                <h2 className="font-serif text-2xl font-light tracking-tight text-ink mb-6">
                  Serious analytical depth for professionals
                </h2>
                <p className="text-sm font-light leading-body text-ink-light max-w-prose mb-8">
                  Professional unlocks the full inference layer of the Prescient
                  Engine: market narrative analysis, signal histories with
                  backtest trails, and explicit machine-learning verdicts with
                  confidence scores and attribution.
                </p>

                <div className="border-t border-border pt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      Market narrative analysis
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Structured interpretation of regime shifts, balance-sheet
                      stress, and geopolitical signals — not just data, but
                      readable intelligence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      Signal histories
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Full access to historical regime states, risk corridors,
                      and model verdicts with documented confidence intervals
                      and failure modes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      Machine-learning verdicts
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Explicit inference output with confidence scores,
                      attribution trails, and explainability references for
                      committee review or personal decision-making.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      One-month trial
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Start with a full month at no cost. Cancel before the
                      trial ends and pay nothing. After the trial, billing is
                      monthly with no lock-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
