import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("satus_t101");

  return (
    <main className="flex flex-col">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src={`/images/satus_t101/${t("satus_t101_image_banner")}`}
            alt="Satus_T101 Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-infoblock-1 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-relaxed max-w-2xl mx-auto">
          {t("satus_t101_intro_title1")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {t("satus_t101_intro_subtitle1")}
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          {t("satus_t101_intro_subtitle2")}
        </p>
      </section>

      {/* product-satus-t101-text-image-block-1} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full text-center lg:text-left px-12 order-2 lg:order-1 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {t("satus_t101_anywhere_title1")}
            <br />
            {t("satus_t101_anywhere_title2")} <br />
            {t("satus_t101_anywhere_title3")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed mb-6">
            {t("satus_t101_anywhere_subtitle1")}
          </p>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            {t("satus_t101_anywhere_subtitle2")}
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/satus_t101/pic-T101-01.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-2} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8">
        {/* Left Column with Two Divs */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="py-6">
            <img
              src="/images/satus_t101/pic-T101-02.jpg" // Replace this with the path to your image
              alt="Person using AVITA tablet"
              className="h-full shadow-md"
            />
          </div>
          <div className="p-6">
            <section className="flex flex-wrap gap-8 px-6 py-16 text-purple-700">
              {/* Operating System */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_os")}
                </p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_t101_specs_windows")}
                </h2>
              </div>

              {/* CPU */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_up_to")}
                </p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_t101_specs_processor1")}
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_processor2")}
                </p>
              </div>

              {/* RAM */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  6<span className="text-lg">{t("satus_t101_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_ram")}
                </p>
              </div>

              {/* Storage */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  128<span className="text-lg">{t("satus_t101_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_t101_specs_emmc")}
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column with Single Div */}
        <div className="lg:w-1/2 lg:px-6 p-6 text-center flex flex-col content-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {t("satus_t101_boundless_title1")}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {t("satus_t101_boundless_subtitle1")}{" "}
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed">
            {t("satus_t101_boundless_subtitle2")}
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed">
            {t("satus_t101_boundless_subtitle3")}
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed">
            {t("satus_t101_boundless_subtitle4")}
          </p>
          <br />
          <p className="text-gray-600 text-start italic">
            {t("satus_t101_boundless_disclaimer")}
          </p>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="px-6 py-16 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Text */}
        <div className=" flex flex-col justify-center text-center lg:w-1/2 lg:px-6 order-2 lg:order-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 lg:max-w-xl">
            {t("satus_t101_easy_title1")}
          </h2>
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            {t("satus_t101_easy_subtitle1")}
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            {t("satus_t101_easy_subtitle2")}
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            {t("satus_t101_easy_subtitle3")}
          </p>

          <p className="text-start mt-8 text-gray-600 text-sm lg:max-w-xl">
            {t("satus_t101_easy_disclaimer")}
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
          <img
            src="/images/satus_t101/pic-T101-03.jpg"
            alt="Description of first image"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/satus_t101/t101-feature03.png"
            alt="Description of second image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-4} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col content-between lg:flex-row items-center">
        <div className="lg:w-full lg:h-full lg:text-center px-12 text-center items-center order-2 lg:order-1 mt-8 lg:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center max-w-lg">
            {t("satus_t101_bluetooth_title1")}
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
            {t("satus_t101_bluetooth_subtitle1")}
          </p>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {t("satus_t101_bluetooth_subtitle2")}
          </p>
          <br />
          <p className="text-start max-w-lg text-sm text-gray-600 mx-auto lg:mx-0 leading-relaxed">
            {t("satus_t101_bluetooth_disclaimer")}
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src="/images/satus_t101/pic-T101-04.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-t101-disclaimer} */}
      <section className="px-6 py-10 md:px-12 lg:px-24">
        <ul className="list-disc list-inside space-y-0.5 text-gray-700 leading-relaxed text-xs">
          <li>
            {t("satus_t101_disclaimer_warranted")}
            <a href="#" className="text-blue-600 underline">
              {t("satus_t101_disclaimer_click_here")}
            </a>
            .
          </li>
          <li>{t("satus_t101_disclaimer_specifications")}</li>
          <li>{t("satus_t101_disclaimer_distributor")}</li>
          <li>{t("satus_t101_disclaimer_color_difference")}</li>
          <li>{t("satus_t101_disclaimer_4g")}</li>
          <li>{t("satus_t101_disclaimer_additional")}</li>
          <li>{t("satus_t101_disclaimer_gps")}</li>
          <li>{t("satus_t101_disclaimer_battery_performance")}</li>
          <li>{t("satus_t101_disclaimer_available_memory")}</li>
          <li>{t("satus_t101_disclaimer_pairing")}</li>
          <li>{t("satus_t101_disclaimer_android")}</li>
          <li>{t("satus_t101_disclaimer_accurate_information")}</li>
          <li>{t("satus_t101_disclaimer_dispute")}</li>
        </ul>
      </section>
    </main>
  );
}
