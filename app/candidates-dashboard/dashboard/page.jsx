import dynamic from "next/dynamic";
import DashboadHome from "@/components/dashboard-pages/candidates-dashboard/dashboard";

export const metadata = {
  title: "Candidates Dashboard || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <DashboadHome />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
