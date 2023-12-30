import dynamic from "next/dynamic";
import ResumeAlerts from "@/components/dashboard-pages/employers-dashboard/resume-alerts";

export const metadata = {
  title: "Resume Alerts || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <ResumeAlerts />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
