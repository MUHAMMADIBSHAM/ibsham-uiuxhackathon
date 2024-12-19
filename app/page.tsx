
import Categories from "./components/Categories";
import CompanykeLogo from "./components/companykeLogo";
import Feature from "./components/feature";
import Header from "./components/Header";
import HotProduct from "./components/hotProducts";
import OurProduct from "./components/ourProduct";

export default function Home() {
  return (
    <>
      <Header />
      <CompanykeLogo />
      <Feature/>
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
