import { MapPin } from "lucide-react";

export function DormersPropertyTypesSection() {
  const properties = [
    "Attics",
    "Upper floors",
    "Master bedrooms",
    "Home offices",
    "Storage spaces",
  ];

  const areas = [
    "Newark, NJ",
    "East Orange, NJ",
    "Bloomfield, NJ",
    "West Orange, NJ",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Residential Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Residential Dormer Services
            <br />
            <em className="text-primary italic">In Essex County, NJ</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10 lg:p-12">
          <div className="mb-8">
            <h3 className="mb-4 font-serif text-2xl text-black">
              We Help Homeowners Expand & Improve
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Dormers are especially common in older New Jersey homes with
              underutilized attic space.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="font-medium text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
          <h3 className="mb-6 font-serif text-2xl text-black">
            Areas We Serve
          </h3>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div key={area} className="flex items-center gap-3">
                <MapPin size={16} className="shrink-0 text-primary" />
                <span className="font-medium text-black">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 border-t border-stone-200 pt-6 text-base leading-loose font-medium text-black">
            And surrounding Essex County communities.
          </p>
        </div>
      </div>
    </section>
  );
}