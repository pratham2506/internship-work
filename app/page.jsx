import Wrapper from "@/layout/Wrapper";
import Home from "@/components/home-1";

export const metadata = {
  title: "Home-1 || Droneairgear - The platfrom for all your drone needs",
  description: "Droneairgear - The platfrom for all your drone needs",
};

export default function page() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}
