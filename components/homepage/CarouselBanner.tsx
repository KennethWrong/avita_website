"use client";

// Autoplay can only be used on the client
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselBanner() {
  const images = [
    {
      s: "/images/home/avita_global_cloud_SIM_Pocket_WiFi_mo.jpg",
      m: "/images/home/avita_global_cloud_SIM_Pocket_WiFi_pc.jpg",
    },

    {
      s: "/images/home/banner_1_en_mo.jpg",
      m: "/images/home/banner_1_en_pc.jpg",
    },

    {
      s: "/images/home/blockchainpc_solution_mo_en.png",
      m: "/images/home/blockchainpc_solution_pc_en.png",
    },

    {
      s: "/images/home/AVITA_pura-a-plus-mo_en.jpg",
      m: "/images/home/AVITA_pura-a-plus-pc_en.jpg",
    },

    {
      s: "/images/home/AVITA_satus_s102_bigcore_banner_en_mo.jpg",
      m: "/images/home/AVITA_satus_s102_bigcore_banner_en.jpg",
    },

    {
      s: "/images/home/AVITA_satus_15_win_11_banner_en_mo.jpg",
      m: "/images/home/AVITA_satus_15_win_11_banner_en.jpg",
    },
  ];

  return (
    <main className="flex flex-row justify-center w-screen">
      <Carousel
        className="w-[90%]"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.m}
                alt="Banner images"
                className="hidden md:block"
              />
              <img
                src={image.s}
                alt="Banner images"
                className="block md:hidden"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
