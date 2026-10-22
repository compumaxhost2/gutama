import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { ContactForm } from "@/components/contact/contact-form-card";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <main className="border-b border-white/10 bg-black pt-28 pb-16 text-white">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Contact Us
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-300 md:text-base">
            Share your roofing or exterior needs and we&apos;ll follow up with a free estimate.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          <ContactInfoPanel />
          <div className="h-px bg-linear-to-r from-transparent via-secondary/60 to-transparent" />
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}