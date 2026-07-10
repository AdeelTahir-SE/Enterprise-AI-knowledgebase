import { ChartNoAxesCombined, CheckCircle2, Code2, MessageSquareCode, Network, ShieldCheck } from "lucide-react";

const features = [
  { title: "Secure & Private", description: "Your data stays private with enterprise-grade security and access control.", icon: ShieldCheck },
  { title: "Accurate Answers", description: "RAG with citations ensures fact-based, trustworthy responses every time.", icon: CheckCircle2 },
  { title: "Scalable & Reliable", description: "Built for scale with multi-tenant architecture and high availability.", icon: Network },
  { title: "Easy to Integrate", description: "Use our APIs, SDKs and webhooks to integrate seamlessly.", icon: MessageSquareCode },
  { title: "Developer Friendly", description: "Powerful APIs, extensive docs and SDKs to build faster and ship sooner.", icon: Code2 },
  { title: "Observability", description: "Monitor usage, quality and performance with advanced analytics.", icon: ChartNoAxesCombined },
];

export default function FeaturesGrid() {
  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">Everything you need to build AI knowledge assistants</h2>
          <p className="text-base leading-7 text-text-light">End-to-end platform to ingest, understand, and deliver answers from your data.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <div key={title} className="group rounded-xl border border-border bg-white p-6 hover:border-primary/20 hover:shadow-[0_8px_30px_-8px_rgba(108,63,238,0.12)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-lighter text-primary group-hover:bg-primary/10">
                <Icon size={24} strokeWidth={1.9} />
              </div>
              <h3 className="mb-2 text-base font-bold text-text-dark">{title}</h3>
              <p className="text-sm leading-6 text-text-light">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

