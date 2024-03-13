import Image from "next/image";
import CarouselSlider from "./components/CarouselSlider";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <>
      <CarouselSlider />
      <main className="max-w-screen-xl mx-auto px-5">
        {/* <Overview /> */}
      </main>
    </>
  );
}
