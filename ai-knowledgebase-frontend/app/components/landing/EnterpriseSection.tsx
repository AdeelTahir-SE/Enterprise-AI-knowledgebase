import Link from "next/link";
import { Activity, ArrowRight, Cloud, FileCheck2, LockKeyhole, ShieldCheck, UsersRound, Zap } from "lucide-react";

const enterpriseFeatures = [
  { title: "Enterprise Security", description: "SSO, RBAC, audit logs, encryption at rest and in transit.", icon: LockKeyhole },
  { title: "Multi-Tenant Architecture", description: "Isolated workspaces, quotas and role-based access for teams.", icon: UsersRound },
  { title: "Advanced RAG", description: "Hybrid search, reranking, metadata filters and source citations.", icon: Activity },
  { title: "High Performance", description: "Event-driven async pipelines for fast and reliable processing.", icon: Zap },
  { title: "Flexible Deployment", description: "Deploy on cloud, on-premise or in your private VPC.", icon: Cloud },
  { title: "Compliance Ready", description: "SOC 2, GDPR ready with data residency options.", icon: FileCheck2 },
];

export default function EnterpriseSection() {
  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_220px_1.1fr]">
          <div>
            <div className="badge mb-5">Built for Enterprise</div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark">A platform with everything your enterprise needs</h2>
            <p className="mb-6 text-sm leading-7 text-text-light">From security to scalability, we provide the infrastructure and tools to power your AI initiatives with confidence.</p>
            <Link href="#" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
              View All Features
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="relative h-[200px] w-[200px]">
              <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-primary/10" />
              <div className="absolute inset-5 rounded-full border border-primary/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-[100px] w-[100px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#5B3FE6] via-primary to-[#8B5CF6] text-white shadow-2xl shadow-primary/25">
                  <ShieldCheck size={48} strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {enterpriseFeatures.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex items-start gap-3 rounded-xl bg-white/70 p-4 ring-1 ring-border/70">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-primary">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="mb-1.5 text-sm font-bold text-text-dark">{title}</h3>
                  <p className="text-xs leading-5 text-text-light">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


