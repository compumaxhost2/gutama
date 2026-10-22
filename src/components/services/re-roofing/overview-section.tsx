import Image from "next/image";
import Link from "next/link";

export function ReRoofingOverviewSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Re-Roofing Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug font-bold text-black">
            Re-Roofing Services in
            <br />
            <em className="text-primary italic">Essex County, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <h3 className="mb-4 font-serif text-xl font-bold text-black">
            Professional Re-Roofing Solutions for Homes and Businesses
          </h3>

          <p className="mb-4 text-base leading-loose font-medium text-black">
            Re-roofing is the process of replacing an aging or damaged roof with
            a new roofing system to restore protection, improve energy
            efficiency, and extend the life of your property. A professional
            re-roofing project helps prevent leaks, weather damage, and costly
            structural repairs while increasing the value and appearance of your
            home or commercial building.
          </p>

          <p className="text-base leading-loose font-medium text-black">
            At{" "}
            <Link href="/" className="font-semibold text-primary hover:underline">
              Gutama Home Improvement
            </Link>
            , we provide expert re-roofing services throughout Essex County, NJ.
            Whether your roof has reached the end of its lifespan, suffered storm
            damage, or is showing signs of wear and tear, our experienced
            roofing contractors deliver reliable solutions designed for
            long-term performance.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src="/images/before-roof.webp"
                alt="Professional Re-Roofing Services in Essex County NJ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-br from-primary/15 to-transparent" />
            </div>

            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-primary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-primary/20" />

            <div className="absolute -left-7 bottom-7 border border-primary/40 bg-white shadow-xl rounded-2xl px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl font-bold leading-none text-primary">
                740+
              </p>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-black">
                Roofs Replaced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}