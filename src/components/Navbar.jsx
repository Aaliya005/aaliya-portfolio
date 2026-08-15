import React, { useEffect, useState } from "react";
import { Code2, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Works", href: "#works" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
      <div className="container-main flex items-center justify-between py-6">
        <a href="#home" className="flex items-center gap-2 text-dark font-bold text-lg">
          <Code2 size={20} />
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-dark font-semibold"
                    : "text-gray-500 hover:text-dark"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <a
            href="https://github.com/Aaliya005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-dark transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/aaliyamanyar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-dark transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:aaliyamanyar05@gmail.com"
            aria-label="Email"
            className="hover:text-dark transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-dark hover:bg-dark/5 transition-colors"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 bottom-0 w-72 max-w-[80%] bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
              <span className="font-bold text-dark">Menu</span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col px-5 py-4 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-3 rounded-lg text-base transition-colors ${
                      isActive
                        ? "bg-dark/5 text-dark font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto flex items-center gap-5 px-5 py-6 border-t border-gray-100 text-gray-400">
              <a
                href="https://github.com/Aaliya005"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-dark transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/aaliyamanyar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-dark transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:aaliyamanyar05@gmail.com"
                aria-label="Email"
                className="hover:text-dark transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}