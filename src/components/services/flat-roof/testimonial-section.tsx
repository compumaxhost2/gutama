import { Star } from "lucide-react";

export function FlatRoofTestimonialSection() {
  const content = {
        quote: "They explained the drainage issues clearly, rebuilt the problem areas properly, and left us with a flat roof system that feels far more dependable.",
        name: "Michael P.",
        location: "Bloomfield, NJ - Flat Roof Replacement",
      };

  return (
    <section className="bg-stone-100 text-stone-900 py-28 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-10 flex justify-center gap-1.5">{[...Array(5)].map((_, i) => (<Star key={i} size={18} fill="currentColor" className="text-secondary" />))}</div>
        <p className="mb-12 font-serif text-[clamp(22px,3vw,36px)] italic leading-relaxed text-stone-900">&ldquo;{content.quote}&rdquo;</p>
        <div className="mx-auto mb-7 h-px w-10 bg-secondary" />
        <p className="mb-1 font-serif text-xl text-secondary">{content.name}</p>
        <p className="text-[12px] tracking-[0.12em] uppercase text-stone-600">{content.location}</p>
      </div>
    </section>
  );
}
