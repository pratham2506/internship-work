import dynamic from "next/dynamic";

import CandidatesList from "@/components/candidates-listing-pages/candidates-list-v3";

export const metadata = {
  title: 'Candidates List V3 || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}


const index = () => {
  return (
    <>
      
      <CandidatesList />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
