export default function CTABanner() {
  return (
    <section className="py-20">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#5B3FE6] via-primary to-[#8B5CF6] px-10 py-16 sm:px-16">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />
          <div className="absolute top-8 right-1/4 w-2 h-2 bg-white/30 rounded-full" />
          <div className="absolute bottom-10 left-1/4 w-1.5 h-1.5 bg-white/20 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white/25 rounded-full" />

          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-10">
            {/* Text */}
            <div className="flex items-start gap-5">
              <div className="hidden sm:flex w-14 h-14 shrink-0 rounded-xl bg-white/15 backdrop-blur-sm items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Ready to unlock the power of your data?
                </h2>
                <p className="text-white/70 text-sm sm:text-base">
                  Join thousands of organizations building AI-powered experiences with KnowMatrix.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 shrink-0">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-primary bg-white rounded-lg hover:bg-white/90 transition-all hover:shadow-lg active:scale-[0.98]"
              >
                Start Building Free
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/30 rounded-lg hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
