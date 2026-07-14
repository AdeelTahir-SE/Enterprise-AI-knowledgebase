import {
  ClipboardList,
  CloudCog,
  DatabaseBackup,
  FileLock2,
  LockKeyhole,
  Network,
  ShieldCheck,
  UserCog,
} from "lucide-react";

const securityFeatures = [
  {
    title: "Data Encryption",
    description: "AES-256 encryption at rest and TLS 1.2+ in transit to protect your data.",
    icon: LockKeyhole,
    tone: "bg-primary-lighter text-primary",
  },
  {
    title: "Access Control",
    description: "Role-based access control and fine-grained permissions for teams and documents.",
    icon: UserCog,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "SSO & Identity",
    description: "Seamless SSO with SAML, Microsoft Azure AD, Google Workspace, Okta, and more.",
    icon: CloudCog,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Audit Logs",
    description: "Comprehensive audit logs to monitor activity and ensure accountability.",
    icon: ClipboardList,
    tone: "bg-orange-50 text-orange-500",
  },
  {
    title: "Private Deployment",
    description: "Deploy on your own cloud or on-premise. Your data never leaves your control.",
    icon: DatabaseBackup,
    tone: "bg-primary-lighter text-primary",
  },
  {
    title: "Data Privacy",
    description: "Your data is never used to train public models. It stays private and secure.",
    icon: ShieldCheck,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Backup & Recovery",
    description: "Automated backups and disaster recovery to ensure business continuity.",
    icon: DatabaseBackup,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Network Security",
    description: "VPC support, IP allowlisting, firewall protection, and regular security testing.",
    icon: Network,
    tone: "bg-orange-50 text-orange-500",
  },
];

const certifications = [
  { name: "SOC 2 Type II", status: "In Progress", badge: "SOC 2", tone: "from-blue-700 to-blue-500 text-white" },
  { name: "GDPR", status: "Compliant", badge: "GDPR", tone: "from-blue-800 to-indigo-500 text-white" },
  { name: "ISO 27001", status: "In Progress", badge: "ISO", tone: "from-blue-700 to-indigo-700 text-white" },
  { name: "HIPAA", status: "Ready", badge: "HIPAA", tone: "from-blue-50 to-indigo-100 text-primary" },
  { name: "CCPA", status: "Compliant", badge: "CCPA", tone: "from-sky-50 to-blue-100 text-blue-600" },
  { name: "PCI DSS", status: "Compliant", badge: "PCI", tone: "from-emerald-50 to-teal-100 text-teal-700" },
];

export default function SecurityComplianceSection() {
  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="rounded-xl border border-border bg-white p-6 shadow-[0_14px_45px_-30px_rgba(17,24,39,0.35)] sm:p-8 lg:p-10">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="badge mb-4">
              <ShieldCheck size={14} strokeWidth={2.2} />
              Enterprise Grade
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-text-dark sm:text-4xl">
              Security & Compliance You Can Trust
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-7 text-text-light sm:text-base">
              KnowMatrix is built with enterprise-grade security to protect your data and ensure compliance with global standards.
            </p>
          </div>

          <div className="flex flex-col items-center jsutify-center gap-8">
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {securityFeatures.map(({ title, description, icon: Icon, tone }) => (
                <article key={title} className="rounded-xl border border-border bg-white p-5 shadow-[0_8px_28px_-20px_rgba(17,24,39,0.25)]">
                  <div className={`mb-5 flex h-13 w-13 items-center justify-center rounded-xl ${tone}`}>
                    <Icon size={25} strokeWidth={1.9} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-text-dark">{title}</h3>
                  <p className="text-sm leading-6 text-text-light">{description}</p>
                </article>
              ))}
            </div>

            <aside className="w-full rounded-xl border border-border bg-gradient-to-br from-white to-primary-lighter/45 p-6 shadow-[0_12px_36px_-26px_rgba(17,24,39,0.35)] sm:p-7">
              <div className="mb-7 text-center">
                <h3 className="mb-3 text-xl font-bold text-text-dark">Compliance & Certifications</h3>
                <p className="mx-auto max-w-sm text-sm leading-6 text-text-light">
                  KnowMatrix follows industry-leading practices and complies with global standards.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3">
                {certifications.map(({ name, status, badge, tone }) => (
                  <div key={name} className="text-center">
                    <div className={`mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-sm font-black ring-1 ring-border`}>
                      {badge}
                    </div>
                    <div className="text-sm font-bold text-primary">{name}</div>
                    <div className="text-xs font-medium leading-5 text-text-light">{status}</div>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-border pt-5 text-center w-full">
                <div className="flex text-center w-full items-center justify-center gap-3 text-sm leading-6 text-text-light">
                  <FileLock2 size={22} className="mt-0.5 shrink-0 text-primary" strokeWidth={1.9} />
                  <p >Regular security audits, penetration testing, and continuous monitoring keep your data safe.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
