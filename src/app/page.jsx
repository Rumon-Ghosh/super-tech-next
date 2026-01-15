import Banner from "@/components/Home/Banner";
import Categories from "@/components/Home/Categories";
import CTA from "@/components/Home/CTA";
import Featured from "@/components/Home/Featured";
import HowItWorks from "@/components/Home/HowItWorks";
import PopularItems from "@/components/Home/PopularItems";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
      <Categories></Categories>
      <PopularItems></PopularItems>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </div>
  );
}
