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
import { useTranslations } from "next-intl";

export default function CarouselBanner() {
  const t = useTranslations("homepage");

  const images = [
    {
      s: t("homepage_image_pura_s"),
      m: t("homepage_image_pura_m"),
    },

    {
      s: t("homepage_image_satus_s102_s"),
      m: t("homepage_image_satus_s102_m"),
    },

    {
      s: t("homepage_image_satus_15_s"),
      m: t("homepage_image_satus_15_m"),
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
