import { Clock3, FileCheck } from "lucide-react";

export function RoofRemovalInfoSection() {
  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Project Information
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            What to Expect During
            <br />
            <em className="text-primary italic">Roof Replacement</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Timeline */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/35 bg-primary/5">
              <Clock3 size={20} className="text-primary" />
            </div>

            <h3 className="mb-5 font-serif text-3xl text-black">
              How Long Does Roof
              <br />
              <em className="text-primary text-2xl not-italic">
                Removal Take?
              </em>
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Most residential roof removal projects are completed within
              one to three days. Larger commercial projects may require
              additional time depending on the size, accessibility,
              roofing materials, and overall complexity of the project.
            </p>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose font-medium text-black">
                Weather conditions, structural repairs, and specialized
                roofing systems can also affect the overall project timeline.
              </p>
            </div>
          </div>

          {/* Permits */}
          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center border border-primary/35 bg-primary/5">
              <FileCheck size={20} className="text-primary" />
            </div>

            <h3 className="mb-5 font-serif text-3xl text-black">
              Do I Need a Permit for
              <br />
              <em className="text-primary text-2xl not-italic">
                Roof Replacement?
              </em>
            </h3>

            <p className="text-sm leading-loose font-medium text-black">
              Many roof replacement projects in Newark, NJ require permits
              and compliance with local building regulations. Permit
              requirements can vary depending on project scope, roofing
              materials, and structural modifications.
            </p>

            <div className="mt-8 border-t border-stone-200 pt-6">
              <p className="text-sm leading-loose font-medium text-black">
                Our team handles the permit process and helps ensure your
                roofing project complies with Newark and New Jersey building
                code requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}