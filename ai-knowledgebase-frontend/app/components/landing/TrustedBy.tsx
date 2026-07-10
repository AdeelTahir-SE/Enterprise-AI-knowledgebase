const companies = [
  {
    name: "Acme Corp",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "Globex",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    name: "Initech",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Umbrella",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 12a11.05 11.05 0 0 0-22 0" />
        <path d="M12 12v9a2 2 0 0 0 4 0" />
        <line x1="12" y1="1" x2="12" y2="3" />
      </svg>
    ),
  },
  {
    name: "Stark Industries",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
  },
  {
    name: "Pinnacle",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
      </svg>
    ),
  },
];

export default function TrustedBy() {
  return (
    <section className="py-16 border-t border-b border-border bg-white">
      <div className="container-main">
        <p className="text-center text-xs font-semibold tracking-[0.15em] uppercase text-text-lighter mb-10">
          Trusted by Innovative Organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-2.5 text-text-lighter hover:text-text-light transition-colors group cursor-default"
            >
              <span className="group-hover:scale-110 transition-transform">
                {company.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
