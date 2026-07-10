import { Building2, CircleCheck, Globe2, Landmark, Monitor, Umbrella, Zap } from "lucide-react";

const companies = [
  { name: "Acme Corp", icon: CircleCheck },
  { name: "Globex", icon: Globe2 },
  { name: "Initech", icon: Monitor },
  { name: "Umbrella", icon: Umbrella },
  { name: "Stark Industries", icon: Zap },
  { name: "Pinnacle", icon: Landmark },
];

export default function TrustedBy() {
  return (
    <section className="border-y border-border bg-white py-14">
      <div className="container-main">
        <p className="mb-9 text-center text-xs font-semibold uppercase tracking-normal text-text-lighter">Trusted by Innovative Organizations</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:gap-x-12">
          {companies.map(({ name, icon: Icon }) => (
            <div key={name} className="group flex items-center gap-2.5 text-text-lighter hover:text-text-light">
              <Icon size={20} className="transition-transform group-hover:scale-110" />
              <span className="text-sm font-semibold tracking-wide">{name}</span>
            </div>
          ))}
          <Building2 size={0} className="hidden" />
        </div>
      </div>
    </section>
  );
}

