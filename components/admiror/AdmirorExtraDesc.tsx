import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorExtraDesc() {
  const t = useTranslations("admiror.extra_desc");

  return (
    <section className="bg-white flex flex-col justify-center items-center p-10 md:p-36">
      <div className="mb-5">
        <img src="/images/admiror/ADMIROR02_red.png" />
      </div>
      <div className="flex flex-col md:flex-row md:max-w-6xl mt-20">
        <div className="mb-10 md:mb-0 md:mr-24">
          <h2 className={`${styles.admiror_h2} mb-4 md:mb-8`}>{t("title")}</h2>

          <span className="leading-8">{t("content")}</span>
        </div>

        <div>
          <h2 className={`${styles.admiror_h2} mb-4 md:mb-8`}>{t("title2")}</h2>

          <span className="leading-8">{t("content2")}</span>
        </div>
      </div>
    </section>
  );
}
