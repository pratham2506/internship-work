import dynamic from "next/dynamic";
import JobList from "@/components/job-listing-pages/job-list-v11";

export const metadata = {
  title: "Job List V11 || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <JobList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
