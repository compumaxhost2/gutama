import Image from "next/image";
import Link from "next/link";

export function AdditionsOverviewSection() {
  const content = {
    title: "Home Addition Services",
    accent: "in Essex County, NJ",

    paragraphs: [
      "Home addition services involve expanding an existing residential or commercial building by adding new usable space. This can include room extensions, second-story additions, garages, or structural expansions that improve functionality, comfort, and property value.",
    ],

    image: "/images/gutama new images/home additions.jpg",
    imageAlt: "Home addition construction project",

    badgeValue: "Essex",
    badgeLabel: "County Home Additions",
  };

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            What We Do
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            {content.title}
            <br />
            <em className="text-primary italic">{content.accent}</em>
          </h2>

          <div className="mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mb-8 text-base leading-loose font-medium text-black">
            {content.paragraphs[0]}
          </p>

          <p className="text-base leading-loose font-medium text-black">
            At <Link href="/" className="text-primary hover:underline">
              Gutama Home Improvement
            </Link>, we provide professional home addition services in Essex County, NJ, helping homeowners expand living space with safe, code-compliant, and high-quality construction solutions.
          </p>
        </div>

        <div>
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={content.image}
                alt={content.imageAlt}
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
                {content.badgeValue}
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase font-medium text-black">
                {content.badgeLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}