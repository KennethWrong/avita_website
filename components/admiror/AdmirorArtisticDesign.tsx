import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorArtisticDesign() {
  const t = useTranslations("admiror.artistic_design");

  return (
    <section className="text-white" id="artistic_design">
      {/* Background Image */}
      <div
        className="bg-[url('/images/admiror/bg_gothic.jpg')] bg-no-repeat 
        bg-center bg-origin-border bg-cover p-24"
      >
        <div className="flex flex-col">
          <div className="text-center w-full">
            <h1 className="text-4xl font-bold uppercase mb-5">{t("title")}</h1>
            <h3 className="text-3xl font-medium mb-4">{t("sub_title")}</h3>
          </div>

          <div className="flex flex-row items-center justify-center ">
            <img
              className="hidden md:block transform translate-x-8 -translate-y-24"
              src="/images/admiror/ADMIROR03.png"
              alt="ADMIROR Design"
            />

            <div className="text-center md:text-left md:max-w-xl md:ml-24">
              <h2 className={`${styles.admiror_h2} pb-5 mt-16`}>
                {t("p_title")}
              </h2>
              <p className="leading-loose text-white">{t("p_content")}</p>

              <h2 className={`${styles.admiror_h2} pb-5 mt-16`}>
                {t("p_title2")}
              </h2>
              <p className="leading-loose text-white">{t("p_content2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
