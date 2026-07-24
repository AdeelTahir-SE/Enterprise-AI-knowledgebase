import Image from "next/image";
import Link from "next/link";
import { Check, Database, Eye, LockKeyhole, Mail, UserRound } from "lucide-react";
import type { ReactNode } from "react";

type AuthShellProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
  return (
    <main className="min-h-screen bg-section-bg p-4 sm:p-6 lg:p-8">
      <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-6xl overflow-hidden rounded-2xl border border-border bg-white shadow-[0_18px_60px_-40px_rgba(17,24,39,0.45)] sm:min-h-[calc(100vh-48px)] lg:grid-cols-[0.9fr_1.1fr]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#5B3FE6] via-primary to-[#7C5CE6] p-8 text-white sm:p-10 lg:p-12">
          <div className="relative z-10 flex h-full flex-col justify-between gap-12">
            <Link href="/" className="inline-flex w-fit items-center gap-2.5">
              <Image src="/logo.png" alt="" width={40} height={40} priority className="h-9 w-9 object-contain brightness-0 invert" />
              <span className="text-xl font-bold">KnowMatrix</span>
            </Link>

            <div className="max-w-sm">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
              <p className="mb-8 text-sm leading-7 text-white/75 sm:text-base">{subtitle}</p>
              <ul className="space-y-4 text-sm font-medium text-white/85">
                {["No credit card required", "Setup in less than 2 minutes", "Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                      <Check size={15} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3 text-white/70">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm"><Database size={20} /></div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm"><LockKeyhole size={20} /></div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-sm"><Mail size={20} /></div>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute right-12 top-20 h-24 w-24 rounded-full border border-white/15" />
        </section>

        <section className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
          <div className="w-full max-w-md">{children}</div>
        </section>
      </div>
    </main>
  );
}

export function AuthField({ label, type = "text", placeholder, icon }: { label: string; type?: string; placeholder: string; icon: "user" | "mail" | "lock" }) {
  const Icon = icon === "user" ? UserRound : icon === "mail" ? Mail : LockKeyhole;

  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-text-medium">{label}</span>
      <span className="flex h-12 items-center gap-3 rounded-lg border border-border bg-white px-4 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
        <Icon size={18} className="text-text-lighter" />
        <input type={type} placeholder={placeholder} className="min-w-0 flex-1 border-0 bg-transparent text-sm text-text-dark outline-none placeholder:text-text-lighter" />
        {type === "password" && <Eye size={18} className="text-text-lighter" />}
      </span>
    </label>
  );
}
