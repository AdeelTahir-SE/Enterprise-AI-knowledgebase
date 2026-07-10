"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "\"KnowMatrix has transformed how we access information. Our teams get accurate answers in seconds.\"",
    name: "Sarah Johnson",
    title: "Head of Operations, Acme Corp",
    rating: 5,
    avatar: "SJ",
    color: "bg-purple-500",
  },
  {
    quote:
      "\"The RAG accuracy and source citations are game-changers for our compliance and support teams.\"",
    name: "Michael Chen",
    title: "CTO, Initech",
    rating: 5,
    avatar: "MC",
    color: "bg-blue-500",
  },
  {
    quote:
      "\"Easy integration, powerful APIs, and amazing support. Highly recommended for any enterprise.\"",
    name: "Priya Sharma",
    title: "Engineering Manager, Globex",
    rating: 5,
    avatar: "PS",
    color: "bg-emerald-500",
  },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "2M+", label: "Documents Processed" },
  { value: "99.9%", label: "Uptime SLA" },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "#F59E0B" : "#E5E7EB"}
      stroke={filled ? "#F59E0B" : "#E5E7EB"}
      strokeWidth="1"
    >
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16 items-start">
          {/* Left Side */}
          <div>
            <div className="badge mb-5">Trusted by Teams</div>
            <h2 className="text-3xl font-bold text-text-dark mb-4 tracking-tight">
              Loved by teams around the world
            </h2>
            <p className="text-sm text-text-light leading-relaxed mb-10">
              Organizations of all sizes use our platform to deliver knowledge-powered experiences.
            </p>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-text-light mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonials */}
          <div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`bg-white rounded-xl border p-7 transition-all duration-300 cursor-default ${
                    index === activeIndex
                      ? "border-primary/30 shadow-[0_8px_30px_-8px_rgba(108,63,238,0.12)]"
                      : "border-border hover:border-primary/15"
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < testimonial.rating} />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-text-medium leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-text-dark">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-text-light">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-7 h-2.5 bg-primary"
                      : "w-2.5 h-2.5 bg-border hover:bg-text-lighter"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
