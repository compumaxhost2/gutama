import Image from "next/image";
import Link from "next/link";

export function ReRoofingOverviewSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Re-Roofing Newark NJ
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Professional Re-Roofing Services
            <br />
            <em className="text-primary italic">in Newark, NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <h3 className="mb-4 font-serif text-xl text-black">
            Cost-Effective Roof Renewal Solutions for Newark Properties
          </h3>

          <p className="mb-4 text-base leading-loose font-medium text-black">
            Re-roofing is the process of installing a new layer of roofing
            material over an existing roof or replacing an aging roof system to
            restore protection and extend its lifespan. For many homeowners in
            Newark, NJ, re-roofing offers a cost-effective solution when the
            roof is nearing the end of its service life but the underlying
            structure remains in good condition.
          </p>

          <p className="text-base leading-loose font-medium text-black">
            At <Link href="/re-roofing-newark-nj" className="text-primary hover:underline">
              Gutama Roofing NJ
            </Link>, we provide professional re-roofing services
            throughout Newark, Essex County, and surrounding New Jersey
            communities. Our experienced roofing contractors evaluate your
            roof&apos;s condition and recommend the most effective solution,
            whether that&apos;s a roof overlay or a complete roof replacement.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/re-roofing.webp"
                alt="Professional Re-Roofing Services in Newark NJ"
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
                Re-Roofing Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}