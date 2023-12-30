import dynamic from "next/dynamic";

import RegisterForm from "@/components/pages-menu/register";

export const metadata = {
  title: 'Register || Droneairgear - The platfrom for all your drone needs',
  description:
    'Droneairgear - The platfrom for all your drone needs',
  
}



const index = () => {
  return (
    <>
      
      <RegisterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
