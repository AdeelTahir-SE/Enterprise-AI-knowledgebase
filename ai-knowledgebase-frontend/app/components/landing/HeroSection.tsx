import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-lighter/45 via-white to-white" />

      <div className="container-main relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-24">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="mx-auto mb-6 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-text-dark sm:text-5xl lg:mx-0 lg:text-[3.45rem]">
              Turn Your Enterprise Data <br className="hidden sm:block" />
              Into <span className="text-primary">Intelligent</span> Answers
            </h1>
            <div className="badge mb-7">AI-Powered Enterprise Knowledge Platform</div>

            <p className="mx-auto mb-9 max-w-xl text-base leading-8 text-text-light sm:text-lg lg:mx-0">
              Secure, scalable, and production-grade RAG-as-a-Service platform to build AI knowledge assistants over your private data.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="#" className="btn btn-primary">
                Start Building Free
              </Link>
              <Link href="#" className="btn btn-secondary">
                Book a Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-text-light lg:justify-start">
              {["No credit card required", "Setup in minutes", "Cancel anytime"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={18} className="text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full max-w-[430px] sm:max-w-[520px] lg:max-w-[580px]">
              <Image
                src="/illustrations/landing-page/hero-section.png"
                alt="KnowMatrix enterprise AI knowledge assistant dashboard"
                fill
                priority
                sizes="(min-width: 1024px) 580px, (min-width: 640px) 520px, 92vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
