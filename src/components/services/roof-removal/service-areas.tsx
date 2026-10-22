
import { MapPin } from "lucide-react";

export function AreasWeServeSection() {
  const areas = [
    "Newark",
    "East Orange",
    "Irvington",
    "Bloomfield",
    "Livingston",
    "West Orange",
    "Maplewood",
    "South Orange",
    "Belleville",
    "Nutley",
    "Verona",
    "Cedar Grove",
  ];

  return (
    <section className="relative bg-black text-white py-20 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-secondary">
            <span className="h-px w-6 bg-secondary" />
            Service Area
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-white">
            Areas
            <br />
            <em className="text-secondary italic">We Serve</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-secondary to-secondary/30" />

          <p className="text-base leading-loose text-white">
            We proudly provide roof removal services throughout Essex County,
            NJ, serving homeowners and commercial property owners across the
            region.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-2xl p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 text-secondary"
                />
                <span className="font-medium text-black">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 border-t border-stone-200 pt-8 text-base leading-loose font-medium text-black">
            And surrounding communities throughout Northern New Jersey.
          </p>
        </div>
      </div>
    </section>
  );
}
