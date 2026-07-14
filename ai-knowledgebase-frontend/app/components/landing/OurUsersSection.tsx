import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  Calculator,
  GraduationCap,
  Hospital,
  Scale,
  Sparkles,
  UsersRound,
} from "lucide-react";

const industries = [
  {
    title: "Hospitals",
    label: "Uses in Healthcare",
    description: "Enhance patient care, streamline operations, and unlock insights from clinical and administrative data.",
    icon: Hospital,
    points: ["Patient record analysis", "Clinical decision support", "Operational efficiency", "Compliance reporting"],
  },
  {
    title: "Legal Firms",
    label: "Uses in Legal Practice",
    description: "Search through cases, contracts, and legal documents to find relevant information in seconds.",
    icon: Scale,
    points: ["Case law research", "Contract analysis", "Due diligence automation", "Document summarization"],
  },
  {
    title: "CA Firms",
    label: "Uses in Finance & Accounting",
    description: "Automate bookkeeping, audit workflows, and financial analysis using intelligent data processing.",
    icon: Calculator,
    points: ["Audit documentation", "Financial statement analysis", "Tax research and compliance", "Risk assessment"],
  },
  {
    title: "Banks",
    label: "Uses in Banking",
    description: "Improve risk management, customer service, and compliance with AI-powered insights from data.",
    icon: Banknote,
    points: ["Fraud detection", "Credit risk analysis", "Customer query resolution", "Regulatory compliance"],
  },
  {
    title: "Universities",
    label: "Uses in Education",
    description: "Enhance research, automate administrative tasks, and provide smarter support for students and faculty.",
    icon: GraduationCap,
    points: ["Research paper discovery", "Student support automation", "Knowledge repository", "Academic analytics"],
  },
  {
    title: "And Many More",
    label: "Across Every Industry",
    description: "From startups to enterprises, KnowMatrix adapts to your data and helps your team work smarter.",
    icon: Building2,
    points: ["HR and recruitment", "Sales and CRM", "Support knowledge base", "Custom enterprise use cases"],
  },
];

export default function OurUsersSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -bottom-14 -left-14 h-40 w-40 bg-[radial-gradient(circle,_rgba(108,63,238,0.35)_1px,_transparent_1.5px)] [background-size:12px_12px]" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 bg-[radial-gradient(circle,_rgba(108,63,238,0.3)_1px,_transparent_1.5px)] [background-size:12px_12px]" />

      <div className="container-main relative">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <div className="badge mb-4">
            <UsersRound size={14} strokeWidth={2.2} />
            Our Users
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
            Built for every industry. Trusted by experts.
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-7 text-text-light sm:text-base">
            KnowMatrix empowers professionals across industries to transform their data into intelligent knowledge and better decisions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {industries.map(({ title, label, description, icon: Icon, points }) => (
            <article
              key={title}
              className="group rounded-xl border border-border bg-white p-6 shadow-[0_8px_30px_-18px_rgba(17,24,39,0.22)] transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_18px_40px_-22px_rgba(108,63,238,0.35)]"
            >
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-lighter text-primary">
                  <Icon size={28} strokeWidth={1.9} />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-lg font-bold text-text-dark">{title}</h3>
                  <p className="text-xs font-bold text-primary">{label}</p>
                </div>
              </div>

              <p className="mb-5 text-sm leading-6 text-text-light">{description}</p>

              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-xs font-medium leading-5 text-text-medium">
                    <Sparkles size={13} className="mt-1 shrink-0 text-primary" fill="currentColor" strokeWidth={0} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl text-center">
          <div className="mb-2 flex items-center justify-center gap-2 text-sm font-bold text-text-dark">
            <Sparkles size={18} className="text-primary" fill="currentColor" strokeWidth={0} />
            <span>Your industry. Your data. Our AI.</span>
          </div>
          <p className="mb-5 text-sm leading-6 text-text-light">Let KnowMatrix turn your data into your biggest advantage.</p>
          <Link href="#" className="btn btn-primary">
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
