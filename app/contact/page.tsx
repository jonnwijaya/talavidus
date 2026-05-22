import type { Metadata } from "next";
import Navbar from "@/components/ui/Navbar";
import ContactForm from "@/components/ui/ContactForm";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Contact — Talavidus",
  description:
    "Contact Talavidus for general inquiries, product questions, institutional access, API integrations, research, or partnerships.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 md:pt-40 pb-24 px-8 md:px-16">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-ultra text-ink-light mb-6">
                Contact
              </p>
              <h1 className="font-serif text-3xl md:text-5xl font-light leading-heading tracking-tight text-ink">
                Get in<br />touch
              </h1>
              <p className="mt-8 text-sm font-light leading-body text-ink-light max-w-prose">
                For general inquiries, product questions, institutional access,
                API integrations, research questions, or partnership
                discussions, send us a message and we will respond directly.
              </p>
              <p className="mt-6 text-sm font-light leading-body text-ink-lighter max-w-prose">
                For compliance matters, please contact{" "}
                <a
                  href="mailto:compliance@talavidus.com"
                  className="text-ink transition-colors duration-300 hover:text-ink-light"
                >
                  compliance@talavidus.com
                </a>
                .
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
