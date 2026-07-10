import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Bot,
  CheckCircle2,
  Code2,
  Copy,
  Database,
  FileText,
  KeyRound,
  Layers,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Webhook,
} from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const docSections = [
  {
    title: "Get Started",
    links: ["Overview", "Quickstart", "Create a workspace", "Invite your team"],
  },
  {
    title: "Knowledge Base",
    links: ["Data sources", "Documents", "Chunking", "Embeddings", "Vector indexes"],
  },
  {
    title: "Assistants",
    links: ["Create an assistant", "Prompt instructions", "Conversations", "Citations", "Evaluation"],
  },
  {
    title: "Platform",
    links: ["Authentication", "API keys", "Webhooks", "Rate limits", "Audit logs"],
  },
];

const quickstarts = [
  { title: "Upload documents", description: "Add PDFs, policies, guides, and internal knowledge files.", icon: FileText },
  { title: "Connect data sources", description: "Sync Notion, Confluence, Google Drive, and private storage.", icon: Database },
  { title: "Create an assistant", description: "Configure instructions, permissions, retrieval, and tone.", icon: Bot },
  { title: "Ship to users", description: "Embed chat, call the API, or invite teams to the dashboard.", icon: Sparkles },
];

const apiCards = [
  { title: "REST API", description: "Create assistants, upload documents, query knowledge, and inspect usage.", icon: Code2 },
  { title: "Authentication", description: "Manage API keys, workspace tokens, and scoped permissions.", icon: KeyRound },
  { title: "Webhooks", description: "Receive ingestion, sync, assistant, and evaluation events.", icon: Webhook },
  { title: "Security", description: "Understand access controls, isolation, retention, and audit logging.", icon: ShieldCheck },
];

