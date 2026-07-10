export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter/40 via-white to-white pointer-events-none" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-main relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-20 lg:py-28">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            {/* Badge */}
            <div className="badge mb-8">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              AI-Powered Enterprise Knowledge Platform
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-text-dark mb-6">
              Turn Your Enterprise Data{" "}
              <br className="hidden sm:block" />
              Into <span className="text-primary">Intelligent</span> Answers
            </h1>

            {/* Subtext */}
            <p className="text-lg text-text-light leading-relaxed max-w-lg mb-10">
              Secure, scalable, and production-grade RAG-as-a-Service platform to
              build AI knowledge assistants over your private data.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] animate-pulse-glow"
              >
                Start Building Free
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-text-dark bg-white border border-border rounded-lg hover:border-primary/30 hover:bg-primary-lighter transition-all"
              >
                Book a Demo
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-text-light">
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Setup in minutes
              </span>
              <span className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M13.333 4L6 11.333 2.667 8" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Cancel anytime
              </span>
            </div>
          </div>

          {/* Right - Hero Illustration: Phone/Device Mockup */}
          <div className="relative hidden lg:flex items-center justify-center min-h-[520px]">
            {/* Decorative gradient orb behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-3xl pointer-events-none" />
            
            {/* Phone Device Frame */}
            <div className="relative z-10 w-[300px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Phone outer shell */}
              <div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(108,63,238,0.2),0_8px_20px_-5px_rgba(0,0,0,0.08)] border border-gray-200/60 overflow-hidden">
                {/* Phone status bar */}
                <div className="bg-gradient-to-r from-[#5B3FE6] to-[#8B5CF6] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                  </div>
                  <div className="w-16 h-1.5 rounded-full bg-white/30" />
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-2 rounded-sm bg-white/40" />
                    <div className="w-2 h-2 rounded-full bg-white/40" />
                  </div>
                </div>

                {/* App header */}
                <div className="bg-gradient-to-r from-[#5B3FE6] to-[#7C5CE6] px-5 pb-4 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold">Enterprise Assistant</div>
                      <div className="text-white/60 text-[10px]">Online</div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    </div>
                  </div>
                </div>

                {/* Chat content */}
                <div className="bg-gray-50 px-4 py-5 space-y-4 min-h-[280px]">
                  {/* User question */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
                      What is our remote work policy?
                    </div>
                  </div>

                  {/* AI answer */}
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-md px-4 py-3 max-w-[90%] shadow-sm">
                      <p className="text-xs text-text-medium leading-relaxed">
                        According to the employee handbook, remote work is allowed up to 3 days per week with manager approval.
                      </p>
                      <div className="mt-2 flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                        </svg>
                        <span className="text-[10px] text-primary font-medium">Source: Employee_Handbook.pdf</span>
                      </div>
                    </div>
                  </div>

                  {/* Another user message */}
                  <div className="flex justify-end">
                    <div className="bg-primary text-white rounded-2xl rounded-br-md px-4 py-2.5 max-w-[85%] text-xs leading-relaxed shadow-sm">
                      How many vacation days do we get?
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2.5 mt-2 shadow-sm">
                    <span className="text-xs text-text-lighter flex-1">Ask anything...</span>
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22,2 15,22 11,13 2,9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute top-6 right-4 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 px-4 py-3 flex items-center gap-2.5 animate-float z-20">
              <div className="w-8 h-8 rounded-lg bg-primary-lighter flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-text-dark">Documents</span>
            </div>

            <div className="absolute top-[35%] -right-2 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 px-4 py-3 flex items-center gap-2.5 animate-float-delayed z-20">
              <div className="w-8 h-8 rounded-lg bg-primary-lighter flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-text-dark">Databases</span>
            </div>

            <div className="absolute bottom-[25%] -right-3 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 px-4 py-3 flex items-center gap-2.5 animate-float-delayed-2 z-20">
              <div className="w-8 h-8 rounded-lg bg-primary-lighter flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-text-dark">Web</span>
            </div>

            <div className="absolute bottom-8 right-16 bg-white rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-gray-100 px-4 py-3 flex items-center gap-2.5 animate-float z-20">
              <div className="w-8 h-8 rounded-lg bg-primary-lighter flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6C3FEE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16,18 22,12 16,6" />
                  <polyline points="8,6 2,12 8,18" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-text-dark">APIs</span>
            </div>

            {/* Decorative dots/lines */}
            <div className="absolute top-[20%] left-8 w-12 h-12 border-2 border-dashed border-primary/10 rounded-full" />
            <div className="absolute bottom-[15%] left-16 w-8 h-8 border-2 border-primary/8 rounded-full" />
            <div className="absolute top-[45%] left-0">
              <svg width="60" height="2" className="text-primary/15"><line x1="0" y1="1" x2="60" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
