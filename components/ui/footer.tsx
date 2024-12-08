import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-100 text-gray-800 py-8 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-col">
        <div className="flex flex-col w-full">
          {/* Top section with logo and social icons */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold text-purple-700">AVITA</div>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                {/* Placeholder for Facebook icon */}
                <Link href="https://www.facebook.com/AVITAHongKong/">
                  <FaFacebook></FaFacebook>
                </Link>
              </div>
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                {/* Placeholder for Instagram icon */}
                <Link href="https://www.instagram.com/avitahongkong/">
                  <FaInstagram></FaInstagram>
                </Link>
              </div>
            </div>
          </div>

          {/* Links and language/copyright section */}
          <div className="flex justify-between items-start text-sm">
            <div className="flex lg:flex-row flex-row space-x-12">
              <div className="flex flex-col space-y-2">
                <Link href={`/product/liber-v`} className="hover:underline">
                  <p>{t("footer_products")}</p>
                </Link>
                <Link href={`/news`} className="hover:underline">
                  <p>{t("footer_whats_new")}</p>
                </Link>
                <Link href={`/aboutus`} className="hover:underline">
                  <p>{t("footer_about_us")}</p>
                </Link>
                <Link href={`/contact_us`} className="hover:underline">
                  <p>{t("footer_contact")}</p>
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href={`/support`} className="hover:underline">
                  <p>{t("footer_support")}</p>
                </Link>
                <Link href={`/repair_tnc`} className="hover:underline">
                  <p>{t("footer_repair")}</p>
                </Link>
                <Link href={`/tnc`} className="hover:underline">
                  <p>{t("footer_term_of_use")}</p>
                </Link>
                <Link href={`/tnc`} className="hover:underline">
                  <p>{t("footer_privacy_policy")}</p>
                </Link>
              </div>
            </div>
          </div>
          {/* Language and copyright section aligned to the right */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right mt-6 sm:mt-0">
            <div className="flex items-center mb-2 gap-x-2">
              <FaGlobe className=" ml-4"></FaGlobe>
              <Link href={`/entry`} className="hover:underline">
                {t("footer_country")}
              </Link>
            </div>
            <p className="text-xs text-gray-600">
              {t("footer_rights_reserved")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
