"use client";

import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { href: "#engine", label: "Engine" },
  { href: "#architecture", label: "Architecture" },
  { href: "#research", label: "Research" },
  { href: "#allocation", label: "Allocation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateNavbar = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      setIsAtTop(currentScrollY < 10);

      if (delta > 10 && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      } else if (delta < -5) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbar);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-expo ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop ? "" : "bg-background/90 backdrop-blur-sm border-b border-border"}`}
      >
        <div className="max-w-container mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
          <a
            href="#"
            className={`font-serif text-lg tracking-wide select-none transition-colors duration-300 ${
              isAtTop && !isOpen
                ? "text-white mix-blend-difference"
                : "text-ink"
            }`}
          >
            Talavidus
          </a>

          <div className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`text-xs uppercase tracking-ultra transition-opacity duration-300 ease-out hover:opacity-60 focus-visible:opacity-60 ${
                      isAtTop
                        ? "text-white mix-blend-difference"
                        : "text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#allocation"
              className={`text-xs uppercase tracking-ultra transition-opacity duration-300 ease-out hover:opacity-60 ${
                isAtTop ? "text-white mix-blend-difference" : "text-ink"
              }`}
            >
              Request Allocation
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-1.5 transition-colors duration-300 ${
              isOpen ? "text-ink" : isAtTop ? "text-white mix-blend-difference" : "text-ink"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-opacity duration-300 ease-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-current transition-transform duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-500 ease-expo md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 px-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl font-light text-ink tracking-tight transition-opacity duration-300 hover:opacity-50"
              style={{
                transitionDelay: isOpen ? `${i * 75}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#allocation"
            onClick={() => setIsOpen(false)}
            className="font-serif text-4xl font-light text-ink tracking-tight transition-opacity duration-300 hover:opacity-50"
            style={{
              transitionDelay: isOpen ? `${NAV_LINKS.length * 75}ms` : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transitionProperty: "opacity, transform",
              transitionDuration: "500ms",
              transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
            }}
          >
            Request Allocation
          </a>
        </div>
      </div>
    </>
  );
}
