import dynamic from "next/dynamic";

import Faq from "@/components/pages-menu/faq";

export const metadata = {
  title: 'Faq || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}



const index = () => {
  return (
    <>
      
      <Faq />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
