import dynamic from "next/dynamic";
import MyResume from "@/components/dashboard-pages/candidates-dashboard/my-resume";

export const metadata = {
  title: "My Resume || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <MyResume />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
