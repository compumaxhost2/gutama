import Link from "next/link";

export function LocationNavigationSection() {
  const locations = [
    {
        name: "Essex County NJ",
        href: "/services/emergency-repair",
        active: true,   
    },
    {
      name: "Newark NJ",
      href: "/emergency-roof-repair-newark-nj",
      active: true,
    },
    // Future locations
    // {
    //   name: "East Orange NJ",
    //   href: "/roof-removal-east-orange-nj",
    //   active: false,
    // },
    // {
    //   name: "Bloomfield NJ",
    //   href: "/roof-removal-bloomfield-nj",
    //   active: false,
    // },
  ];

  return (
    <section className="border-y border-stone-200 bg-stone-100 text-stone-900 py-5 px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-4">
          <span className="h-px w-8 bg-secondary" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary">
            Serving Essex County Communities
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {locations.map((location) => (
            <Link
              key={location.name}
              href={location.href}
              className="border border-secondary bg-secondary px-5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-background transition-all duration-300 hover:opacity-90"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}