const endpoints = [
  ["POST", "/v1/documents", "Upload a document into a workspace"],
  ["POST", "/v1/assistants", "Create a new knowledge assistant"],
  ["POST", "/v1/query", "Ask a question with citations"],
  ["GET", "/v1/usage", "Fetch workspace usage metrics"],
];

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="border-b border-border-light bg-[linear-gradient(180deg,#F9FAFB_0%,#FFFFFF_100%)] py-14 sm:py-16">
          <div className="container-main">
            <div className="mx-auto max-w-3xl text-center">
              <span className="badge">Documentation</span>
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-text-dark sm:text-5xl">
                Build with KnowMatrix
              </h1>
              <p className="mt-5 text-base leading-8 text-text-light">
                Guides and API references for building secure AI assistants over enterprise knowledge.
              </p>
              <div className="mx-auto mt-7 flex max-w-2xl items-center gap-3 rounded-lg border border-border bg-white px-4 py-3 shadow-[0_10px_30px_-22px_rgba(17,24,39,0.35)]">
                <Search size={18} className="text-text-lighter" />
                <input aria-label="Search documentation" placeholder="Search docs, APIs, guides..." className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-text-lighter" />
                <span className="hidden rounded border border-border px-2 py-1 text-xs font-bold text-text-lighter sm:inline">Ctrl K</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12">
          <div className="container-main">
            <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
              <aside className="h-fit rounded-lg border border-border bg-white p-4 shadow-[0_1px_3px_rgba(17,24,39,0.04)] lg:sticky lg:top-24">
                <div className="mb-4 flex items-center gap-2 rounded-lg bg-primary-lighter px-3 py-2 text-sm font-bold text-primary">
                  <BookOpen size={16} />
                  Docs Index
                </div>
                <nav className="space-y-5">
                  {docSections.map((section) => (
                    <div key={section.title}>
                      <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-wide text-text-lighter">{section.title}</p>
                      <div className="space-y-1">
                        {section.links.map((label) => (
                          <Link key={label} href="#" className="block rounded-lg px-3 py-2 text-sm font-semibold text-text-light hover:bg-primary-lighter hover:text-primary">
                            {label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </nav>
              </aside>

              <div className="space-y-8">
                <section className="rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.04)] sm:p-8">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight text-text-dark">Quickstart</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-text-light">
                        Launch your first assistant by connecting knowledge, tuning retrieval, and testing answers with citations.
                      </p>
                    </div>
                    <Link href="#" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-bold text-white hover:bg-primary-dark">
                      Start building <ArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {quickstarts.map(({ title, description, icon: Icon }, index) => (
                      <div key={title} className="rounded-lg border border-border-light bg-section-bg p-5">
                        <div className="mb-4 flex items-center justify-between">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-primary">
                            <Icon size={19} />
                          </div>
                          <span className="text-xs font-bold text-text-lighter">0{index + 1}</span>
                        </div>
                        <h3 className="text-sm font-bold text-text-dark">{title}</h3>
                        <p className="mt-2 text-xs leading-6 text-text-light">{description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="grid gap-5 xl:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.04)] sm:p-8">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-lighter text-primary">
                        <TerminalSquare size={21} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-text-dark">Query your assistant</h2>
                        <p className="text-sm text-text-light">Use the API to ask questions and return grounded answers.</p>
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-lg border border-[#1F2937] bg-[#111827]">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <span className="text-xs font-bold text-white/70">JavaScript</span>
                        <button className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white"><Copy size={13} /> Copy</button>
                      </div>
                      <pre className="overflow-x-auto p-4 text-xs leading-6 text-white/85"><code>{`const response = await fetch("https://api.knowmatrix.ai/v1/query", {
  method: "POST",
  headers: {
    "Authorization": "Bearer KM_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    assistant_id: "asst_hr_helper",
    question: "What is our parental leave policy?"
  })
});

const answer = await response.json();`}</code></pre>
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.04)] sm:p-8">
                    <h2 className="text-xl font-bold text-text-dark">Core concepts</h2>
                    <div className="mt-5 space-y-4">
                      {[
                        [Layers, "Workspaces", "Separate teams, environments, and permissions."],
                        [Database, "Knowledge sources", "Documents and synced systems used for retrieval."],
                        [MessageSquare, "Assistants", "User-facing AI agents configured with instructions."],
                        [LockKeyhole, "Access control", "Scoped keys, roles, audit logs, and data boundaries."],
                      ].map(([Icon, title, text]) => {
                        const ConceptIcon = Icon as typeof Layers;
                        return (
                          <div key={title as string} className="flex gap-3 rounded-lg border border-border-light p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-lighter text-primary"><ConceptIcon size={17} /></div>
                            <div>
                              <h3 className="text-sm font-bold text-text-dark">{title as string}</h3>
                              <p className="mt-1 text-xs leading-5 text-text-light">{text as string}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>

                <section className="rounded-lg border border-border bg-white p-6 shadow-[0_1px_3px_rgba(17,24,39,0.04)] sm:p-8">
                  <h2 className="text-2xl font-bold tracking-tight text-text-dark">API reference</h2>
                  <p className="mt-2 text-sm leading-7 text-text-light">Everything you need to integrate KnowMatrix into your product and workflows.</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {apiCards.map(({ title, description, icon: Icon }) => (
                      <Link key={title} href="#" className="rounded-lg border border-border-light p-5 hover:border-primary/30 hover:bg-primary-lighter">
                        <Icon size={20} className="text-primary" />
                        <h3 className="mt-4 text-sm font-bold text-text-dark">{title}</h3>
                        <p className="mt-2 text-xs leading-6 text-text-light">{description}</p>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-8 overflow-hidden rounded-lg border border-border">
                    {endpoints.map(([method, path, description]) => (
                      <div key={path} className="grid gap-3 border-b border-border-light px-4 py-4 last:border-b-0 sm:grid-cols-[90px_190px_1fr] sm:items-center">
                        <span className="w-fit rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">{method}</span>
                        <code className="text-sm font-bold text-text-dark">{path}</code>
                        <span className="text-sm text-text-light">{description}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-border bg-section-bg p-6 sm:p-8">
                  <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                        <CheckCircle2 size={14} />
                        Production ready
                      </div>
                      <h2 className="text-2xl font-bold text-text-dark">Need implementation help?</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-7 text-text-light">Our team can help with data modeling, retrieval evaluation, security review, and launch planning.</p>
                    </div>
                    <Link href="#" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-border bg-white px-6 text-sm font-bold text-text-dark hover:border-primary/30 hover:bg-primary-lighter hover:text-primary">
                      Contact support
                    </Link>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}