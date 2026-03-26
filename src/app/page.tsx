import Image from "next/image";
import sliderImage from "../../public/assets/home-slider-1.d79601a8.png"
import Myslider from "@/components/Slider/Slider";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";

export default function Home() {
  return <>
  {/* Slider */}
  <div className="relative">
<Myslider />
  </div>
  <FeaturesSection/>
  </>
}
