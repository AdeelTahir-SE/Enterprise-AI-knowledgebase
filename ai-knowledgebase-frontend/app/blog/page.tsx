import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, Clock3, Search, Sparkles, Tag } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const categories = ["All", "RAG", "Security", "Product", "Engineering", "Customer Stories"];

const posts = [
  {
    title: "How to design reliable RAG workflows for enterprise teams",
    excerpt: "A practical framework for ingestion, chunking, retrieval evaluation, and answer quality that scales beyond a prototype.",
    category: "RAG",
    date: "May 18, 2024",
    readTime: "8 min read",
    tone: "bg-primary-lighter text-primary",
  },
  {
    title: "What secure AI knowledge systems need before production",
    excerpt: "Access controls, audit trails, data boundaries, and operational checks every AI platform should have from day one.",
    category: "Security",
    date: "May 14, 2024",
    readTime: "6 min read",
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Turning internal docs into support-ready AI assistants",
    excerpt: "How support, IT, and HR teams can transform existing documents into answer systems with measurable outcomes.",
    category: "Product",
    date: "May 09, 2024",
    readTime: "5 min read",
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Evaluating answer quality without slowing your team down",
    excerpt: "A lightweight loop for measuring citations, latency, fallback behavior, and user satisfaction in production.",
    category: "Engineering",
    date: "Apr 30, 2024",
    readTime: "7 min read",
    tone: "bg-amber-50 text-amber-600",
  },
  {
    title: "How Acme reduced knowledge lookup time by 42%",
    excerpt: "A customer story on launching AI assistants across support and operations while preserving governance.",
    category: "Customer Stories",
    date: "Apr 22, 2024",
    readTime: "4 min read",
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "Chunking strategies that improve retrieval accuracy",
    excerpt: "A closer look at semantic boundaries, metadata, and re-indexing choices for high-signal enterprise documents.",
    category: "RAG",
    date: "Apr 15, 2024",
    readTime: "9 min read",
    tone: "bg-primary-lighter text-primary",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="relative overflow-hidden border-b border-border-light py-16 sm:py-20">
          <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(108,63,238,0.1),transparent_58%)]" />
          <div className="container-main">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="badge">KnowMatrix Blog</span>
                <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
                  Practical ideas for enterprise AI knowledge systems
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-8 text-text-light">
                  Product notes, implementation guides, and field-tested patterns for teams building trusted AI assistants over private company data.
                </p>
                <div className="mt-7 flex max-w-lg items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 shadow-[0_10px_30px_-22px_rgba(17,24,39,0.35)]">
                  <Search size={18} className="text-text-lighter" />
                  <input aria-label="Search blog" placeholder="Search articles..." className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-text-lighter" />
                </div>
              </div>

              <article className="relative overflow-hidden rounded-lg border border-border bg-white shadow-[0_18px_55px_-32px_rgba(17,24,39,0.35)]">
                <div className="relative h-64 overflow-hidden bg-primary-lighter sm:h-72">
                  <Image src="/illustrations/landing-page/hero-section.png" alt="KnowMatrix platform preview" fill priority className="object-cover object-left-top" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-primary/10" />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold text-text-light">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary-lighter px-3 py-1 text-primary"><Sparkles size={13} /> Featured</span>
                    <span className="inline-flex items-center gap-1"><CalendarDays size={13} /> May 21, 2024</span>
                    <span className="inline-flex items-center gap-1"><Clock3 size={13} /> 10 min read</span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-text-dark">The enterprise checklist for launching AI assistants</h2>
                  <p className="mt-3 text-sm leading-7 text-text-light">From data readiness to evaluation and access control, here is how teams move from pilot to production without losing trust.</p>
                  <Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark">
                    Read article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="container-main">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-text-dark">Latest articles</h2>
                <p className="mt-2 text-sm leading-6 text-text-light">Fresh thinking for building, scaling, and operating knowledge AI.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button key={category} className={`rounded-lg border px-3.5 py-2 text-xs font-bold ${category === "All" ? "border-primary bg-primary text-white" : "border-border bg-white text-text-medium hover:border-primary/30 hover:bg-primary-lighter hover:text-primary"}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {posts.map((post) => (
                <article key={post.title} className="group flex min-h-[300px] flex-col rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.04)] hover:border-primary/20 hover:shadow-[0_16px_45px_-30px_rgba(17,24,39,0.45)]">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${post.tone}`}>
                      <Tag size={13} />
                      {post.category}
                    </span>
                    <BookOpen size={18} className="text-text-lighter group-hover:text-primary" />
                  </div>
                  <h3 className="text-xl font-bold leading-tight text-text-dark">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-text-light">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-border-light pt-4 text-xs font-bold text-text-lighter">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-16 sm:pb-20">
          <div className="container-main">
            <div className="rounded-lg border border-border bg-section-bg px-6 py-10 text-center sm:px-10">
              <h2 className="text-2xl font-bold text-text-dark sm:text-3xl">Get the next field guide in your inbox</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text-light">Monthly notes on RAG quality, enterprise AI operations, and product updates from the KnowMatrix team.</p>
              <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
                <input aria-label="Email address" placeholder="work@email.com" className="min-h-12 flex-1 rounded-lg border border-border bg-white px-4 text-sm font-medium outline-none placeholder:text-text-lighter focus:border-primary" />
                <button className="inline-flex min-h-12 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark">Subscribe</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}