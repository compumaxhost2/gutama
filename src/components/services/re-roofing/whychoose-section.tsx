import {
  Award,
  MessageSquare,
  Shield,
  Sparkles,
  MapPin,
  Users,
} from "lucide-react";

export function ReRoofingWhyChooseUsSection() {
  const benefits = [
    {
      icon: Users,
      title: "Experienced Roofing Contractors",
      description:
        "Our team has extensive experience handling residential and commercial re-roofing projects.",
    },
    {
      icon: Shield,
      title: "Licensed and Insured",
      description:
        "We follow industry best practices and safety standards.",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description:
        "We install trusted roofing products designed for long-term durability.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description:
        "We provide honest recommendations and keep you informed throughout the project.",
    },
    {
      icon: Sparkles,
      title: "Complete Cleanup",
      description:
        "Every project includes thorough debris removal and site cleanup.",
    },
    {
      icon: MapPin,
      title: "Local Roofing Expertise",
      description:
        "We understand the roofing challenges created by New Jersey’s weather and climate conditions.",
    },
  ];

  return (
    <section className="bg-[#dfd0c0] text-black py-14 px-6 border-t border-stone-300">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase text-primary">
            <span className="h-px w-6 bg-primary" />
            Why Choose Us
          </p>

          <h2 className="mb-6 font-serif text-[clamp(36px,4vw,52px)] font-bold text-black">
            Why Choose{" "}
            <em className="text-primary italic">
              Gutama Home Improvement?
            </em>
          </h2>

          <p className="mx-auto max-w-3xl text-base leading-loose font-medium text-black">
            Choosing the right roofing contractor is essential for a successful
            re-roofing project. Our team delivers dependable workmanship,
            quality materials, and exceptional customer service from start to
            finish.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-2xl border border-stone-200/90 bg-white shadow-md p-11 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-lg border border-primary/35 bg-primary/5">
                  <Icon size={18} className="text-primary" />
                </div>

                <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-black">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-loose font-medium text-black">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
