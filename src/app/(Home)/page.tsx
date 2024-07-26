import Image from "next/image";
import Landing from "./components/Landing";
import BrandList from "./components/BrandList";
import WhatWeDo from "./components/WhatWeDo";
import AboutUs from "./components/AboutUs";
import OurWorks from "./components/OurWorks";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <div className="home-page">
      <Landing className="w-10/12 mx-auto md:min-h-[calc(100vh-140px)]" />
      <BrandList className="mt-20 md:mt-0 w-10/12 mx-auto" />
      <WhatWeDo className="w-10/12 mx-auto mt-20 md:mt-[120px]" />
      <AboutUs className="w-10/12 mx-auto mt-[133px]" />
      <OurWorks className="w-10/12 mx-auto mt-[133px]" />
      <Testimonials className="w-10/12 mx-auto mt-[133px]" />
      <CallToAction className="w-10/12 mx-auto mt-[133px]"/>
    </div>
  );
}
