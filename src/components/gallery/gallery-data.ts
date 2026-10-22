export type GalleryCategory = "All" | "Roofing" | "Siding" | "Additions" | "Chimney";

export interface GalleryProject {
  title: string;
  category: Exclude<GalleryCategory, "All">;
  desc: string;
  image: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "Roofing",
  "Siding",
  "Additions",
  "Chimney",
];

export const GALLERY_PROJECTS: GalleryProject[] = [
  {
    title: "Roofing in Essex County, NJ",
    category: "Roofing",
    desc: "Architectural shingle installation in West Orange",
    image: "/images/gutama new images/roofing.jpg",
  },
  {
    title: "Complete Roof Replacement",
    category: "Roofing",
    desc: "Architectural shingle installation in West Orange",
    image: "/images/gutama new images/roof replacement.jpg",
  },
  {
    title: "Storm Damage Repair",
    category: "Roofing",
    desc: "Emergency roof repair after severe weather in Newark",
    image: "/images/gutama new images/Emergency_roofing.jpg",
  },
  {
    title: "Tear-Off & Sub-Roof Preparation",
    category: "Roofing",
    desc: "Clean removal down to decking with synthetic underlayment",
    image: "/images/gutama new images/tear off.jpg",
  },
  {
    title: "Slate Roof Restoration",
    category: "Roofing",
    desc: "Historic slate roof repair and precision laying in South Orange",
    image: "/images/gutama new images/slate roofing.jpg",
  },
  {
    title: "James Hardie & Exterior Siding",
    category: "Siding",
    desc: "Full siding replacement and exterior wrap in Maplewood",
    image: "/images/gutama new images/siding.jpg",
  },
  {
    title: "Full Exterior Framing & Siding Upgrade",
    category: "Siding",
    desc: "Comprehensive exterior insulation, wrapping, and siding trim",
    image: "/images/gutama new images/exterior.jpg",
  },
  {
    title: "Seamless Gutter Installation",
    category: "Roofing",
    desc: "Heavy-duty aluminum gutter and downspout system",
    image: "/images/gutama new images/gutter.jpg",
  },
  {
    title: "Two-Story Addition & Framing",
    category: "Additions",
    desc: "Master suite and structural framing in Livingston",
    image: "/images/gutama new images/home additions.jpg",
  },
  {
    title: "Dormer Construction & Roof Extension",
    category: "Additions",
    desc: "Custom dormer framing for expanded second-floor living space",
    image: "/images/gutama new images/dormer.jpg",
  },
  {
    title: "Chimney Rebuild & Masonry",
    category: "Chimney",
    desc: "Complete chimney rebuild from roofline in Nutley",
    image: "/images/gutama new images/chimney.jpg",
  },
  {
    title: "Precision Roof Construction",
    category: "Roofing",
    desc: "Synthetic felt buster and shingle underlayment in Essex County",
    image: "/images/gutama new images/hero 4k.jpg",
  },
];

