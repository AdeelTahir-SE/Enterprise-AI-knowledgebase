const features = [
  {
    title: "Secure & Private",
    description:
      "Your data stays private with enterprise-grade security and access control.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Accurate Answers",
    description:
      "RAG with citations ensures fact-based, trustworthy responses every time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Scalable & Reliable",
    description:
      "Built for scale with multi-tenant architecture and high availability.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
        <line x1="12" y1="13" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    title: "Easy to Integrate",
    description:
      "Use our APIs, SDKs and webhooks to integrate seamlessly.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M12 12h.01" />
        <path d="M17 12h.01" />
        <path d="M7 12h.01" />
      </svg>
    ),
  },
  {
    title: "Developer Friendly",
    description:
      "Powerful APIs, extensive docs and SDKs to build faster and ship sooner.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: "Observability",
    description:
      "Monitor usage, quality and performance with advanced analytics.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
];

export default function FeaturesGrid() {
  return (
    <section className="section-alt">
      <div className="container-main">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4 tracking-tight">
            Everything you need to build AI knowledge assistants
          </h2>
          <p className="text-text-light text-base leading-relaxed">
            End-to-end platform to ingest, understand, and deliver answers from your data.
          </p>
        </div>

        {/* 6-column row of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl border border-border p-6 text-center hover:border-primary/20 hover:shadow-[0_8px_30px_-8px_rgba(108,63,238,0.1)] transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-sm font-bold text-text-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-text-light leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
