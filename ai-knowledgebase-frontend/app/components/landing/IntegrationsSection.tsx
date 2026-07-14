import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const integrations = [
  { name: "Slack", logo: "slack.png" },
  { name: "Microsoft 365", logo: "/microsoft-365.jfif" },
  { name: "Google Drive", logo: "https://cdn.simpleicons.org/googledrive" },
  { name: "Confluence", logo: "https://cdn.simpleicons.org/confluence" },
  { name: "Salesforce", logo: "/salesforce.webp" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
];

const techStack = [
  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi" },
  { name: "LangChain", logo: "/langchain.webp" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb" },
  { name: "Apache Kafka", logo: "https://cdn.simpleicons.org/apachekafka" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", logo: "https://cdn.simpleicons.org/kubernetes" },
];

function ToolGrid({ tools }: { tools: typeof integrations }) {
  return (
    <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
      {tools.map(({ name, logo }) => (
        <div key={name} className="group flex flex-col items-center gap-2.5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-white p-3 group-hover:border-primary/30 group-hover:shadow-md">
            <Image src={logo} alt={`${name} logo`} width={28} height={28} className="h-7 w-7 object-contain" unoptimized />
          </div>
          <span className="text-center text-[11px] font-medium leading-tight text-text-light">{name}</span>
        </div>
      ))}
    </div>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-section-bg p-6 sm:p-8 lg:p-10">
            <div className="badge mb-5 text-[10px]">Connect with Your Favorite Tools</div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-text-dark">Seamless integrations</h3>
            <p className="mb-8 text-sm leading-6 text-text-light">Connect with the tools you already use.</p>
            <ToolGrid tools={integrations} />
            <Link href="#" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
              View all integrations
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="rounded-xl border border-border bg-section-bg p-6 sm:p-8 lg:p-10">
            <div className="badge mb-5 text-[10px]">Built with Modern Technology</div>
            <h3 className="mb-3 text-2xl font-bold tracking-tight text-text-dark">Enterprise-grade tech stack</h3>
            <p className="mb-8 text-sm leading-6 text-text-light">Built using modern technologies for performance and scale.</p>
            <ToolGrid tools={techStack} />
            <Link href="#" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
              View architecture
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

