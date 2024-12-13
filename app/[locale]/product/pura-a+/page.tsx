import ProductBanner from "@/components/ProductBanner";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PuraAPlusPage() {
  const t = useTranslations("pura-a-plus");

  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura-a-plus/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura-a-plus/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />

      {/* Section 1 -- intro */}
      <section className="bg-white flex justify-center items-center text-gray-500">
        <div className="flex flex-col justify-center items-center max-w-3xl p-16">
          <h1 className="text-3xl text-center mb-8">{t("intro.title")}</h1>

          <div className="mb-8">
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_1_hk.png"
              alt="PURA_A_plus_product_1_hk"
              className="mb-2"
            />

            <small>{t("intro.demo_text")}</small>
          </div>

          <div className="leading-8">
            <p className="text-center mb-8">{t("intro.content_part1")}</p>
            <p className="text-center">{t("intro.content_part2")}</p>
          </div>
        </div>
      </section>

      {/* Section 2 -- color and creativity */}
      <section className="flex justify-center items-center bg-[#EEEEEE]">
        <div className="flex h-full w-2/3 py-24 text-gray-700">
          <div className="hidden md:flex md:basis-1/2  justify-center items-center mr-10 ">
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_2_hk_mo.png"
              alt="PURA_A_plus_product_2_hk_pc"
            />
          </div>
          <div className="flex flex-col justify-center md:basis-1/2 ">
            <h2 className="text-3xl mb-14">
              {t("color_and_creativity.title")}
            </h2>

            <img
              src="/images/pura-a-plus/PURA_A_plus_product_2_hk_mo.png"
              alt="PURA_A_plus_product_2_hk_pc"
              className="sm:block md:hidden mb-10"
            />

            <p className="leading-8 mb-5">
              {t("color_and_creativity.content")}
            </p>

            <p className="">
              <small>{t("color_and_creativity.demo_text")}</small>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 -- color palette */}
      <section className="bg-white text-gray-500 flex justify-center items-center py-20 px-5">
        <div className="h-full w-3/4 flex flex-col justify-center items-center">
          <p className="leading-8 mb-10 md:w-1/2 text-center">
            {t("color_palette.content")}
          </p>

          <div>
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_3.png"
              alt="PURA_A_plus_product_3"
            />
          </div>
        </div>
      </section>

      {/* Section 4 -- academic goals */}
      <section className="bg-[#EEEEEE] flex justify-center items-center p-10">
        <div className="flex h-full text-gray-700">
          <div className="md:basis-1/2 py-10 flex justify-end items-center">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_1_mo.jpg"
              alt="PURA_A_plus_feature_1_mo"
              className="h-full object-contain hidden md:block"
            />
          </div>
          <div className="md:basis-1/2 flex sm:justify-center md:justify-start md:pl-10">
            <div className="h-full sm:w-[90%] md:w-3/5 flex flex-col justify-center items-start py-10">
              <h2 className="text-3xl mb-14">{t("academic_goals.title")}</h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_1_mo.jpg"
                alt="PURA_A_plus_feature_1_mo"
                className="md:hidden mb-10"
              />

              <p className="leading-8 mb-5">{t("academic_goals.content")}</p>

              <div className="text-purple-900">
                <p>Up to</p>
                <p className="text-4xl">Intel i5-1235U</p>
                <p>
                  12<sup>th</sup> Gen INTEL®CORE™ PROCESSOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 -- windows 11 */}
      <section className="text-gray-500">
        <div className="flex py-20 ">
          <div className="p-10 md:p-0 md:basis-1/2 flex justify-end items-center ">
            <div className="md:w-3/5">
              <h2 className="text-3xl mb-14">{t("windows_11.title")}</h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_4_mo.jpg"
                alt="PURA_A_plus_feature_4"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="">{t("windows_11.content_part1")}</p>
                <p className="">{t("windows_11.content_part2")}</p>

                <Link href="/product/pura-a+/spec" className="text-blue-500">
                  Tech Spec &gt;
                </Link>
              </div>

              <div className="text-purple-900">
                <p>Operating System</p>
                <p className="text-4xl">Windows 11 Home</p>
                <Link
                  href="https://support.microsoft.com/en-us/windows/windows-10-and-windows-11-in-s-mode-faq-851057d6-1ee9-b9e5-c30b-93baebeebc85#WindowsVersion=Windows_11"
                  target="_blank"
                  className="text-blue-500"
                >
                  Know more &gt;
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center p-20">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_4_mo.jpg"
              alt="PURA_A_plus_feature_4"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Section 6 -- storage spec */}
      <section className="bg-[#EEEEEE] flex justify-center items-center p-10">
        <div className="flex h-full text-gray-700">
          <div className="md:basis-1/2 py-10 flex justify-end items-center">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_2_mo.jpg"
              alt="PURA_A_plus_feature_1_mo"
              className="w-full object-contain hidden md:block"
            />
          </div>
          <div className="md:basis-1/2 flex sm:justify-center md:justify-start md:pl-10">
            <div className="h-full sm:w-[90%] md:w-3/5 flex flex-col justify-center items-start py-10">
              <h2 className="text-3xl mb-14">{t("storage_spec.title")}</h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_2_mo.jpg"
                alt="PURA_A_plus_feature_1_mo"
                className="md:hidden mb-10"
              />

              <div className="leading-8 mb-5">
                <p>{t("storage_spec.content_part1")}</p>
                <p>{t("storage_spec.content_part2")}</p>
              </div>

              <div className="text-purple-900 w-full flex sm:flex-col md:flex-row">
                <div className="basis-1/2 mb-8 md:mb-0">
                  <p className="">Up to</p>
                  <p className="text-4xl">
                    512<span className="text-sm">GB</span>
                  </p>
                  <p className="">SSD</p>
                </div>

                <div className="basis-1/2">
                  <p className="">Up to</p>
                  <p className="text-4xl">
                    8<span className="text-sm">GB</span>
                  </p>
                  <p className="">RAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 -- ports */}
      <section className="bg-white text-gray-500 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center py-24 md:w-1/3 px-10 md:px-0">
          <h3 className="text-3xl text-center mb-8">{t("ports.title")}</h3>

          <div className="mb-8">
            <img
              src="/images/pura-a-plus/PURA_A_plus_io_ports.png"
              alt="PURA_A_plus_io_ports"
            />
          </div>

          <div className="leading-8 text-center">
            <p>{t("ports.content_part1")}</p>
            <p>{t("ports.content_part2")}</p>
          </div>
        </div>
      </section>

      {/* Section 8 -- high grades */}
      <section className="text-gray-700 bg-[#EEEEEE]">
        <div className="flex">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">{t("high_grades.title")}</h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_3_mo.jpg"
                alt="PURA_A_plus_feature_3"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="">{t("high_grades.content")}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_3_mo.jpg"
              alt="PURA_A_plus_feature_3"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 9 -- disclaimer */}
      <section className="text-gray-700 bg-[#EEEEEE] flex justify-center items-center">
        <div className="flex justify-center items-center px-10 md:w-2/3 py-10 md:py-24">
          <ul className="list-disc leading-6 text-xs">
            <li>{t("disclaimer.bullet1")}</li>
            <li>{t("disclaimer.bullet2")}</li>
            <li>{t("disclaimer.bullet3")}</li>
            <li>{t("disclaimer.bullet4")}</li>
            <li>{t("disclaimer.bullet5")}</li>
            <li>{t("disclaimer.bullet6")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
