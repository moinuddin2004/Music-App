import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import ALLcourses from "../components/ALLCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import SlideingCard from "@/components/SlideingCard";
import Webinar from "@/components/Webinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* <h1 className=" bg-black text-white">hi moin </h1> */}
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <ALLcourses />
        <WhyChooseUs />
        <SlideingCard />
        <Webinar />
        <Instructor />
        <Footer/>
      </main>
    </>
  );
}
