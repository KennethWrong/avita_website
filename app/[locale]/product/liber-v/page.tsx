import ProductBanner from "@/components/ProductBanner";
import { useTranslations } from "next-intl";

export default function LiberPage() {
  const t = useTranslations("liber-v");

  return (
    <main>
      <ProductBanner
        desktopImage={t("banner.pc")}
        mobileImage={t("banner.mo")}
        altText={"Liber Banner"}
      />

      {/* Section 1 -- inspired design */}
      <section className="text-gray-700">
        <div className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg.jpg')] bg-center bg-no-repeat">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl text-center md:text-left mb-14">
                {t("inspired_design.title")}
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center md:text-left">
                  {t("inspired_design.content")}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src={t("inspired_design.color_opts_img")}
              alt="LiberV_14colors"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <ProductBanner
        desktopImage={t("limitless_vision_banner.pc")}
        mobileImage={t("limitless_vision_banner.mo")}
        altText={"Liber Banner"}
      />

      {/* Section 3 -- viewing experience */}
      <section className="text-gray-700">
        <div className="flex bg-[url('/images/liber-v/product-liber-v-view-bg.jpg')] bg-center bg-no-repeat">
          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-center">
            <div className="">
              <img
                src={t("viewing_experience.features_img")}
                alt="Features"
                className="w-full "
              />
              <img
                src="/images/liber-v/p03.png"
                alt="liber-v laptop 03"
                className="w-full"
              />
            </div>
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl text-center mb-14">
                {t("viewing_experience.title")}
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center">
                  {t.rich("viewing_experience.content", {
                    br: () => <br />,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 -- colorful expression */}
      <section className="text-gray-700">
        <div
          className="bg-[url('/images/liber-v/AVITA_liber_v_color.jpg')]
          bg-center bg-no-repeat py-24 flex flex-col justify-center items-center"
        >
          <div className="flex md:max-w-7xl md:mb-16">
            <div className="basis-1/3 hidden md:block">
              <img src="/images/liber-v/p04.png" alt="liber-v laptop 04" />
            </div>
            <div className="md:basis-2/3 flex flex-col justify-center items-center p-10">
              <h2 className="text-3xl text-center md:text-left mb-14">
                {t("colorful_expression.title")}
              </h2>

              <div className="leading-8 text-center">
                <p className="mb-5">{t("colorful_expression.content_part1")}</p>

                <p>{t("colorful_expression.content_part2")}</p>
              </div>
            </div>
            <div className="basis-1/3 hidden md:block">
              <img src="/images/liber-v/p05.png" alt="liber-v laptop 05" />
            </div>
          </div>
          <div className="hidden md:block md:max-w-7xl">
            <img
              src="/images/liber-v/AVITA_liber_v_all.png"
              alt="AVITA_liber_v_all"
            />
          </div>
        </div>
      </section>

      {/* Section 5 -- portable */}
      <section className="text-gray-700 bg-red-50">
        <div
          className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg2.png')]
          bg-center bg-no-repeat bg-cover md:p-20"
        >
          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-end">
            <div className="">
              <img
                src="/images/liber-v/AVITA_liber_v_screen.jpg"
                alt="liber-v laptop 03"
                className="w-full"
              />
            </div>
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex flex-col justify-center items-start">
            <div className="md:w-3/5 md:ml-16">
              <div className="block md:hidden mb-10">
                <img
                  src="/images/liber-v/AVITA_liber_v_screen.jpg"
                  alt="liber-v laptop 03"
                  className="w-full"
                />
              </div>
              <h2 className="text-3xl text-center mb-14">
                {t("portable.title")}
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center">
                  {t.rich("portable.content", { br: () => <br /> })}
                </p>
              </div>
            </div>

            <div className="md:ml-16">
              <div className="flex flex-row">
                <div className="mr-36">
                  <p>
                    <span className="text-4xl mr-1">15.9</span>
                    {t("portable.thickness_unit")}
                  </p>
                  <p>{t("portable.thickness_desc")}</p>
                </div>
                <div>
                  <img
                    src="/images/liber-v/FaceUnlock.png"
                    alt="FaceUnlock logo"
                    className="w-20"
                  />
                </div>
              </div>
              <div>
                <p>
                  <span className="text-4xl mr-1">1.28</span>
                  {t("portable.weight_unit")}
                </p>
                <p>{t("portable.monitor_desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 -- specs */}
      <section className="text-gray-700 bg-green-50">
        <div
          className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg.png')] 
              bg-center bg-no-repeat bg-cover md:p-20"
        >
          <div className="p-10 md:px-0 md:basis-1/2 flex flex-col justify-center items-end">
            <div className="md:w-3/5 md:mr-16">
              <div className="block md:hidden mb-10">
                <img
                  src="/images/liber-v/AVITA_liber_v_performance.jpg"
                  alt="AVITA_liber_v_performance"
                  className="w-full"
                />
              </div>
              <h2 className="text-3xl text-center mb-14">{t("specs.title")}</h2>

              <div className="leading-8 text-center mb-10">
                <p className="mb-10">{t("specs.content_part1")}</p>

                <p>
                  {t.rich("specs.content_part2", {
                    br: () => <br />,
                    small: (chunk) => <small>{chunk}</small>,
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-purple-900">
              <div className="">
                <div className="mb-6">
                  <p>{t("specs.operating_system")}</p>
                  <p className="text-4xl">Windows 10 Home</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="mr-24">
                    <p>{t("specs.up_to")}</p>
                    <p className="text-4xl">Core i7</p>
                    <p>10th Gen INTEL® CORE™ PROCESSOR</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-4 md:mt-0">
                    <p>
                      {t("specs.up_to")}
                      <br />
                      <span className="text-4xl">8</span>GB
                      <br />
                      RAM
                    </p>

                    <p>
                      {t("specs.up_to")}
                      <br />
                      <span className="text-4xl">1</span>TB
                      <br />
                      SSD
                    </p>

                    <p>
                      <span className="text-4xl">1.5</span> {t("specs.mm")}
                      <br />
                      {t("specs.key_travel")}
                    </p>

                    <p>
                      <span className="text-4xl">19</span> {t("specs.mm")}
                      <br />
                      {t("specs.key_pitch")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-end">
            <div className="">
              <img
                src="/images/liber-v/AVITA_liber_v_performance.jpg"
                alt="AVITA_liber_v_performance"
                className="w-full"
              />

              <img
                src="/images/liber-v/p02_hk_en.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 -- ports */}
      <section className="bg-blue-100">
        <div
          className="bg-[url('/images/liber-v/product-liber-v-computer-bg.png')] bg-center bg-no-repeat bg-cover
        flex justify-center items-center p-10 md:py-28"
        >
          <img
            src="/images/liber-v/AVITA_liber_v_io.png"
            alt="AVITA_liber_v_io"
          />
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
            <li>{t("disclaimer.bullet10")}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
