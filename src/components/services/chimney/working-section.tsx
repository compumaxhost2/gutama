export function ChimneyHowItWorksSection() {
  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Left */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
              <span className="h-px w-6 bg-primary" />
              Understanding The System
            </p>

            <h2 className="font-serif text-[clamp(32px,4vw,52px)] leading-tight text-black">
              How Chimney
              <br />
              <em className="text-primary italic">Systems Work</em>
            </h2>

            <div className="mt-6 h-px w-24 bg-linear-to-r from-primary to-primary/30" />
          </div>

          {/* Right */}
          <div>
            <p className="mb-8 text-base leading-loose font-medium text-black">
              A chimney works by creating a natural draft that pulls smoke and
              gases upward and safely out of the home. This continuous airflow
              helps maintain indoor air quality while allowing fireplaces and
              heating systems to operate safely and efficiently.
            </p>

            <div className="space-y-5">
              {[
                "Fire or heating system produces smoke",
                "Hot gases rise through the flue",
                "Chimney draft pulls air upward",
                "Smoke exits through the chimney cap",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex gap-5 border-b border-stone-200/70 pb-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/30 bg-primary/5">
                    <span className="font-serif text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="pt-2 text-black/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm leading-loose font-medium text-black">
                If any part of the chimney system becomes damaged, blocked, or
                deteriorated, airflow can weaken and potentially allow smoke,
                moisture, or dangerous gases to enter the home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}