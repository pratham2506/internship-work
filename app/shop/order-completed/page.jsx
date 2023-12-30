import dynamic from "next/dynamic";
import OrderCompleted from "@/components/shop/order-completed";

export const metadata = {
  title: "Order Completed || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const index = () => {
  return (
    <>
      <OrderCompleted />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
