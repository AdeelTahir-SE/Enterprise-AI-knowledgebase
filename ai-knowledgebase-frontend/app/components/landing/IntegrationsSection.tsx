import Link from "next/link";
import { ArrowRight, Blocks, Box, Braces, CloudCog, Container, DatabaseZap, Ellipsis, FileStack, GitBranch, MessageSquare, PanelsTopLeft, Workflow } from "lucide-react";

const integrations = [
  { name: "Slack", icon: MessageSquare },
  { name: "Microsoft 365", icon: FileStack },
  { name: "Google Drive", icon: CloudCog },
  { name: "Confluence", icon: PanelsTopLeft },
  { name: "Salesforce", icon: Blocks },
  { name: "More", icon: Ellipsis },
];

const techStack = [
  { name: "FastAPI", icon: Braces },
  { name: "LangChain", icon: Workflow },
  { name: "MongoDB", icon: DatabaseZap },
  { name: "Apache Kafka", icon: GitBranch },
  { name: "Docker/k8s", icon: Container },
  { name: "More", icon: Box },
];

function ToolGrid({ tools }: { tools: typeof integrations }) {
  return (
    <div className="mb-8 grid grid-cols-3 gap-4 sm:grid-cols-6">
      {tools.map(({ name, icon: Icon }) => (
        <div key={name} className="group flex flex-col items-center gap-2.5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-white text-text-light group-hover:border-primary/30 group-hover:text-primary group-hover:shadow-md">
            <Icon size={24} strokeWidth={1.8} />
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


