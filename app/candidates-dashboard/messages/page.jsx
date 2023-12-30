import dynamic from "next/dynamic";
import Messages from "@/components/dashboard-pages/candidates-dashboard/messages";

export const metadata = {
  title: "Messages || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <Messages />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
