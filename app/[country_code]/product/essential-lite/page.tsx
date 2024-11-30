import ProductBanner from "@/components/ProductBanner";
import { useTranslations } from "next-intl";

export default function EssentialLitePage() {
  const t = useTranslations("essential-lite");

  return (
    <main>
      <ProductBanner
        desktopImage={"/images/essential-lite/AVITA_essential_lite_en.jpg"}
        mobileImage={"/images/essential-lite/AVITA_essential_lite_en_mo.jpg"}
        altText={"AVITA_essential_lite_en"}
      />

      {/* Section 1 -- intro */}
      <section className="bg-[#EEE] text-gray-700 w-full">
        <div className="w-full flex flex-col justify-center items-center py-20 md:py-32">
          <h1 className="text-center text-3xl">
            {t.rich("intro.title", {
              br: () => <br />,
            })}
          </h1>
          {/* <div className="w-full flex justify-center mt-20"> */}
          {/*   <a href="/" target="_blank" className="mr-10 hover:underline"> */}
          {/*     Buy now &gt; */}
          {/*   </a> */}
          {/*   <a */}
          {/*     href="/hk/product/essential-lite/where_to_buy" */}
          {/*     className="hover:underline" */}
          {/*   > */}
          {/*     Where to buy &gt; */}
          {/*   </a> */}
          {/* </div> */}
        </div>
      </section>

      {/* Section 2 -- art form */}
      <section className="text-gray-700 bg-white">
        <div className="flex">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">{t("art_form.title")}</h2>

              <img
                src="/images/essential-lite/essential-lite14_bg1_mo.jpg"
                alt="essential-lite14_bg1"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="mb-10">{t("art_form.content_part1")}</p>

                <p>{t.rich("art_form.content_part2", { br: () => <br /> })}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg1_mo_cropped.jpg"
              alt="essential-lite14_bg1"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 3 -- light weight */}
      <section className="text-gray-800 bg-white">
        <div
          className="flex bg-white md:bg-[url('/images/essential-lite/essential-lite14_bg2.jpg')]
            bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">
                {t.rich("light_weight.title", { br: () => <br /> })}
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Essential-lite_ic_boundless.png"
                  alt="Essential-lite_ic_boundless"
                />
                <img
                  src="/images/essential-lite/Essential-lite_ic_screen.png"
                  alt="Essential-lite_ic_screen"
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg2_mo.jpg"
                alt="essential-lite14_bg2"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>{t("light_weight.content")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 -- anti glare */}
      <section className="text-gray-700 bg-white">
        <div
          className="flex bg-white md:bg-[url('/images/essential-lite/essential-lite14_bg3.jpg')]
        bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-2/3 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">
                {t.rich("anti_glare.title", { br: () => <br /> })}
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Essential-lite_ic_HD.png"
                  alt="Essential-lite_ic_HD"
                  className=""
                />

                <img
                  src="/images/essential-lite/Essential-lite_ic_angle.png"
                  alt="Essential-lite_ic_angle"
                  className=""
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg3_mo.jpg"
                alt="essential-lite14_bg3"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>{t("anti_glare.content")}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
        </div>
      </section>

      {/* Section 5 -- windows 11 */}
      <section className="text-gray-800 bg-white">
        <div
          className="flex bg-[#EEE] md:bg-[url('/images/essential-lite/essential-lite14_bg4.jpg')]
            bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">
                {t.rich("windows_11.title", { br: () => <br /> })}
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Intel_Celeron_Logo.png"
                  alt="Essential-lite_ic_boundless"
                  className="w-[100px]"
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg4_mo.jpg"
                alt="essential-lite14_bg4"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="mb-8">{t("windows_11.content_part1")}</p>
                <p>{t("windows_11.content_part2")}</p>
                <a
                  href="https://avita.com/hk/product/essential-lite/spec"
                  className="text-blue-500 hover:underline"
                >
                  Tech Spec &gt;
                </a>
              </div>

              <div className="text-purple-900">
                <div className="mb-8">
                  <p>Operating System</p>
                  <p className="text-4xl">Windows 11 Home</p>
                  <a
                    href="https://support.microsoft.com/en/help/4020089/windows-10-in-s-mode-faq"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Know more &gt;
                  </a>
                </div>
                <div className="mb-8">
                  <p>Up to</p>
                  <p className="text-4xl">N4020</p>
                  <p>INTEL® Celeron® PROCESSOR</p>
                </div>

                <div className="flex">
                  <div className="basis-1/2">
                    <p>Up to</p>
                    <p className="text-4xl">
                      256<span className="pl-1 text-sm">GB</span>
                    </p>
                    <p>SSD</p>
                  </div>
                  <div className="basis-1/2">
                    <p>Up to</p>
                    <p className="text-4xl">
                      8<span className="pl-1 text-sm">GB</span>
                    </p>
                    <p>RAM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 -- ports */}
      <section className="text-gray-700 bg-white md:bg-[#F9F3E7]">
        <div className="flex">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">{t("ports.title")}</h2>

              <img
                src="/images/essential-lite/essential-lite14_bg5_mo.jpg"
                alt="essential-lite14_bg5"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>{t("ports.content")}</p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg5_mo_cropped.jpg"
              alt="essential-lite14_bg5"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 7 -- keyboard */}
      <section className="text-gray-700 bg-white">
        <div className="flex">
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg6_mo.jpg"
              alt="essential-lite14_bg6"
              className="w-full"
            />
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">{t("keyboard.title")}</h2>

              <img
                src="/images/essential-lite/essential-lite14_bg6_mo.jpg"
                alt="essential-lite14_bg6"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>{t("keyboard.content")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 -- disclaimer */}
      <section className="text-gray-700 bg-[#EEEEEE] flex justify-center items-center">
        <div className="flex justify-center items-center px-10 md:w-2/3 py-10 md:py-24">
          <ul className="list-disc leading-6 text-xs">
            <li>{t("disclaimer.bullet1")}</li>
            <li>{t("disclaimer.bullet2")}</li>
            <li>{t("disclaimer.bullet3")}</li>
            <li>{t("disclaimer.bullet4")}</li>
            <li>{t("disclaimer.bullet5")}</li>
            <li>{t("disclaimer.bullet6")}</li>
            <li>{t("disclaimer.bullet7")}</li>
            <li>{t("disclaimer.bullet8")}</li>
            <li>{t("disclaimer.bullet9")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
