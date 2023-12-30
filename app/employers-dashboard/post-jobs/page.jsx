import dynamic from "next/dynamic";
import PostJob from "@/components/dashboard-pages/employers-dashboard/post-jobs";

export const metadata = {
  title: "Post Jobs || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <PostJob />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
