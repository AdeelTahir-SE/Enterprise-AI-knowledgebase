import Link from "next/link";
import { AuthField, AuthShell } from "../components/auth/AuthShell";

export default function LoginPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue building secure AI knowledge assistants.">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-text-dark">Sign in to KnowMatrix</h2>
        <p className="text-sm leading-6 text-text-light">Access your workspace, assistants, documents, and analytics.</p>
      </div>

      <form className="space-y-5">
        <AuthField label="Work email" type="email" placeholder="sarah.johnson@acme.com" icon="mail" />
        <AuthField label="Password" type="password" placeholder="••••••••••••" icon="lock" />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-text-medium">
            <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
            Remember me
          </label>
          <Link href="#" className="font-semibold text-primary hover:text-primary-dark">Forgot password?</Link>
        </div>

        <button type="submit" className="btn btn-primary w-full">Sign In</button>
      </form>

      <p className="mt-8 text-center text-sm text-text-light">
        New to KnowMatrix? <Link href="/signup" className="font-semibold text-primary hover:text-primary-dark">Create an account</Link>
      </p>
    </AuthShell>
  );
}
