"use client";

// Autoplay can only be used on the client
import Autoplay from "embla-carousel-autoplay";
import { useTranslations } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselBanner() {
  const t = useTranslations("homepage.carousel");

  const images = [
    {
      s: t("banner1_mo"),
      m: t("banner1_pc"),
    },

    {
      s: t("banner2_mo"),
      m: t("banner2_pc"),
    },

    {
      s: t("banner3_mo"),
      m: t("banner3_pc"),
    },

    {
      s: t("banner4_mo"),
      m: t("banner4_pc"),
    },

    {
      s: t("banner5_mo"),
      m: t("banner5_pc"),
    },

    {
      s: t("banner6_mo"),
      m: t("banner6_pc"),
    },
  ];

  // TODO: If necessary add anchor links

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
                className="hidden md:block w-full"
              />
              <img
                src={image.s}
                alt="Banner images"
                className="block md:hidden w-full"
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
