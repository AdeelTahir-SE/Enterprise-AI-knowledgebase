const steps = [
  {
    number: 1,
    title: "Ingest",
    description: "Upload or connect your data from various sources.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17,8 12,3 7,8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Index",
    description: "We chunk, embed and index your data securely.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Retrieve",
    description: "Our AI retrieves the most relevant information.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Generate",
    description: "Get accurate, cited answers in natural language.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <div className="hidden lg:flex items-center justify-center px-2">
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path d="M0 12h32M28 6l6 6-6 6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 items-start">
          {/* Left Text */}
          <div>
            <div className="badge mb-5">Simple and Powerful</div>
            <h2 className="text-3xl font-bold text-text-dark mb-4 tracking-tight">
              How it works
            </h2>
            <p className="text-text-light text-sm leading-relaxed mb-7">
              Transform your data into intelligent conversations in four simple steps.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              Explore Documentation
            </a>
          </div>

          {/* Steps Flow */}
          <div className="flex items-start justify-between gap-0 pt-4">
            {steps.map((step, index) => (
              <div key={step.title} className="contents">
                <div className="flex flex-col items-center text-center flex-1 max-w-[160px]">
                  <div className="relative w-[72px] h-[72px] rounded-2xl bg-primary-lighter flex items-center justify-center mb-4">
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-primary/20">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-text-dark mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && <ArrowIcon />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
