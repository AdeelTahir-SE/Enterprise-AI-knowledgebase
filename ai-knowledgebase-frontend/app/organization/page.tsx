"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Building2, Globe, Users } from "lucide-react";
import Link from "next/link";
import OnboardingShell from "../components/onboarding/OnboardingShell";

const teamSizes = [
  { label: "1 - 10", sub: "members" },
  { label: "11 - 50", sub: "members" },
  { label: "51 - 200", sub: "members" },
  { label: "200+", sub: "members" },
];

const regions = [
  "US East (N. Virginia)",
  "US West (Oregon)",
  "EU West (Ireland)",
  "EU Central (Frankfurt)",
  "Asia Pacific (Singapore)",
  "Asia Pacific (Mumbai)",
];

export default function OrganizationPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [teamSize, setTeamSize] = useState("1 - 10");
  const [region, setRegion] = useState("US East (N. Virginia)");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (val: string) => {
    setName(val);
    setSlug(
      val
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
    );
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
      const res = await fetch(`${baseUrl}/organizations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          slug,
          description,
          team_size: teamSize,
          default_region: region,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to create organization.");
      }

      router.push("/project");
    } catch (err: any) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OnboardingShell currentStep={1}>
      {/* Header */}
      <div className="mb-10 flex items-start justify-between gap-6">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
            Create Organization
          </h1>
          <p className="text-sm leading-relaxed text-text-light sm:text-base">
            Create your organization to manage projects, team members and
            billing in one place.
          </p>
        </div>
        <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Building2 size={30} />
        </div>
      </div>

      <form className="space-y-7" onSubmit={handleSubmit}>
        {error && (
          <div className="rounded-lg border border-red-100 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Organization Name */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Organization Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="Acme Inc."
            className="h-12 w-full rounded-lg border border-border bg-white px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-1.5 text-xs text-text-lighter">
            This is the name of your organization.
          </p>
        </div>

        {/* Organization Slug */}
        <div>
          <label className="mb-2 block text-sm font-bold text-text-dark">
            Organization Slug
          </label>
          <div className="flex h-12 items-center overflow-hidden rounded-lg border border-border bg-white focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
            <span className="flex h-full items-center border-r border-border bg-section-bg px-4 text-sm text-text-lighter select-none">
              knowmatrix.ai/
            </span>
            <input
              type="text"
              required
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="acme-inc"
              className="h-full min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-text-dark outline-none placeholder:text-text-lighter"
            />
          </div>
          <p className="mt-1.5 text-xs text-text-lighter">
            This will be your organization&apos;s unique URL.
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
            placeholder="Acme Inc. internal knowledge base for documentation, policies, processes and more."
            rows={3}
            className="w-full resize-y rounded-lg border border-border bg-white px-4 py-3 text-sm leading-relaxed text-text-dark outline-none placeholder:text-text-lighter focus:border-primary focus:ring-4 focus:ring-primary/10"
          />
          <p className="mt-1.5 text-xs text-text-lighter">
            Briefly describe your organization.
          </p>
        </div>

        {/* Team Size */}
        <div>
          <label className="mb-3 block text-sm font-bold text-text-dark">
            Team Size
          </label>
          <div className="grid grid-cols-4 gap-3">
            {teamSizes.map((size) => (
              <button
                key={size.label}
                type="button"
                onClick={() => setTeamSize(size.label)}
                className={`flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-3.5 text-center transition-all ${
                  teamSize === size.label
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-white text-text-medium hover:border-primary/30"
                }`}
              >
                <Users
                  size={18}
                  className={
                    teamSize === size.label ? "text-primary" : "text-text-lighter"
                  }
                />
                <span className="text-xs font-bold leading-tight">
                  {size.label}
                </span>
                <span className="text-[10px] text-text-lighter">{size.sub}</span>
              </button>
            ))}
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
            You can change this later in settings.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Creating..." : "Create Organization"}
          {!loading && <ArrowRight size={16} />}
        </button>

        <p className="text-center text-xs text-text-lighter">
          By creating an organization, you agree to our{" "}
          <Link href="#" className="font-semibold text-primary hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="#" className="font-semibold text-primary hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </OnboardingShell>
  );
}
