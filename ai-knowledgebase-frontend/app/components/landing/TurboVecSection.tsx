import React from 'react';
import Image from 'next/image';
import { Sparkles, Zap, Gauge, Target, Layers, ShieldCheck, Database } from 'lucide-react';

const TurboVecSection = () => {
  const features = [
    {
      icon: <Gauge className="w-7 h-7 text-[#6C3AED]" strokeWidth={2} />,
      title: "Blazing Fast",
      description: "TurboVec is optimized for speed with SIMD accelerations and cache-friendly indexes.",
    },
    {
      icon: <Target className="w-7 h-7 text-[#6C3AED]" strokeWidth={2} />,
      title: "High Accuracy",
      description: "Advanced ANN algorithms ensure high recall and relevant results every time.",
    },
    {
      icon: <Layers className="w-7 h-7 text-[#6C3AED]" strokeWidth={2} />,
      title: "Scalable Indexing",
      description: "Handle millions (and billions) of vectors with minimal latency and maximum throughput.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-[#6C3AED]" strokeWidth={2} />,
      title: "Rust Powered",
      description: "Built in Rust for memory safety, concurrency, and unmatched performance.",
    },
    {
      icon: <Database className="w-7 h-7 text-[#6C3AED]" strokeWidth={2} />,
      title: "Enterprise Ready",
      description: "Designed for production with reliability, durability, and horizontal scalability in mind.",
    }
  ];

  return (
    <section id="turbovec" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container-main">

        {/* ───── Top Split: Text Left / Image Right ───── */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center mb-20">

          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#F3EFFE] text-[#6C3AED] text-[11px] font-bold tracking-widest uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHAT&apos;S NEW</span>
            </div>

            {/* Heading */}
            <h2 className="text-[2.75rem] lg:text-[3.25rem] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-5">
              We are using{' '}
              <br />
              <span className="text-[#6C3AED]">TurboVec</span>
            </h2>

            {/* Sub-heading */}
            <p className="text-lg lg:text-xl text-[#64748B] font-medium leading-snug mb-5">
              Next-generation vector search{' '}
              <br className="hidden sm:block" />
              for Enterprise AI Knowledge Base
            </p>

            {/* Body text */}
            <p className="text-[15px] lg:text-base text-[#64748B] leading-relaxed mb-10">
              We&apos;ve integrated{' '}
              <span className="font-semibold text-[#6C3AED]">TurboVec</span> — a
              high-performance vector indexing and search engine written in
              Rust — to deliver blazing-fast, accurate, and scalable semantic
              search across your data.
            </p>

            {/* Tag-line pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F3EFFE] text-[#1E1B4B] text-sm font-semibold select-none">
              <Zap className="w-4 h-4 text-[#6C3AED]" fill="#6C3AED" />
              Built for Speed. Designed for Scale.
            </div>
          </div>

          {/* Right – Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <Image
              src="/illustrations/landing-page/turbo-vec.png"
              alt="TurboVec — High Performance Vector Search"
              width={560}
              height={480}
              className="w-full max-w-[540px] h-auto object-contain select-none pointer-events-none"
              priority
            />
          </div>
        </div>

        {/* ───── Bottom Feature Cards ───── */}
        <div className="rounded-[28px] bg-[#F8F9FB] border border-[#E2E8F0] p-5 lg:p-7 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E2E8F0] px-5 py-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-[#F3EFFE] flex items-center justify-center mb-5">
                  {feature.icon}
                </div>

                <h3 className="text-[15px] font-bold text-[#0F172A] mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ───── Footer tagline ───── */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <Sparkles className="w-4 h-4 text-amber-400" fill="currentColor" />
          <p className="text-[15px] text-[#334155] font-medium">
            Smarter search. Faster results.{' '}
            <span className="text-[#6C3AED] font-bold italic">
              Built for the future.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TurboVecSection;
