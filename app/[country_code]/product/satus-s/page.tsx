import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("satus_s");

  return (
    <main className="flex flex-col flex-grow">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src={`/images/satus_s/${t("satus_s_image_banner")}`}
            alt="Satus_T101 Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-infoblock-1 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-loose max-w-2xl mx-auto">
          {t("satus_s_intro_title1")}
        </h2>

        <h3 className=" text-2xl mb-8">{t("satus_s_intro_subtitle1")}</h3>

        <p className="text-gray-600 max-w-2xl mx-auto leading-loose text-lg">
          {t("satus_s_intro_paragraph1")}
          <br />
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-loose text-lg">
          {t("satus_s_intro_paragraph2")}
        </p>
      </section>

      {/* product-satus-s-text-image-block-1} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 lg:h-full text-center px-12 items-center mt-8 order-2 lg:order-1 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t("satus_s_design_title1")}
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            {t("satus_s_design_subtitle1")}
          </p>
        </div>
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/satus_s/pic-feature01.jpg"
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-s-text-image-block-2} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end">
          <img
            src="/images/satus_s/pic-feature02.jpg"
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
        <div className="lg:w-1/2 lg:h-full text-center px-12 items-center mt-8 flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t("satus_s_screen_title1")}
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            {t("satus_s_screen_subtitle1")}
          </p>
          <div className="flex lg:flex-row flex-col">
            <img
              src={`/images/satus_s/${t("satus_s_image_ips")}`}
              alt="HD icon of satus"
              className="h-full"
            />
            <img
              src={`/images/satus_s/${t("satus_s_image_ultrawide")}`}
              alt="angle icon of satus"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8 lg:min-h-screen">
        {/* Left Column with Two Divs */}
        <div className="lg:w-1/2 pl-10 flex flex-grow flex-col gap-6 lg:h-full items-center lg:mt-20 lg:mr-20 lg:items-end">
          <div className=" text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 max-w-lg">
              {t("satus_s_startup_title1")}
            </h3>
            <p className="text-gray-600 leading-loose max-w-lg">
              {t("satus_s_startup_subtitle1")}
            </p>
          </div>
          <div className="p-6 lg:ml-20">
            <section className="flex flex-wrap gap-8 px-6 py-16 text-purple-600">
              {/* Operating System */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">{t("satus_s_specs_os")}</p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_s_specs_windows")}
                </h2>
              </div>

              {/* CPU */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">
                  {t("satus_s_specs_up_to")}
                </p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_s_specs_processor1")}
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_s_specs_processor2")}
                </p>
              </div>

              {/* RAM */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_s_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  8<span className="text-lg">{t("satus_s_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">{t("satus_s_specs_ram")}</p>
              </div>

              {/* Storage */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_s_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  256<span className="text-lg">{t("satus_s_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">{t("satus_s_specs_ssd")}</p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column with Single Div */}
        <div className="lg:w-1/2 text-center flex-col content-between h-full items-center hidden lg:flex">
          <img
            src="/images/satus_s/pic-feature03.jpg"
            alt="child using the satus laptop"
            className="h-full"
          />
          <img
            src="/images/satus_s/satus_product_2.png"
            alt="image of the satus laptop"
            className="max-w-lg h-auto"
          />
        </div>
      </section>

      {/* product-satus-s-text-image-block-4} */}
      <section className=" px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 h-full text-center px-12 items-center mt-8 flex flex-col leading-loose order-2 lg:order-1">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t("satus_s_keyboard_title1")}
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            {t("satus_s_keyboard_subtitle1")}
          </p>
          <div className="flex flex-row text-start w-3/4 h-full items-center justify-center lg:mt-px text-purple-600">
            <div className="w-full lg:w-full">
              <h2 className="text-2xl">
                1.31
                <span className="text-sm"> {t("satus_s_keyboard_kg")}</span>
              </h2>
              <p className="text-xs mt-0.5">
                {" "}
                {t("satus_s_keyboard_kg_avita")}
              </p>
            </div>
            <div className="flex flex-col">
              <img
                src="/images/satus_s/keypad.png" // Replace this with the path to your image
                alt="finger of person clicking on satus laptop"
                className="max-h-32 order-1"
              />
              <p className=" text-xs text-purple-600 mt-2 lg:order-2 order-1">
                {" "}
                {t("satus_s_keyboard_keypad_caption")}
              </p>
            </div>
          </div>
          <p className="lg:mt-20 lg:pb-3 pb-1 text-gray-500 text-xs">
            {t("satus_s_keyboard_disclaimer")}
          </p>
        </div>
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/satus_s/pic-feature04.jpg" // Replace this with the path to your image
            alt="finger of person clicking on satus laptop"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-s-image-banner-2} */}
      <section>
        <div className="w-screen top-0 left-0 relative min-h-full mb-20 lg:mt-20 items-center">
          <img
            className="w-full h-auto"
            src="/images/satus_s/AVITA_satus_15_io.png"
            alt="Satus_T101 Banner"
          />
          <p className="px-8 lg:ml-20 text-xs text-gray-500">
            {t("satus_s_port_disclaimer")}
          </p>
        </div>
      </section>

      {/* product-satus-s-disclaimer} */}
      <section className="px-6 py-10 md:px-12 lg:px-24">
        <ul className="list-disc list-inside space-y-0.5 text-gray-700 leading-relaxed text-xs">
          <li>
            {t("satus_s_disclaimer_warrant")}
            <a href="#" className="text-blue-600 underline">
              {t("satus_s_disclaimer_click_here")}
            </a>
            .
          </li>
          <li>{t("satus_s_disclaimer_battery")}</li>
          <li>{t("satus_s_disclaimer_specification")}</li>
          <li>{t("satus_s_disclaimer_weight")}</li>
          <li>{t("satus_s_disclaimer_color_difference")}</li>
          <li>{t("satus_s_disclaimer_accurate")}</li>
          <li>{t("satus_s_disclaimer_trademark")}</li>
          <li>{t("satus_s_disclaimer_color_availability")}</li>
          <li>{t("satus_s_disclaimer_appearance")}</li>
          <li>{t("satus_s_disclaimer_dispute")}</li>
        </ul>
      </section>

      <div className="space60"></div>
    </main>
  );
}
