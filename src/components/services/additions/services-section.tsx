export function AdditionsServicesSection() {
  const services = [
    {
      title: "Room Additions",
      description:
        "Expand living rooms, bedrooms, or family spaces for added comfort.",
    },
    {
      title: "Kitchen Additions",
      description:
        "Increase kitchen space for better functionality and modern design upgrades.",
    },
    {
      title: "Bathroom Additions",
      description:
        "Add new bathrooms for convenience and increased home value.",
    },
    {
      title: "Second-Story Additions",
      description:
        "Build upward to maximize space without reducing yard area.",
    },
    {
      title: "Garage Additions",
      description:
        "Add attached or detached garages for vehicles and storage.",
    },
    {
      title: "Sunrooms & Enclosures",
      description:
        "Create bright, insulated spaces for relaxation and natural light.",
    },
  ];

  return (
    <section className="bg-stone-100 text-black py-14 px-6 border-t border-stone-200">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Home Addition Solutions
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,56px)] leading-snug text-black">
            Types of Home
            <br />
            <em className="text-primary italic">Additions We Provide</em>
          </h2>

          <div className="h-px w-24 bg-linear-to-r from-primary to-primary/30" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-8 md:p-10"
            >
              <div className="mb-5 h-px w-10 bg-primary" />

              <h3 className="mb-4 font-serif text-2xl text-black">
                {service.title}
              </h3>

              <p className="text-sm leading-loose font-medium text-black">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}