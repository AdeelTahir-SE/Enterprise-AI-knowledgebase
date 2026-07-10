const integrations = [
  {
    name: "Slack",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2a2.5 2.5 0 0 0 0 5H17V4.5A2.5 2.5 0 0 0 14.5 2z" fill="#E01E5A" />
        <path d="M2 14.5a2.5 2.5 0 0 0 5 0V12H4.5A2.5 2.5 0 0 0 2 14.5z" fill="#36C5F0" />
        <path d="M9.5 22a2.5 2.5 0 0 0 0-5H7v2.5A2.5 2.5 0 0 0 9.5 22z" fill="#2EB67D" />
        <path d="M22 9.5a2.5 2.5 0 0 0-5 0V12h2.5A2.5 2.5 0 0 0 22 9.5z" fill="#ECB22E" />
        <path d="M9.5 7H12V4.5a2.5 2.5 0 0 0-5 0A2.5 2.5 0 0 0 9.5 7z" fill="#36C5F0" />
        <path d="M17 14.5V12h-2.5a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5z" fill="#ECB22E" />
        <path d="M7 9.5V12h2.5a2.5 2.5 0 0 0 0-5A2.5 2.5 0 0 0 7 9.5z" fill="#E01E5A" />
        <path d="M14.5 17H12v2.5a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0-2.5-2.5z" fill="#2EB67D" />
      </svg>
    ),
  },
  {
    name: "Microsoft 365",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" fill="#F25022" />
        <rect x="13" y="2" width="9" height="9" rx="1" fill="#7FBA00" />
        <rect x="2" y="13" width="9" height="9" rx="1" fill="#00A4EF" />
        <rect x="13" y="13" width="9" height="9" rx="1" fill="#FFB900" />
      </svg>
    ),
  },
  {
    name: "Google Drive",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 2h7l7 12H15.5L8.5 2z" fill="#FBBC04" />
        <path d="M1 20l3.5-6h15l-3.5 6H1z" fill="#4285F4" />
        <path d="M8.5 2L1 14l3.5 6L12 8l-3.5-6z" fill="#34A853" />
      </svg>
    ),
  },
  {
    name: "Confluence",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 18.5c.5-.8 1-1.6 1.6-2.3.4-.5 1-.6 1.5-.3 1.3.8 2.8 1.3 4.4 1.3 1.6 0 3.1-.5 4.4-1.3.5-.3 1.1-.2 1.5.3.6.7 1.1 1.5 1.6 2.3.3.5.2 1.1-.3 1.4C15.8 21.2 13.5 22 11 22s-4.8-.8-6.7-2.1c-.5-.3-.6-.9-.3-1.4z" fill="#1868DB" />
        <path d="M21 5.5c-.5.8-1 1.6-1.6 2.3-.4.5-1 .6-1.5.3-1.3-.8-2.8-1.3-4.4-1.3-1.6 0-3.1.5-4.4 1.3-.5.3-1.1.2-1.5-.3C7.1 7.1 6.6 6.3 6 5.5c-.3-.5-.2-1.1.3-1.4C8.2 2.8 10.5 2 13 2s4.8.8 6.7 2.1c.5.3.6.9.3 1.4z" fill="#1868DB" />
      </svg>
    ),
  },
  {
    name: "Salesforce",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M10 4.5a4.5 4.5 0 0 1 8.5 2c0 .2 0 .4-.1.6a3.5 3.5 0 0 1 1.1 6.4 4 4 0 0 1-7.5 2 3.5 3.5 0 0 1-5.5-1.5 4 4 0 0 1 .6-7.5A4.5 4.5 0 0 1 10 4.5z" fill="#00A1E0" />
      </svg>
    ),
  },
  {
    name: "More",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
        <circle cx="6" cy="12" r="1.5" fill="#6B7280" />
        <circle cx="12" cy="12" r="1.5" fill="#6B7280" />
        <circle cx="18" cy="12" r="1.5" fill="#6B7280" />
      </svg>
    ),
  },
];

const techStack = [
  {
    name: "FastAPI",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#009688" />
        <path d="M12 6v8l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "LangChain",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#1C3C3C" />
        <path d="M8 8h8v8H8z" stroke="white" strokeWidth="1.5" />
        <path d="M12 8v8M8 12h8" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C9 6 8 9 8 12c0 4 2.5 8 4 10 1.5-2 4-6 4-10 0-3-1-6-4-10z" fill="#00ED64" />
        <path d="M12 2c-.5 1-1 2-1 3v17s.5.5 1 .5.5-.5.5-.5V5c0-1-.3-2-.5-3z" fill="#004D2A" />
      </svg>
    ),
  },
  {
    name: "Apache Kafka",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#231F20" />
        <circle cx="12" cy="8" r="2" stroke="white" strokeWidth="1.2" />
        <circle cx="8" cy="14" r="2" stroke="white" strokeWidth="1.2" />
        <circle cx="16" cy="14" r="2" stroke="white" strokeWidth="1.2" />
        <line x1="12" y1="10" x2="9" y2="13" stroke="white" strokeWidth="1" />
        <line x1="12" y1="10" x2="15" y2="13" stroke="white" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: "Docker/k8s",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="#2496ED" />
        <rect x="6" y="10" width="3" height="3" fill="white" rx="0.5" />
        <rect x="10" y="10" width="3" height="3" fill="white" rx="0.5" />
        <rect x="14" y="10" width="3" height="3" fill="white" rx="0.5" />
        <rect x="10" y="6" width="3" height="3" fill="white" rx="0.5" />
      </svg>
    ),
  },
  {
    name: "More",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round">
        <circle cx="6" cy="12" r="1.5" fill="#6B7280" />
        <circle cx="12" cy="12" r="1.5" fill="#6B7280" />
        <circle cx="18" cy="12" r="1.5" fill="#6B7280" />
      </svg>
    ),
  },
];

export default function IntegrationsSection() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Integrations Panel */}
          <div className="bg-section-bg rounded-2xl border border-border p-10">
            <div className="badge mb-5 text-[10px]">Connect with Your Favorite Tools</div>
            <h3 className="text-2xl font-bold text-text-dark mb-3 tracking-tight">
              Seamless integrations
            </h3>
            <p className="text-sm text-text-light mb-8">
              Connect with the tools you already use.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 mb-8">
              {integrations.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2.5 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-md transition-all">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] text-text-light font-medium text-center leading-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
            >
              View all integrations
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3.333 8h9.334M8.667 4L12.667 8l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Tech Stack Panel */}
          <div className="bg-section-bg rounded-2xl border border-border p-10">
            <div className="badge mb-5 text-[10px]">Built with Modern Technology</div>
            <h3 className="text-2xl font-bold text-text-dark mb-3 tracking-tight">
              Enterprise-grade tech stack
            </h3>
            <p className="text-sm text-text-light mb-8">
              Built using modern technologies for performance and scale.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-5 mb-8">
              {techStack.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2.5 group cursor-default"
                >
                  <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center group-hover:border-primary/30 group-hover:shadow-md transition-all">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] text-text-light font-medium text-center leading-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
            >
              View architecture
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M3.333 8h9.334M8.667 4L12.667 8l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
