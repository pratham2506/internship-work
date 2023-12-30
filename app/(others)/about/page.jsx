import dynamic from "next/dynamic";

import About from "@/components/pages-menu/about";

export const metadata = {
  title: 'About || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}



const index = () => {
  return (
    <>
      
      <About />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
