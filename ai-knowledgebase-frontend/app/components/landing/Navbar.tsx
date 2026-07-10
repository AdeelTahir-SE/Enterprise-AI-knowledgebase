"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Product", hasDropdown: true, href: "#" },
  { label: "Solutions", hasDropdown: true, href: "#" },
  { label: "Resources", hasDropdown: true, href: "#" },
  { label: "Developers", hasDropdown: true, href: "#" },
  { label: "Pricing", hasDropdown: false, href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image src="/logo-mark.png" alt="" width={56} height={56} priority className="h-12 w-12 object-contain" />
          <span className="text-xl font-bold text-text-dark">KnowMatrix</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-medium hover:bg-primary-lighter hover:text-primary">
              {link.label}
              {link.hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-60" />}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/login" className="px-3 py-2 text-sm font-medium text-text-medium hover:text-primary">Sign in</Link>
          <Link href="/signup" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]">Get Started Free</Link>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-lg p-2 text-text-dark hover:bg-section-bg lg:hidden" aria-label="Toggle menu" aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-main flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-text-medium hover:bg-primary-lighter hover:text-primary">
                {link.label}
                {link.hasDropdown && <ChevronRight size={14} className="opacity-60" />}
              </Link>
            ))}
            <hr className="my-2 border-border" />
            <Link href="/login" className="px-3 py-3 text-sm font-medium text-text-medium hover:text-primary">Sign in</Link>
            <Link href="/signup" className="mt-1 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark">Get Started Free</Link>
          </div>
        </div>
      )}
    </nav>
  );
}




