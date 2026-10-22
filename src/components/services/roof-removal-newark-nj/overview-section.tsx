import Image from "next/image";
import Link from "next/link";

export function RoofRemovalOverviewSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roof Removal Newark NJ
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Professional Roof Tear-Off &
            <br />
            <em className="text-primary italic">Replacement Services</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-4 text-base leading-loose font-medium text-black">
            Need professional Roof Removal Newark NJ services? Roof removal is
            the process of completely removing existing roofing materials before
            installing a new roofing system. A full roof tear-off allows roofing
            contractors to inspect the roof deck, identify hidden damage, and
            ensure the new roof is installed on a solid foundation for maximum
            performance and longevity.
          </p>

          <p className="text-base leading-loose font-medium text-black">
            At{" "}
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              Gutama Roofing NJ
            </Link>
            , we provide complete roof tear-off and roof replacement solutions
            for homeowners and businesses throughout Newark and Essex County.
            Our licensed roofing contractors safely remove old roofing
            materials, inspect the roof deck, and prepare your property for a
            durable new roof installation.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/roof-removal.webp"
                alt="Professional Roof Removal Services in Newark NJ"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-br from-secondary/20 to-transparent" />
            </div>

            <div className="absolute -right-6 -bottom-6 -z-10 h-28 w-28 border border-primary/30" />
            <div className="absolute -top-6 -left-6 -z-10 h-20 w-20 border border-primary/20" />

            <div className="absolute -left-7 bottom-7 border border-primary/40 bg-white shadow-md rounded-2xl/85 px-5 py-4 backdrop-blur-sm">
              <p className="mb-1 font-serif text-3xl leading-none text-primary">
                740+
              </p>

              <p className="text-[11px] tracking-[0.12em] uppercase font-medium text-black">
                Roof Tear-Off Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}