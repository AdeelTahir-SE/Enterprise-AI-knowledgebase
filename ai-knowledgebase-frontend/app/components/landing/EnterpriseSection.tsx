const enterpriseFeatures = [
  {
    title: "Enterprise Security",
    description: "SSO, RBAC, audit logs, encryption at rest and in transit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "Multi-Tenant Architecture",
    description: "Isolated workspaces, quotas and role-based access for teams.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Advanced RAG",
    description: "Hybrid search, reranking, metadata filters and source citations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
  },
  {
    title: "High Performance",
    description: "Event-driven async pipelines for fast and reliable processing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
  },
  {
    title: "Flexible Deployment",
    description: "Deploy on cloud, on-premise or in your private VPC.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    title: "Compliance Ready",
    description: "SOC 2, GDPR ready with data residency options.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function EnterpriseSection() {
  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="grid lg:grid-cols-[1fr_240px_1fr] gap-12 items-center">
          {/* Left Text */}
          <div>
            <div className="badge mb-5">Built for Enterprise</div>
            <h2 className="text-3xl font-bold text-text-dark mb-4 tracking-tight">
              A platform with everything your enterprise needs
            </h2>
            <p className="text-text-light text-sm leading-relaxed mb-6">
              From security to scalability, we provide the infrastructure and tools to power your AI initiatives with confidence.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
            >
              View All Features
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3.333 8h9.334M8.667 4L12.667 8l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Center Illustration - Shield */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[200px] h-[200px]">
              {/* Outer orbital ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/10 animate-spin-slow" />
              {/* Middle orbital ring */}
              <div className="absolute inset-4 rounded-full border border-primary/15" />
              {/* Inner orbital ring */}
              <div className="absolute inset-8 rounded-full border border-primary/10" />
              
              {/* Shield center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-[#5B3FE6] via-primary to-[#8B5CF6] flex items-center justify-center shadow-2xl shadow-primary/25">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
              </div>

              {/* Orbiting dots */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-white" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-white" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-white" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-3.5 h-3.5 rounded-full bg-primary/20 border-2 border-white" />
              
              {/* Diagonal dots */}
              <div className="absolute top-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-primary/15" />
              <div className="absolute bottom-[14%] left-[14%] w-2.5 h-2.5 rounded-full bg-primary/15" />
              <div className="absolute top-[14%] left-[14%] w-2.5 h-2.5 rounded-full bg-primary/15" />
              <div className="absolute bottom-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-primary/15" />
            </div>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            {enterpriseFeatures.map((feature) => (
              <div key={feature.title} className="group">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary-lighter flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text-dark mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-text-light leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
