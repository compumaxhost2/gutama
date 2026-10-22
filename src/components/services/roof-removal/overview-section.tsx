import Image from "next/image";
import Link from "next/link";

export function RoofRemovalOverviewSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            What We Do
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Roof Removal Services
            <br />
            <em className="text-primary italic">Essex County, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-4 text-base leading-loose font-medium text-black">
            Roof removal is the process of completely removing old roofing materials before installing a new roof. A professional roof tear-off allows roofing contractors to inspect the roof deck, identify hidden damage, and ensure the new roofing system is installed correctly. Homeowners and business owners throughout Essex County, NJ choose roof removal services to improve roof performance, extend roof lifespan, and protect their property from future roofing issues.
          </p>

          {/* <h3 className="mb-4 text-xl font-serif text-black">
            Why Choose Our Essex County Roof Tear-Off?
          </h3>  */}

          <p className="mb-4 text-base leading-loose font-medium text-black">
            At <Link href="/" className="text-primary hover:underline">
              Gutama Home Improvement
            </Link>, we provide safe, efficient, and professional roof removal services for residential and commercial properties. Whether your roof has reached the end of its lifespan, suffered storm damage, or requires a complete replacement, our experienced team is here to help.
          </p>

          {/* <ul className="flex flex-col gap-3.5">
            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-primary" />
              <span className="text-sm tracking-wide text-black/80">
                Local expertise — locally owned, serving Essex County since
                [Year]
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-primary" />
              <span className="text-sm tracking-wide text-black/80">
                Safety first — OSHA-compliant roof disposal services
              </span>
            </li>

            <li className="flex items-center gap-3">
              <div className="h-px w-5 shrink-0 bg-primary" />
              <span className="text-sm tracking-wide text-black/80">
                Emergency response — rapid roof removal after North Jersey
                storms
              </span>
            </li>
          </ul> */}
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/before-roof.webp"
                alt="Trusted Roof Removal Services by Gutama Home Improvement"
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
                Roofs Removed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width bottom content */}
      {/* <div className="mx-auto mt-20 max-w-4xl text-center">
        <div className="mx-auto mb-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

        <h3 className="mb-4 font-serif text-[clamp(24px,2.5vw,32px)] text-black">
          Trusted Roof Removal Services by{" "}
          <em className="text-primary italic">Gutama Home Improvement</em>
        </h3>

        <p className="text-base leading-loose font-medium text-black">
          Gutama Home Improvement offers professional roof removal services in
          NJ, providing homeowners and businesses in Essex County with efficient
          debris disposal. Our expert team specializes in residential roof
          removal in Newark, NJ, ensuring a clean, safe, and cost-effective
          foundation for your new roofing system.
        </p>
      </div> */}
    </section>
  );
}

