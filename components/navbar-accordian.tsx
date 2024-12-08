import * as React from "react";
import Image from "next/image";
import { NavbarDropdown } from "./navbar-dropdown";
import Link from "next/link";
import { LanguageToggler } from "./languageToggler";
import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NavbarAccordionProductItem = (
  ref: string,
  name: string,
  border: boolean = true
) => {
  return (
    <div
      className={`w-full py-2 font-bold pl-4 ${
        border ? "border-b-2" : ""
      } border-gray-100`}
    >
      <Link href={ref}>{name}</Link>
    </div>
  );
};

export const NavBarAccordian = () => {
  const t = useTranslations("navbar");

  return (
    <div className="md:hidden w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger> {t("navbar_products")}</AccordionTrigger>
          <AccordionContent>
            {NavbarAccordionProductItem("/product/admiror", "AVITA ADMIROR")}
            {NavbarAccordionProductItem("/product/liber-v", "AVITA LIBER")}
            {NavbarAccordionProductItem("/product/pura-a+", "AVITA PURA")}
            {NavbarAccordionProductItem(
              "/product/essential-lite",
              "AVITA ESSENTIAL"
            )}
            {NavbarAccordionProductItem(
              "/product/satus-t101",
              "AVITA SATUS T101"
            )}
            {NavbarAccordionProductItem("/product/satus-s", "AVITA SATUS S101")}
            {NavbarAccordionProductItem("/product/satus-s", "AVITA SATUS S102")}
            {NavbarAccordionProductItem(
              "/product/satus-s102-intelcore",
              "AVITA SATUS S102-Intel Core",
              false
            )}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <Link
            href="/news/"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            {t("navbar_whats_new")}
          </Link>
        </AccordionItem>
        <AccordionItem value="item-3">
          <Link
            href="/support"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            {t("navbar_service")}
          </Link>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
