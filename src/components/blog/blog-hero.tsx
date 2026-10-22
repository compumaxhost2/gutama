import { Container } from "@/components/ui/container";

export function BlogHero() {
  return (
    <section className="relative pt-28 pb-14 bg-black text-white border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)]" />
      <Container className="relative text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Our Blogs
        </h1>
        <div className="gold-divider mb-4" />
        <p className="mx-auto max-w-xl text-lg text-stone-300">
          Browse our portfolio of completed projects across Essex County.
        </p>
      </Container>
    </section>
  );
}
