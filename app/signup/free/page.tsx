import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Start Free — Talavidus",
  description:
    "Create a free Prescient account. Access the core dashboard, general macro data streams, and regime summaries at no cost.",
  robots: {
    index: true,
    follow: true,
  },
};

const FEATURES = [
  "Core Prescient dashboard",
  "General macro data streams",
  "Regime summaries and basic telemetry",
  "Community support",
];

export default function FreeSignupPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Free Access
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Start with<br />free core access
              </h1>
              <p className="mt-8 text-sm font-light leading-body text-ink-light max-w-prose">
                The core Prescient dashboard and general macro data streams are
                free and unlimited. Broad access to sovereign-risk telemetry
                serves the market. No credit card required.
              </p>

              <ul className="mt-10 space-y-4">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 block w-1 h-1 shrink-0 bg-ink-light" />
                    <span className="text-sm font-light text-ink-light leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <a
                  href="https://prescient.talavidus.com"
                  className="inline-flex items-center justify-center text-center font-sans h-14 bg-ink px-10 text-xs uppercase tracking-ultra transition-all duration-500 ease-expo border border-ink text-white hover:bg-transparent hover:text-ink"
                >
                  Create Free Account
                </a>
                <p className="mt-4 text-[11px] font-light text-ink-lighter leading-relaxed">
                  Unlimited duration with calibrated rate limits. Upgrade to
                  Professional at any time.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-border p-8 md:p-12 bg-surface">
                <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                  What you get
                </p>
                <h2 className="font-serif text-2xl font-light tracking-tight text-ink mb-6">
                  Core intelligence for individual practitioners
                </h2>
                <p className="text-sm font-light leading-body text-ink-light max-w-prose mb-8">
                  Free access includes the Prescient dashboard, general macro
                  data streams, and regime summaries. It is designed for
                  practitioners who want to understand the sovereign-risk
                  landscape before committing to deeper analytical layers.
                </p>

                <div className="border-t border-border pt-8 space-y-6">
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      No time limit
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Free access does not expire. Use the core dashboard for as
                      long as you need.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      No credit card required
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      Sign up with an email address. No payment information is
                      collected for free accounts.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-sans font-medium tracking-section uppercase text-ink">
                      Upgrade when ready
                    </h3>
                    <p className="mt-2 text-sm font-light leading-body text-ink-light">
                      When you need market narratives, signal histories, and
                      explicit ML verdicts, upgrade to Professional in one click.
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
