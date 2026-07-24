"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, Settings } from "lucide-react";
import type { ReactNode } from "react";

type OnboardingShellProps = {
  currentStep: 1 | 2;
  children: ReactNode;
};

export default function OnboardingShell({ currentStep, children }: OnboardingShellProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── Top Navbar ─── */}
      <nav className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="container-main flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="" width={48} height={48} priority className="h-12 w-12 object-contain" />
            <span className="text-xl font-bold text-text-dark">KnowMatrix</span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-lg text-text-light hover:bg-section-bg hover:text-text-dark">
              <Settings size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                AT
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-text-dark leading-tight">Adeel Tahir</p>
                <p className="text-xs text-text-light">adeel@example.com</p>
              </div>
              <ChevronDown size={16} className="text-text-lighter hidden sm:block" />
            </div>
          </div>
        </div>
      </nav>

      {/* ─── Stepper ─── */}
      <div className="border-b border-border-light bg-white">
        <div className="container-main flex items-center justify-center gap-0 py-6">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                currentStep === 1
                  ? "bg-primary text-white"
                  : "bg-primary/10 text-primary"
              }`}
            >
              {currentStep > 1 ? <Check size={16} strokeWidth={3} /> : "1"}
            </div>
            <span
              className={`text-xs font-semibold ${
                currentStep === 1 ? "text-primary" : "text-text-light"
              }`}
            >
              Organization
            </span>
          </div>

          {/* Connector */}
          <div className="mx-4 mb-5 h-0.5 w-16 sm:w-24 rounded-full bg-border">
            <div
              className={`h-full rounded-full bg-primary transition-all ${
                currentStep > 1 ? "w-full" : "w-0"
              }`}
            />
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                currentStep === 2
                  ? "bg-primary text-white"
                  : "bg-section-bg text-text-lighter"
              }`}
            >
              2
            </div>
            <span
              className={`text-xs font-semibold ${
                currentStep === 2 ? "text-primary" : "text-text-lighter"
              }`}
            >
              Project
            </span>
          </div>
        </div>
      </div>

      {/* ─── Content ─── */}
      <div className="container-main pt-14 pb-20 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-xl">{children}</div>
      </div>
    </div>
  );
}
