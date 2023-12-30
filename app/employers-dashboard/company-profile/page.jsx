import dynamic from "next/dynamic";
import CompanyProfile from "@/components/dashboard-pages/employers-dashboard/company-profile";

export const metadata = {
  title: "Company Profile || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <CompanyProfile />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
