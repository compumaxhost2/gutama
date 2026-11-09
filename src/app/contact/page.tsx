import { ContactInfoPanel } from "@/components/contact/contact-info-panel";
import { ContactForm } from "@/components/contact/contact-form-card";
import { Container } from "@/components/ui/container";

export default function ContactPage() {
  return (
    <main className="border-b border-white/10 bg-black pt-28 pb-20 text-white">
      <Container>
        {/* Page Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Let&apos;s talk about your project
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-300 md:text-base">
            Request a free, itemized estimate or speak directly with our team in Essex County, NJ.
          </p>
        </div>

        {/* 2-Column Split Card */}
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] shadow-[0_25px_70px_rgba(0,0,0,0.85)] grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Contact details, hours, address, trust indicators */}
          <div className="lg:col-span-5 border-b border-white/10 lg:border-b-0 lg:border-r border-white/10">
            <ContactInfoPanel />
          </div>

          {/* Right Column: Contact & Estimate Request Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
