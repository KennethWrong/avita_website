import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorPrideDelighted() {
  const t = useTranslations("admiror");

  return (
    <section
      id="usage_experience"
      className="bg-white flex flex-col justify-center items-center"
    >
      {/* titles */}
      <div className="flex flex-col items-center py-10">
        <h3 className="text-xl md:text-3xl font-light tracking-wide mb-5">
          {t("admiror_pride_title_h3")}
        </h3>
        <h1 className="text-3xl md:text-6xl font-light uppercase">
          {t("admiror_pride_title")}
        </h1>
      </div>

      {/* rows */}
      <section className="my-24">
        {/* row 1 */}
        <div className="flex flex-col md:flex-row md:w-[74rem] md:h-96 bg-[#f2f2f2]">
          <img
            src="/images/admiror/bg_A1_15_e.jpg"
            alt="A1_15"
            className="hidden md:block md:basis-2/3"
          />
          <img
            src="/images/admiror/pic_pride_01_15_e.jpg"
            alt="A1_15"
            className="block md:hidden"
          />

          <div className="flex flex-col justify-center items-center p-10 md:basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              {t("admiror_pride_row1_title")}
            </h2>

            <p className="leading-6">{t("admiror_pride_row1_content")}</p>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-col md:flex-row md:w-[74rem] md:h-96 bg-[#f2f2f2]">
          <img
            src="/images/admiror/bg_B1.jpg"
            alt="bg_B1"
            className="hidden md:block md:basis-1/3"
          />
          <img
            src="/images/admiror/pic_pride_02.jpg"
            alt="bg_B1"
            className="block md:hidden"
          />

          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              {t("admiror_pride_row2_title")}
            </h2>

            <span className="leading-6">{t("admiror_pride_row2_content")}</span>
          </div>
          <img
            src="/images/admiror/bg_B3_15_e.jpg"
            alt="B3_15_e"
            className="hidden md:block md:basis-1/3"
          />
          <img
            src="/images/admiror/pic_pride_03_15_e.jpg"
            alt="B3_15_e"
            className="block md:hidden"
          />
        </div>

        {/* row 3 */}
        <div className="flex flex-col md:flex-row md:w-[74rem] md:h-96 bg-[#f2f2f2]">
          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              {t("admiror_pride_row3_title")}
            </h2>

            <span className="leading-6">{t("admiror_pride_row3_content")}</span>
          </div>

          <img
            src="/images/admiror/bg_C2_15_e.jpg"
            alt="C2_15_e"
            className="hidden md:block md:basis-1/3"
          />
          <img
            src="/images/admiror/pic_pride_04_15_e.jpg"
            alt="C2_15_e"
            className="block md:hidden"
          />

          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              {t("admiror_pride_row3_title2")}
            </h2>

            <span className="leading-6">
              {t("admiror_pride_row3_content2")}
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
