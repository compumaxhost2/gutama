import { BookAppointmentForm } from "../../components/book-appointment/book-appointment-form";
import { Container } from "@/components/ui/container";

export default function BookAppointmentPage() {
  return (
    <main className="border-b border-white/10 bg-black pt-28 pb-16 text-white">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
            Book Appointment
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            Schedule your free estimate
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-300 md:text-base">
            Tell us about your roofing or exterior project and we&apos;ll follow up to confirm your appointment.
          </p>
        </div>

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c0e] shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
          <BookAppointmentForm />
        </div>
      </Container>
    </main>
  );
}