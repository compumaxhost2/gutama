export type ServiceSubLink = {
  label: string;
  href: string;
  shortDesc?: string;
};

export type ServiceCategoryGroup = {
  category: string;
  mainHref?: string;
  items: ServiceSubLink[];
};

export const SERVICE_CATEGORIES: ServiceCategoryGroup[] = [
  {
    category: "Roofing",
    items: [
      { label: "Roofing Overview", href: "/services/roofing", shortDesc: "Complete roofing solutions" },
      { label: "Roof Removal", href: "/services/roof-removal", shortDesc: "Tear-off & deck prep" },
      { label: "Re-Roofing", href: "/services/re-roofing", shortDesc: "Full roof replacement" },
      { label: "Flat Roof", href: "/services/flat-roof", shortDesc: "TPO, EPDM & bitumen" },
      { label: "Slate Roof", href: "/services/slate-roof", shortDesc: "Historic slate restoration" },
    ],
  },
  {
    category: "Siding",
    items: [
      { label: "Siding Installation & Repair", href: "/services/siding", shortDesc: "Vinyl & fiber cement siding" },
    ],
  },
  {
    category: "Chimney & Gutters",
    items: [
      { label: "Chimney Repair", href: "/services/chimney", shortDesc: "Flashing, repointing & rebuilds" },
      { label: "Gutter Installation", href: "/services/gutters", shortDesc: "Seamless gutters & guards" },
    ],
  },
  {
    category: "Exterior Carpentry",
    items: [
      { label: "Exterior Carpentry", href: "/services/carpentry", shortDesc: "Fascia, soffit & trim woodwork" },
    ],
  },
  {
    category: "Dormers & Home Additions",
    items: [
      { label: "Dormers", href: "/services/dormers", shortDesc: "Attic space & dormer framing" },
      { label: "Home Additions", href: "/services/additions", shortDesc: "Room expansions & buildouts" },
    ],
  },
  {
    category: "Emergency Repairs",
    items: [
      { label: "Emergency Roof Repair", href: "/services/emergency-repair", shortDesc: "Same-day leak & storm tarping" },
    ],
  },
];
