import dynamic from "next/dynamic";
import Packages from "@/components/dashboard-pages/candidates-dashboard/packages";

export const metadata = {
  title: "Packages || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <Packages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
