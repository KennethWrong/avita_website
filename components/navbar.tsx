import * as React from "react";
import Image from "next/image";
import { NavbarDropdown } from "./navbar-dropdown";
import Link from "next/link";
import { LanguageToggler } from "./languageToggler";
import { useTranslations } from "next-intl";
import { NavBarAccordian } from "./navbar-accordian";

export const NavBar = () => {
  const t = useTranslations("navbar");

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-col md:flex-row">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/avita_logo.png"
            className="h-8"
            width={150}
            height={20}
            alt="avita Logo"
          />
        </Link>
        <NavBarAccordian />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavbarDropdown></NavbarDropdown>
            </li>
            <li>
              <Link
                href="/news/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("navbar_whats_new")}
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {t("navbar_service")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
