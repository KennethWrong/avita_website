import CarouselBanner from "@/components/homepage/CarouselBanner";
import HomePromo from "@/components/homepage/HomePromo";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center w-screen">
      <CarouselBanner />
      <HomePromo />
    </main>
  );
}
