export function EmergencyRepairWhyChooseSection() {
  const features = [
    {
      title: "Fast Emergency Response",
      desc: "We understand that roofing emergencies cannot wait.",
    },
    {
      title: "Experienced Emergency Roofing Contractors",
      desc: "Our team is trained to safely handle urgent roofing situations throughout Newark and Essex County.",
    },
    {
      title: "Residential & Commercial Expertise",
      desc: "We repair asphalt shingles, flat roofing, EPDM roofing, TPO roofing, and metal roofing systems.",
    },
    {
      title: "Honest Assessments",
      desc: "We provide transparent recommendations focused on protecting your property and minimizing future issues.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Homeowners Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] text-black">
            Why Choose
            <br />
            <em className="text-primary italic">Gutama Roofing NJ?</em>
          </h2>

          <div className="mx-auto h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 transition-all duration-300 hover:border-primary/30"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-xl leading-snug text-black">
                {item.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}