import Image from "next/image";
import CarouselSlider from "./components/CarouselSlider";
import Overview from "./components/Overview";
import Repair from "./components/Repair";
import Install from "./components/Install";


export default function Home() {
  return (
    <>
      <CarouselSlider />
      <main className="max-w-screen-xl mx-auto px-5">
        <Overview />
        <Install />
        <Repair />
      </main>
    </>
  );
}
