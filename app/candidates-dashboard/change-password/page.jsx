import dynamic from "next/dynamic";
import ChangePassword from "@/components/dashboard-pages/candidates-dashboard/change-password";

export const metadata = {
  title: "Change Password || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <ChangePassword />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
