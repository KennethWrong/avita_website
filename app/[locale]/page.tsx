import CarouselBanner from "@/components/homepage/CarouselBanner";
import HomePromo from "@/components/homepage/HomePromo";
import HomeSignUp from "@/components/homepage/HomeSignUp";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CarouselBanner />
      <HomePromo />
    </main>
  );
}
