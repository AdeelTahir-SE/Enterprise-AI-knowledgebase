import Link from "next/link";
import {
  BadgeCheck,
  Check,
  Clock3,
  DatabaseBackup,
  Globe2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for getting started",
    cta: "Start Free Trial",
    featured: false,
    features: [
      "Up to 5,000 documents",
      "50K queries / month",
      "1 AI assistant",
      "Basic integrations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    description: "For growing teams",
    cta: "Start Free Trial",
    featured: true,
    features: [
      "Up to 50,000 documents",
      "500K queries / month",
      "5 AI assistants",
      "Advanced integrations",
      "Priority support",
    ],
  },
  {
    name: "Business",
    price: "$499",
    period: "/month",
    description: "For larger organizations",
    cta: "Start Free Trial",
    featured: false,
    features: [
      "Up to 250,000 documents",
      "2M queries / month",
      "Unlimited assistants",
      "SSO and SCIM",
      "Advanced analytics",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For enterprise scale needs",
    cta: "Contact Sales",
    featured: false,
    features: [
      "Unlimited documents",
      "Unlimited queries",
      "Custom integrations",
      "Dedicated support",
      "SLA and On-prem options",
    ],
  },
];

const included = [
  { label: "Secure Infrastructure", icon: LockKeyhole },
  { label: "99.9% Uptime SLA", icon: Clock3 },
  { label: "Data Encryption", icon: ShieldCheck },
  { label: "Regular Backups", icon: DatabaseBackup },
  { label: "Global Support", icon: Globe2 },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="relative overflow-hidden border-b border-border-light py-14 sm:py-16 lg:py-20">
          <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(108,63,238,0.08),transparent_62%)]" />
          <div className="container-main">
            <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
                Simple, transparent pricing
              </h1>
              <p className="mt-4 text-sm font-medium leading-6 text-text-light sm:text-base">
                Choose the plan that fits your needs. Upgrade or downgrade anytime.
              </p>

              <div className="mt-7 inline-flex items-center rounded-lg border border-border bg-white p-1 shadow-[0_8px_24px_-18px_rgba(17,24,39,0.35)]">
                <button className="rounded-md px-4 py-2 text-xs font-semibold text-text-medium hover:bg-section-bg">
                  Monthly
                </button>
                <button className="inline-flex items-center gap-2 rounded-md bg-primary-lighter px-4 py-2 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  Annual
                </button>
                <span className="ml-1 rounded-md bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-600">
                  Save 20%
                </span>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`relative flex min-h-[420px] flex-col rounded-lg border bg-white p-7 shadow-[0_1px_3px_rgba(17,24,39,0.04)] ${
                    plan.featured
                      ? "border-primary/25 ring-1 ring-primary/15"
                      : "border-border"
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute right-5 top-0 -translate-y-1/2 rounded-md bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-primary/20">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h2 className="text-base font-bold text-text-dark">{plan.name}</h2>
                    <div className="mt-5 flex items-end gap-1">
                      <span className="text-4xl font-bold tracking-tight text-text-dark">{plan.price}</span>
                      {plan.period && <span className="pb-1 text-sm font-medium text-text-medium">{plan.period}</span>}
                    </div>
                    <p className="mt-3 text-sm font-medium text-text-light">{plan.description}</p>
                  </div>

                  <ul className="mb-7 space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-medium leading-5 text-text-medium">
                        <Check size={16} className="mt-0.5 shrink-0 text-primary" strokeWidth={2.4} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.name === "Enterprise" ? "#" : "/signup"}
                    className={`mt-auto inline-flex min-h-12 items-center justify-center rounded-lg border px-5 text-sm font-bold ${
                      plan.featured
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
                        : "border-border bg-white text-text-dark hover:border-primary/30 hover:bg-primary-lighter hover:text-primary"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 text-base font-bold text-text-dark">
                <BadgeCheck size={18} className="text-primary" />
                All plans include
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {included.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex items-center justify-center gap-3 rounded-lg border border-border-light bg-white px-4 py-4 text-sm font-semibold text-text-medium">
                    <Icon size={18} className="shrink-0 text-primary" strokeWidth={1.9} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}