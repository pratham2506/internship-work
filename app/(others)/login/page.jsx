import dynamic from "next/dynamic";

import LogIn from "@/components/pages-menu/login";

export const metadata = {
  title: 'Login || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}



const index = () => {
  return (
    <>
      
      <LogIn />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
