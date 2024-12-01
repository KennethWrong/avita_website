import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("satus_s102");

  return (
    <main className="flex flex-col">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src={`/images/satus_s102_intel/${t("satus_s102_image_banner")}`}
            alt="Satus_T102_Intel Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-1} */}
      <section className="bg-gray-100 pt-3 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose items-center lg:items-start">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            {t("satus_s102_intro_title1")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_intro_subtitle1")}
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full lg:mt-0 lg:ml-8 flex items-center lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature1.png" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full w-auto"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-2} */}
      <section className="bg-gray-100 py-3 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8 lg:min-h-screen items-end">
        {/* Left Column with Single Div */}
        <div className="h-full w-full lg:w-3/4 order-2 lg:order-1">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature2_mo.jpg" // Replace this with the path to your image
            alt="child using the satus laptop"
            className="w-full h-auto"
          />
        </div>
        {/* Right Column with Two Divs */}
        <div className="lg:w-1/2 pl-10 flex flex-grow flex-col gap-6 lg:h-full items-center lg:mr-20 lg:items-end">
          <div className=" text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 max-w-lg">
              {t("satus_s102_accelerator_title1")}
            </h3>
            <p className="text-gray-600 leading-loose max-w-lg">
              {t("satus_s102_accelerator_subtitle1")}
            </p>
          </div>
          <div className="p-6 lg:ml-20">
            <section className="flex flex-wrap gap-8 px-6 py-16 text-purple-600">
              {/* Operating System */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_os")}
                </p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_s102_specs_windows")}
                </h2>
              </div>

              {/* CPU */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_up_to")}
                </p>
                <h2 className="text-3xl font-semibold">
                  {t("satus_s102_specs_processor1")}
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_processor2")}
                </p>
              </div>

              {/* RAM */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  8<span className="text-lg">{t("satus_s102_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_ram")}
                </p>
              </div>

              {/* Storage */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_up_to")}
                </p>
                <h2 className="text-5xl font-semibold">
                  512<span className="text-lg">{t("satus_s102_specs_gb")}</span>
                </h2>
                <p className="text-sm font-medium">
                  {t("satus_s102_specs_ssd")}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            {t("satus_s102_aesthetic_title1")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_aesthetic_subtitle1")}
          </p>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_aesthetic_subtitle2")}
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature3_mo.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-4} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature4_pc.jpg"
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            {t("satus_s102_multicolor_title1")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_multicolor_subtitle1")}
          </p>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-5} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full lg:text-left lg:mt-0 mt-8 px-12 leading-loose order-2 lg:order-1">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            {t("satus_s102_precise_details_title1")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_precise_details_subtitle1")}
          </p>
          <div className=" flex flex-col lg:flex-row">
            <img
              src={`/images/satus_s102_intel/${t("satus_s102_image_ips")}`}
              alt="Person using AVITA tablet"
              className="h-full"
            />
            <img
              src={`/images/satus_s102_intel/${t(
                "satus_s102_image_ultrawide"
              )}`}
              alt="Person using AVITA tablet"
              className="h-full"
            />
          </div>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 order-1 lg:order-2 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature5_pc.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-5} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:py-10 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature7_mo.jpg" // Replace this with the path to your image
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-1/2 lg:h-full lg:text-left px-12 leading-loose">
          <div className="max-w-xs">
            <img
              src="/images/satus_s102_intel/keypad.png" // Replace this with the path to your image
              alt="keypad icon"
              className="h-20"
            />
          </div>
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            {t("satus_s102_keyboard_title1")}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            {t("satus_s102_keyboard_subtitle1")}
          </p>
        </div>
      </section>

      {/* product-satus-t101-banner 2*/}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/satus_s102_intel/AVITA_satus_s102_port_io_pc.jpg"
            alt="Satus_T102_Intel ports"
          />
        </div>
      </section>

      {/* product-satus-t101-disclaimer} */}
      <section className="px-6 py-10 md:px-12 lg:px-24">
        <ul className="list-disc list-inside space-y-0.5 text-gray-700 leading-relaxed text-xs">
          <li>{t("satus_s102_disclaimer_distributor")}</li>
          <li>{t("satus_s102_disclaimer_different_model")}</li>
          <li>{t("satus_s102_disclaimer_accurate_information")}</li>
          <li>{t("satus_s102_disclaimer_weight_vary")}</li>
          <li>{t("satus_s102_disclaimer_battery_life")}</li>
          <li>{t("satus_s102_disclaimer_dispute")}</li>
        </ul>
      </section>
    </main>
  );
}
