import Link from "next/link";
import { ArrowRight, FileUp, ListTree, Search, Sparkles } from "lucide-react";

const steps = [
  { number: 1, title: "Ingest", description: "Upload or connect your data from various sources.", icon: FileUp },
  { number: 2, title: "Index", description: "We chunk, embed and index your data securely.", icon: ListTree },
  { number: 3, title: "Retrieve", description: "Our AI retrieves the most relevant information.", icon: Search },
  { number: 4, title: "Generate", description: "Get accurate, cited answers in natural language.", icon: Sparkles },
];

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          <div>
            <div className="badge mb-5">Simple and Powerful</div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark">How it works</h2>
            <p className="mb-7 text-sm leading-7 text-text-light">Transform your data into intelligent conversations in four simple steps.</p>
            <Link href="#" className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]">
              Explore Documentation
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ number, title, description, icon: Icon }, index) => (
              <div key={title} className="relative rounded-xl border border-border bg-white p-5 text-left shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                {index < steps.length - 1 && <ArrowRight size={20} className="absolute -right-3 top-9 hidden text-border xl:block" />}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-lighter text-primary">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">{number}</span>
                  <h3 className="text-base font-bold text-text-dark">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-text-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


