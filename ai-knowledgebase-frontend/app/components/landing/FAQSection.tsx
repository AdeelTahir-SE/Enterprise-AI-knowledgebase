import Link from "next/link";
import { ArrowRight, ChevronDown, CircleHelp, Headphones } from "lucide-react";

const faqs = [
  {
    question: "What is KnowMatrix?",
    answer: "KnowMatrix is an enterprise AI knowledge base that helps organizations search, understand, and utilize documents using advanced AI and Retrieval-Augmented Generation.",
  },
  {
    question: "What types of documents and data sources are supported?",
    answer: "We support PDF, DOCX, PPTX, XLSX, TXT, images, emails, SharePoint, Confluence, Google Drive, databases, and custom APIs.",
  },
  {
    question: "How does the AI ensure accurate and reliable answers?",
    answer: "KnowMatrix uses Retrieval-Augmented Generation with semantic search and citations, ensuring answers are grounded in your original documents.",
  },
  {
    question: "Is my data used to train AI models?",
    answer: "No. Your data is never used to train public AI models. It remains private and within your environment.",
  },
  {
    question: "Can I deploy KnowMatrix on-premise?",
    answer: "Yes. KnowMatrix supports cloud, on-premise, and private VPC deployments based on your security requirements.",
  },
  {
    question: "Which AI models are supported?",
    answer: "We support leading LLMs including OpenAI GPT-4o, GPT-4, Claude, Llama 3, and other custom models.",
  },
  {
    question: "Does KnowMatrix support multiple languages?",
    answer: "Yes. KnowMatrix supports 100+ languages for document processing and AI search.",
  },
  {
    question: "How long does it take to index documents?",
    answer: "It depends on the size and format. Most documents are indexed within minutes to a few hours.",
  },
  {
    question: "Can I integrate KnowMatrix with my existing systems?",
    answer: "Yes. KnowMatrix provides REST APIs, webhook support, and integrations with popular tools and platforms.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support, live chat, onboarding assistance, documentation, and dedicated enterprise support.",
  },
];

export default function FAQSection() {
  return (
    <section className="section-alt">
      <div className="container-main">
        <div className="rounded-xl border border-border bg-white p-6 shadow-[0_14px_45px_-30px_rgba(17,24,39,0.35)] sm:p-8 lg:p-10">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="badge mb-4">
              <CircleHelp size={14} strokeWidth={2.2} />
              FAQ
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">Frequently Asked Questions</h2>
            <p className="text-sm leading-7 text-text-light sm:text-base">Everything you need to know about KnowMatrix.</p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="rounded-lg border border-border bg-white px-5 py-4 shadow-[0_6px_22px_-18px_rgba(17,24,39,0.28)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-1.5 text-sm font-bold text-text-dark">{question}</h3>
                    <p className="text-xs leading-5 text-text-light sm:text-sm sm:leading-6">{answer}</p>
                  </div>
                  <ChevronDown size={18} className="mt-1 shrink-0 text-primary" strokeWidth={2.2} />
                </div>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center justify-between gap-4 rounded-xl border border-border bg-white px-5 py-4 shadow-[0_8px_28px_-20px_rgba(17,24,39,0.3)] sm:flex-row sm:px-7">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-lighter text-primary sm:flex">
                <Headphones size={25} strokeWidth={1.9} />
              </div>
              <div>
                <h3 className="text-base font-bold text-text-dark">Still have questions?</h3>
                <p className="text-sm leading-6 text-text-light">Our team is here to help you.</p>
              </div>
            </div>
            <Link href="#" className="btn btn-primary min-h-12 px-7">
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
