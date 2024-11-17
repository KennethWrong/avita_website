import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselBanner() {
  const images = [
    // "/images/home/avita_global_cloud_SIM_Pocket_WiFi_mo.jpg",
    "/images/home/avita_global_cloud_SIM_Pocket_WiFi_pc.jpg",

    // "/images/home/banner_1_en_mo.jpg",
    "/images/home/banner_1_en_pc.jpg",

    // "/images/home/blockchainpc_solution_mo_en.png",
    "/images/home/blockchainpc_solution_pc_en.png",

    // "/images/home/AVITA_pura-a-plus-mo_en.jpg",
    "/images/home/AVITA_pura-a-plus-pc_en.jpg",

    // "/images/home/AVITA_satus_s102_bigcore_banner_en_mo.jpg",
    "/images/home/AVITA_satus_s102_bigcore_banner_en.jpg",

    // "/images/home/AVITA_satus_15_win_11_banner_en_mo.jpg",
    "/images/home/AVITA_satus_15_win_11_banner_en.jpg",
  ];

  return (
    <main className="flex flex-row justify-center w-screen">
      <Carousel className="w-[90%]">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img src={image} alt="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
