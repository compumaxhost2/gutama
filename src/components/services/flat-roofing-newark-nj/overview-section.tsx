import Image from "next/image";
import Link from "next/link";

export function FlatRoofOverviewSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Flat Roofing Services
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Flat Roofing
            <br />
            <em className="text-primary italic">Newark NJ</em>
          </h2>

          <div className="mx-0 mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <h3 className="mb-4 font-serif text-xl text-black">
            Expert Flat Roofing Services in Newark, NJ
          </h3>

          <p className="mb-4 text-base leading-loose font-medium text-black">
            Flat roofing is a durable and cost-effective roofing solution
            commonly used for commercial buildings, apartment complexes,
            industrial facilities, and modern residential properties.
            Professional flat roofing systems provide reliable weather
            protection, energy efficiency, and long-term performance when
            properly installed and maintained.
          </p>

          <p className="text-base leading-loose font-medium text-black">
            At{" "}
            <Link href="/" className="text-primary hover:underline">
              Gutama Roofing NJ
            </Link>
            , we specialize in flat roofing services throughout Newark, Essex
            County, and surrounding New Jersey communities. Whether you need
            flat roof installation, flat roof repair, flat roof replacement, or
            emergency leak repair, our experienced roofing contractors deliver
            high-quality solutions tailored to your property&apos;s needs.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/after-flat.webp"
                alt="Professional Flat Roofing Services in Newark NJ"
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
                Flat
              </p>

              <p className="text-[11px] tracking-[0.12em] uppercase font-medium text-black">
                Roofing Specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}