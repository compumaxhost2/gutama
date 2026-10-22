
import {
  Award,
  MessageSquare,
  Shield,
  Sparkles,
  MapPin,
  Users,
} from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose
            <em className="text-primary italic"> Gutama Home Improvement?</em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Choosing the right roofing contractor is essential for the success
            of your project. Homeowners and businesses throughout Essex County
            trust our team for dependable service, quality workmanship, and
            professional roof removal solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {/* 1 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <Users size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Experienced Roofing Professionals
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Our team has extensive experience with roof tear-offs and roof
              replacement projects.
            </p>
          </div>

          {/* 2 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <Shield size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Licensed and Insured Services
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              We follow industry standards and safety practices on every job.
            </p>
          </div>

          {/* 3 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <Award size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Quality Workmanship
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Attention to detail ensures every project is completed correctly.
            </p>
          </div>

          {/* 4 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <MessageSquare size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Transparent Communication
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              We explain the process, answer your questions, and provide honest
              recommendations.
            </p>
          </div>

          {/* 5 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <Sparkles size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Complete Cleanup
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Your property is left clean, safe, and ready for the next phase
              of roofing installation.
            </p>
          </div>

          {/* 6 */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
            <div className="mb-7 flex h-11 w-11 items-center justify-center border border-primary/35 bg-primary/5">
              <MapPin size={18} className="text-primary" />
            </div>

            <h3 className="mb-3 font-serif text-xl leading-snug text-black">
              Local Roofing Expertise
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              We understand the unique roofing challenges faced by properties
              throughout Essex County and Northern New Jersey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
