import dynamic from "next/dynamic";
import EmployersList from "@/components/employers-listing-pages/employers-list-v1";

export const metadata = {
  title: "University List || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <EmployersList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
