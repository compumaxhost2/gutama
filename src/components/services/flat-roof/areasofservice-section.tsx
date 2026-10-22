import { MapPin } from "lucide-react";

export function FlatRoofAreasWeServeSection() {
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
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-5xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Service Areas
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Areas
            <br />
            <em className="text-primary italic">We Serve</em>
          </h2>

          <div className="mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="text-base leading-loose font-medium text-black">
            We proudly provide flat roof services throughout Essex County, NJ,
            serving homeowners, property managers, and commercial property
            owners with professional flat roofing solutions.
          </p>
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin
                  size={16}
                  className="shrink-0 text-primary"
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