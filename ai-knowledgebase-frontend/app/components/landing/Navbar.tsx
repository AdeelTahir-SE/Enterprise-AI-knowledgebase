"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  Bot,
  Building2,
  ChevronDown,
  ChevronRight,
  Database,
  FileText,
  Headphones,
  Layers,
  LifeBuoy,
  Menu,
  Newspaper,
  Plug,
  ShieldCheck,
  X,
} from "lucide-react";

const navLinks = [
  {
    label: "Product",
    href: "#",
    items: [
      { label: "AI Assistants", description: "Build assistants over private data", href: "#", icon: Bot },
      { label: "Knowledge Base", description: "Ingest documents, chunks, and indexes", href: "#", icon: Database },
      { label: "Security", description: "Enterprise controls and governance", href: "#", icon: ShieldCheck },
      { label: "Integrations", description: "Connect business tools and APIs", href: "#", icon: Plug },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    items: [
      { label: "Customer Support", description: "Resolve tickets with trusted answers", href: "#", icon: Headphones },
      { label: "Internal Teams", description: "Give employees instant knowledge", href: "#", icon: Building2 },
      { label: "Compliance", description: "Audit-ready answers and workflows", href: "#", icon: FileText },
      { label: "AI Operations", description: "Monitor assistants at scale", href: "#", icon: Layers },
    ],
  },
  {
    label: "Resources",
    href: "#",
    items: [
      { label: "Blog", description: "Guides, product thinking, and RAG lessons", href: "/blog", icon: Newspaper },
      { label: "Docs", description: "Developer guides and API reference", href: "/docs", icon: BookOpen },
      { label: "Case Studies", description: "How teams deploy KnowMatrix", href: "#", icon: FileText },
      { label: "Help Center", description: "Support articles and best practices", href: "#", icon: LifeBuoy },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="container-main flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={48} height={48} priority className="h-11 w-11 object-contain" />
          <span className="text-xl font-bold text-text-dark">KnowMatrix</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const hasDropdown = Boolean(link.items?.length);

            return (
              <div key={link.label} className="group relative">
                <Link href={link.href} className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-text-medium hover:bg-primary-lighter hover:text-primary">
                  {link.label}
                  {hasDropdown && <ChevronDown size={14} className="mt-0.5 opacity-60 group-hover:rotate-180" />}
                </Link>

                {hasDropdown && (
                  <div className="invisible absolute left-1/2 top-full w-[360px] -translate-x-1/2 pt-3 opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-lg border border-border bg-white p-2 shadow-[0_18px_50px_-24px_rgba(17,24,39,0.38)]">
                      {link.items?.map(({ label, description, href, icon: Icon }) => (
                        <Link key={label} href={href} className="flex gap-3 rounded-lg p-3 hover:bg-primary-lighter">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-section-bg text-primary">
                            <Icon size={19} />
                          </span>
                          <span>
                            <span className="block text-sm font-bold text-text-dark">{label}</span>
                            <span className="mt-1 block text-xs leading-5 text-text-light">{description}</span>
                          </span>
                        </Link>
                      ))}
                      <div className="mt-1 rounded-lg bg-section-bg px-3 py-2 text-xs font-semibold text-text-light">
                        Explore templates, workflows, and deployment patterns for enterprise AI teams.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            {navLinks.map((link) => {
              const hasDropdown = Boolean(link.items?.length);

              return (
                <div key={link.label}>
                  <Link href={link.href} className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-text-medium hover:bg-primary-lighter hover:text-primary">
                    {link.label}
                    {hasDropdown && <ChevronRight size={14} className="opacity-60" />}
                  </Link>
                  {hasDropdown && (
                    <div className="ml-3 border-l border-border pl-3">
                      {link.items?.map(({ label, href, icon: Icon }) => (
                        <Link key={label} href={href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-text-light hover:bg-primary-lighter hover:text-primary">
                          <Icon size={14} />
                          {label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <hr className="my-2 border-border" />
            <Link href="/login" className="px-3 py-3 text-sm font-medium text-text-medium hover:text-primary">Sign in</Link>
            <Link href="/signup" className="mt-1 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary-dark">Get Started Free</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
