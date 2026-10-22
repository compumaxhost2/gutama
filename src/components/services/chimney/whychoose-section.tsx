export function WhyChooseProfessionalChimneySection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Why It Matters
            </p>

            <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] leading-snug text-black">
              Why Choose
              <br />
              <em className="text-primary italic">
                Professional Chimney Contractors
              </em>
            </h2>

            <div className="mb-7 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

            <p className="text-base leading-loose font-medium text-black">
              Chimney systems play a critical role in both fire safety and
              structural integrity. Improper repairs can create serious risks,
              including water intrusion, smoke issues, and costly structural
              damage.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "Safe Structural Repair Methods",
                "Proper Waterproofing",
                "Correct Airflow & Drafting",
                "Compliance With Safety Standards",
                "Long-Term Durability",
              ].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  <p className="text-sm leading-loose text-black/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-stone-200/90 pt-8">
              <p className="text-sm leading-loose font-medium text-black">
                At <span className="font-medium text-black">Gutama Home Improvement</span>,
                we focus on safe, long-lasting chimney solutions designed to
                withstand New Jersey weather conditions while protecting your
                property for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}