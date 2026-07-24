"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  Globe,
  Sparkles,
} from "lucide-react";
import OnboardingShell from "../components/onboarding/OnboardingShell";

const llmProviders = [
  "Google Gemini",
  "OpenAI",
  "Anthropic",
  "Azure OpenAI",
  "AWS Bedrock",
];

const modelsByProvider: Record<string, string[]> = {
  "Google Gemini": ["Gemini 1.5 Pro", "Gemini 1.5 Flash", "Gemini 2.0 Flash"],
  OpenAI: ["GPT-4o", "GPT-4o Mini", "GPT-4 Turbo"],
  Anthropic: ["Claude 3.5 Sonnet", "Claude 3 Opus", "Claude 3 Haiku"],
  "Azure OpenAI": ["GPT-4o", "GPT-4 Turbo"],
  "AWS Bedrock": ["Claude 3.5 Sonnet", "Titan Text"],
};

const embeddingModels = [
  "text-embedding-004 (Recommended)",
  "text-embedding-003-large",
  "text-embedding-003-small",
  "voyage-large-2",
];

const regions = [
  "US East (N. Virginia)",
  "US West (Oregon)",
  "EU West (Ireland)",
  "EU Central (Frankfurt)",
  "Asia Pacific (Singapore)",
  "Asia Pacific (Mumbai)",
];

export default function ProjectPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [llmProvider, setLlmProvider] = useState("Google Gemini");
  const [model, setModel] = useState("Gemini 1.5 Pro");
  const [embeddingModel, setEmbeddingModel] = useState(
    "text-embedding-004 (Recommended)",
  );
  const [region, setRegion] = useState("US East (N. Virginia)");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-"),
    );
  };

  const handleProviderChange = (provider: string) => {
    setLlmProvider(provider);
    setModel(modelsByProvider[provider]?.[0] || "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_API_GATEWAY_URL ||
        process.env.API_GATEWAY_URL ||
        "";
      const res = await fetch(`${baseUrl}/projects`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          description,
          llm_provider: llmProvider,
          model,
          embedding_model: embeddingModel,
          default_region: region,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create project.");
      }

      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message || "An error occurred.");
      }
      else{
        console.log(err)
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingShell currentStep={2}>
      {/* Header */}
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
            Create Project
          </h1>
          <p className="text-sm leading-relaxed text-text-light sm:text-base">
            Create a new project to start ingesting, indexing and searching your
            knowledge.
          </p>
        </div>
        <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <FolderOpen size={30} />
        </div>
      </div>

      <form className="space-y-7" onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Project Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Project Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="HR Knowledge Base"
            className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-1.5 text-xs text-text-lighter">
            A friendly name for your project.
          </p>
        </div>

        {/* Project Slug */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Project Slug
          </label>
          <div className="flex h-12 items-center overflow-hidden rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
            <span className="flex h-full items-center border-r border-border bg-section-bg px-4 text-sm text-text-lighter select-none whitespace-nowrap">
              knowmatrix.ai/acme-inc/
            </span>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="hr-knowledge-base"
              className="h-full min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter"
            />
          </div>
          <p className="mt-1.5 text-xs text-text-lighter">
            This will be your project&apos;s unique URL.
          </p>
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Description{" "}
            <span className="font-normal text-text-lighter">(Optional)</span>
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A centralized knowledge base for all HR documentation, policies, onboarding guides and FAQs."
            rows={3}
            className="w-full resize-y rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-1.5 text-xs text-text-lighter">
            Describe the purpose of this project.
          </p>
        </div>

        {/* AI Configuration */}
        <div>
          <h2 className="mb-4 text-base font-bold text-text-dark">
            AI Configuration
          </h2>

          {/* LLM Provider + Model */}
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-xs font-semibold text-text-medium">
                LLM Provider
              </label>
              <div className="relative">
                <Sparkles
                  size={16}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-primary"
                />
                <select
                  value={llmProvider}
                  onChange={(e) => handleProviderChange(e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-10 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  {llmProviders.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-lighter"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold text-text-medium">
                Model
              </label>
              <div className="relative">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-4 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
                >
                  {(modelsByProvider[llmProvider] || []).map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-lighter"
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="mb-5 text-xs text-text-lighter">
            You can change the model anytime.
          </p>

          {/* Embedding Model */}
          <div>
            <label className="mb-2 block text-xs font-semibold text-text-medium">
              Embedding Model
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-primary">
                G
              </span>
              <select
                value={embeddingModel}
                onChange={(e) => setEmbeddingModel(e.target.value)}
                className="h-11 w-full appearance-none rounded-lg border border-border bg-white pl-10 pr-9 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
              >
                {embeddingModels.map((em) => (
                  <option key={em} value={em}>
                    {em}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-text-lighter"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-1.5 text-xs text-text-lighter">
              Used for converting your documents into vectors.
            </p>
          </div>
        </div>

        {/* Default Region */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Default Region
          </label>
          <div className="relative">
            <Globe
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-lighter"
            />
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="h-12 w-full appearance-none rounded-lg border border-border bg-white pl-11 pr-10 text-sm text-text-dark outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-lighter"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4 6l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-1.5 text-xs text-text-lighter">
            You can change this later in project settings.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating..." : "Create Project"}
            {!loading && <ArrowRight size={16} />}
          </button>
          <button
            type="button"
            onClick={() => router.push("/organization")}
            className="btn btn-secondary"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </form>
    </OnboardingShell>
  );
}
