import Link from "next/link";
import { AuthField, AuthShell } from "../components/auth/AuthShell";

export default function SignupPage() {
  return (
    <AuthShell title="Create your account" subtitle="Start building AI-powered knowledge experiences in minutes.">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-dark">Create your account</h2>
        <p className="text-sm leading-6 text-text-light">Use your work email to start your KnowMatrix workspace.</p>
      </div>

      <form className="space-y-5">
        <AuthField label="Full name" placeholder="Sarah Johnson" icon="user" />
        <AuthField label="Work email" type="email" placeholder="sarah.johnson@acme.com" icon="mail" />
        <AuthField label="Password" type="password" placeholder="••••••••••••" icon="lock" />

        <p className="text-xs font-medium text-text-light">Password must be at least 8 characters.</p>

        <label className="flex items-start gap-3 text-sm text-text-medium">
          <input type="checkbox" defaultChecked className="mt-1 h-4 w-4 rounded border-border accent-primary" />
          <span>I agree to the <Link href="#" className="font-semibold text-primary">Terms of Service</Link> and <Link href="#" className="font-semibold text-primary">Privacy Policy</Link>.</span>
        </label>

        <button type="submit" className="btn btn-primary w-full">Create Account</button>
      </form>

      <p className="mt-8 text-center text-sm text-text-light">
        Already have an account? <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">Sign in</Link>
      </p>
    </AuthShell>
  );
}
