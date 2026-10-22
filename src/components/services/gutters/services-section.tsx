import {
  Droplets,
  Shield,
  Wrench,
  RefreshCw,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  {
    icon: Droplets,
    title: "Gutter Installation Services",
    desc: "We install durable, weather-resistant gutter systems designed for New Jersey weather conditions.",
  },
  {
    icon: Wrench,
    title: "Gutter Repair Services",
    desc: "We fix leaks, loose sections, sagging gutters, and drainage issues.",
  },
  {
    icon: Sparkles,
    title: "Gutter Cleaning Services",
    desc: "We remove leaves, debris, and blockages to restore proper water flow.",
  },
  {
    icon: RefreshCw,
    title: "Gutter Replacement Services",
    desc: "We replace old or damaged systems with modern, efficient gutter solutions.",
  },
  {
    icon: Shield,
    title: "Gutter Guard Installation",
    desc: "We install protective guards to reduce clogging and maintenance needs.",
  },
];

export function GuttersServicesSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Our Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Types of Gutter
            <br />
            <em className="text-primary italic">Services We Provide</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
                  <Icon size={18} className="text-primary" />
                </div>

                <h3 className="mb-3 font-serif text-xl leading-snug text-black">
                  {service.title}
                </h3>

                <p className="text-sm leading-loose font-medium text-black">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}