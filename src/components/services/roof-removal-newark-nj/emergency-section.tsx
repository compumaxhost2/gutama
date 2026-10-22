import {
  ShieldAlert,
  Umbrella,
  Droplets,
  ClipboardCheck,
  FileText,
} from "lucide-react";

const SERVICES = [
  {
    icon: Umbrella,
    title: "Emergency Tarping",
    desc: "Temporary roof protection to prevent additional water intrusion and structural damage.",
  },
  {
    icon: Droplets,
    title: "Leak Repairs",
    desc: "Rapid leak identification and emergency repair solutions to protect your property.",
  },
  {
    icon: ClipboardCheck,
    title: "Storm Damage Assessments",
    desc: "Detailed inspections to evaluate wind, hail, debris, and weather-related roof damage.",
  },
  {
    icon: ShieldAlert,
    title: "Temporary Protection",
    desc: "Immediate stabilization measures while permanent roofing repairs are planned.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Assistance",
    desc: "Documentation and damage reporting support to help simplify the claims process.",
  },
];

export function RoofRemovalEmergencySection() {
  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Emergency Roofing Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-white">
            Emergency Roof Repair
            <br />
            <em className="text-secondary italic">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose text-stone-300">
            Severe weather can cause unexpected roofing damage that requires
            immediate attention. Our emergency roofing team responds quickly to
            help protect your home or business from further damage.
          </p>
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-6 transition-all duration-300 hover:border-secondary/40"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center border border-secondary/35 bg-secondary/5">
                <service.icon
                  size={18}
                  className="text-secondary"
                />
              </div>

              <h3 className="mb-3 font-serif text-lg text-stone-900">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-stone-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}