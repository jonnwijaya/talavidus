import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import SeatAllocationForm from "@/components/ui/SeatAllocationForm";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Request Institutional Access — Talavidus",
  description:
    "Request seat allocation for institutional access to the Prescient Engine. Bespoke commercial arrangements for allocators, reserve managers, and sovereign-wealth entities.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RequestAllocationPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Institutional Access
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Request<br />allocation
              </h1>
              <p className="mt-8 text-sm font-light leading-body text-ink-light max-w-prose">
                Institutional access to the Prescient Engine is a bespoke
                commercial arrangement. Each engagement is priced according to
                integration scope, access level, throughput, workflow
                requirements, onboarding, and support.
              </p>
              <p className="mt-6 text-sm font-light leading-body text-ink-light max-w-prose">
                Capabilities include API access, webhooks, higher-throughput
                delivery, custom inference pipelines, tailored workflows, and
                dedicated onboarding and support.
              </p>
              <p className="mt-8 text-sm font-light leading-body text-ink-lighter max-w-prose">
                Submissions are non-binding expressions of interest. Allocation
                is capacity-constrained and subject to internal review,
                regulatory obligations, and compliance verification in each
                relevant jurisdiction.
              </p>
            </div>
            <div className="lg:col-span-7">
              <SeatAllocationForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
