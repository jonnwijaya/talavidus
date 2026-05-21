"use client";

const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { label: "Prescient Engine", href: "#prescient" },
      { label: "Access Model", href: "#access" },
      { label: "Start Free", href: "https://prescient.talavidus.com" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Talavidus", href: "#talavidus" },
      { label: "Architecture", href: "#architecture" },
      { label: "Research", href: "#research" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Jurisdictions", href: "#" },
      { label: "Risk Disclosures", href: "#" },
      { label: "Compliance", href: "mailto:compliance@talavidus.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-8 md:px-16 border-t border-border-dark">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-serif text-lg tracking-wide text-ink mb-4">
              Talavidus
            </p>
            <p className="text-xs font-light text-ink-lighter tracking-body max-w-sm leading-relaxed">
              Talavidus is a macro technology and research firm that builds,
              governs, and operates the Prescient Engine — a sovereign-risk
              intelligence platform for institutional allocators and advanced
              practitioners.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-6 md:col-start-7 grid grid-cols-3 gap-8">
            {FOOTER_LINKS.map((group) => (
              <div key={group.title}>
                <p className="text-[10px] uppercase tracking-ultra text-ink-lighter mb-4">
                  {group.title}
                </p>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs font-light text-ink-light tracking-body transition-colors duration-300 hover:text-ink"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-[11px] font-light text-ink-lighter tracking-body max-w-xl leading-relaxed">
            &copy; 2025 Talavidus Limited. All rights reserved. Talavidus
            Limited is regulated in all jurisdictions in which it operates.
            Nothing on this site constitutes investment advice, an offer, or a
            solicitation to transact.
          </p>
          <a
            href="mailto:compliance@talavidus.com"
            className="text-xs uppercase tracking-ultra text-ink-lighter transition-colors duration-300 hover:text-ink shrink-0"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
