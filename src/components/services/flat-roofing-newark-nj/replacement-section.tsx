export function FlatRoofReplacementSection() {
  const signs = [
    "Frequent leaks",
    "Extensive membrane damage",
    "Structural moisture issues",
    "Aging roofing system",
    "Recurring repair costs",
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Roof Replacement
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] text-black">
            Flat Roof Replacement
            <br />
            <em className="text-primary italic">Newark NJ</em>
          </h2>

          <div className="mx-auto mb-8 h-px w-24 bg-linear-to-r from-primary to-primary/30" />

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            When repairs are no longer cost-effective, a complete flat roof
            replacement may be the best solution.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-12">
          <h3 className="mb-8 font-serif text-2xl text-black">
            Signs You Need Flat Roof Replacement
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {signs.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-stone-200/70 pb-4 last:border-0"
              >
                <div className="h-px w-5 shrink-0 bg-primary" />
                <span className="text-sm text-black/85">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-stone-200 pt-8">
            <p className="text-sm leading-loose font-medium text-black">
              A professional inspection can determine whether repair or
              replacement is the better long-term investment for your property,
              helping you avoid ongoing maintenance costs and unexpected roofing
              failures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}