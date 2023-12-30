import dynamic from "next/dynamic";
import CvManager from "@/components/dashboard-pages/candidates-dashboard/cv-manager";

export const metadata = {
  title: "CV Manager || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <CvManager />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
