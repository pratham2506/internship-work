import ShopDetails from "@/components/shop/shop-single/ShopDetails";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Shop-details || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

const ShopSingleDyanmic = ({ params }) => {
  return (
    <>
      <ShopDetails id={params.id} />
    </>
  );
};

export default dynamic(() => Promise.resolve(ShopSingleDyanmic), {
  ssr: false,
});
