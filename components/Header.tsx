"use client";

import { useState, useEffect } from "react";
import { Camera, Menu, X } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`flex items-center gap-2.5 font-semibold text-lg tracking-tight transition-colors ${
            scrolled ? "text-stone-900" : "text-white"
          }`}
        >
          <Camera size={20} className="text-accent" />
          <span className="font-display">Tuhami Photography</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                scrolled ? "text-stone-600" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors shadow-sm"
        >
          Check Availability
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-stone-700" : "text-white"
          }`}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 px-5 pb-5 pt-3 shadow-lg">
          <nav className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 text-stone-700 font-medium text-sm border-b border-stone-100 last:border-0 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center px-5 py-3 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors"
          >
            Check Availability
          </a>
        </div>
      )}
    </header>
  );
}
