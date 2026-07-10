"use client";

import { useCallback, useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "KnowMatrix has transformed how we access information. Our teams get accurate answers in seconds.", name: "Sarah Johnson", title: "Head of Operations, Acme Corp", rating: 5, avatar: "SJ", color: "bg-purple-500" },
  { quote: "The RAG accuracy and source citations are game-changers for our compliance and support teams.", name: "Michael Chen", title: "CTO, Initech", rating: 5, avatar: "MC", color: "bg-blue-500" },
  { quote: "Easy integration, powerful APIs, and amazing support. Highly recommended for any enterprise.", name: "Priya Sharma", title: "Engineering Manager, Globex", rating: 5, avatar: "PS", color: "bg-emerald-500" },
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "2M+", label: "Documents Processed" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = useCallback(() => setActiveIndex((prev) => (prev + 1) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-[320px_1fr] lg:gap-14">
          <div>
            <div className="badge mb-5">Trusted by Teams</div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark">Loved by teams around the world</h2>
            <p className="mb-8 text-sm leading-7 text-text-light">Organizations of all sizes use our platform to deliver knowledge-powered experiences.</p>
            <div className="grid grid-cols-3 gap-4 sm:flex sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-text-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className={`rounded-xl border bg-white p-6 ${index === activeIndex ? "border-primary/30 shadow-[0_8px_30px_-8px_rgba(108,63,238,0.12)]" : "border-border hover:border-primary/15"}`}>
                  <div className="mb-4 flex gap-0.5 text-amber-500">
                    {Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={1.5} />)}
                  </div>
                  <p className="mb-6 text-sm leading-7 text-text-medium">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.color} text-xs font-bold text-white`}>{testimonial.avatar}</div>
                    <div>
                      <div className="text-sm font-semibold text-text-dark">{testimonial.name}</div>
                      <div className="text-xs text-text-light">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setActiveIndex(index)} className={`rounded-full ${index === activeIndex ? "h-2.5 w-7 bg-primary" : "h-2.5 w-2.5 bg-border hover:bg-text-lighter"}`} aria-label={`Go to testimonial ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

