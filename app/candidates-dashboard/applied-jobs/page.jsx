import dynamic from "next/dynamic";
import AppliedJobs from "@/components/dashboard-pages/candidates-dashboard/applied-jobs";

export const metadata = {
  title: "Applied Jobs || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <AppliedJobs />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
