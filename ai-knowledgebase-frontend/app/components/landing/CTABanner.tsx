import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-main">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-[#5B3FE6] via-primary to-[#8B5CF6] px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex items-start gap-5">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm sm:flex">
                <Sparkles size={28} />
              </div>
              <div>
                <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl">Ready to unlock the power of your data?</h2>
                <p className="max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Join thousands of organizations building AI-powered experiences with KnowMatrix.</p>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
              <Link href="#" className="btn btn-light">Start Building Free</Link>
              <Link href="#" className="btn btn-ghost-light">Book a Demo</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



