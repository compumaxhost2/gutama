import { BlogDetails } from "@/components/blog/blog-details";
import { localVsNationalRoofingCompanies } from "@/components/blog/pages-data/local-vs-national-roofing-companies";

export default function LocalVsNationalRoofingCompaniesPage() {
    return <BlogDetails {...localVsNationalRoofingCompanies} />;
}

