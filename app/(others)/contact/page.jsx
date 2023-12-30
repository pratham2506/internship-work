import dynamic from "next/dynamic";

import Contact from "@/components/pages-menu/contact";

export const metadata = {
  title: 'Contact || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}



const index = () => {
  return (
    <>
      
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
