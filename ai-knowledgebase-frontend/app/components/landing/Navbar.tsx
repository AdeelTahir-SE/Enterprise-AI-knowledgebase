"use client";

import { useState } from "react";

const navLinks = [
  { label: "Product", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Developers", hasDropdown: true },
  { label: "Pricing", hasDropdown: false, href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="container-main flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
          </div>
          <span className="text-lg font-bold text-text-dark">KnowMatrix</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href || "#"}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text-medium hover:text-primary rounded-lg hover:bg-primary-lighter transition-colors"
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-0.5 opacity-60">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-text-medium hover:text-primary transition-colors px-3 py-2">
            Sign in
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-section-bg transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-main py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href || "#"}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-text-medium hover:text-primary rounded-lg hover:bg-primary-lighter transition-colors"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-60">
                    <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </a>
            ))}
            <hr className="my-2 border-border" />
            <a href="#" className="px-3 py-2.5 text-sm font-medium text-text-medium hover:text-primary">Sign in</a>
            <a href="#" className="mt-1 inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark">
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
