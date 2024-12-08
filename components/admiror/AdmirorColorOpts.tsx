import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorColorOpts() {
  const t = useTranslations("admiror.color_opts");

  return (
    <section id="offer" className="bg-[#777] text-white p-10">
      <div className="flex flex-row h-full">
        <div className="md:basis-1/2 md:pl-[15%]">
          <div>
            <h2 className={`${styles.admiror_h2} mb-5`}>{t("title")}</h2>

            <p className="leading-8">
              {t.rich("content", {
                br: () => <br />,
              })}
            </p>
          </div>

          <img
            src="/images/admiror/pic_offer_hk_15_en.png"
            className="w-[60%] mb-5 mt-10"
          />
        </div>

        <div className="hidden md:block md:basis-1/2">
          <img
            src="/images/admiror/bg_admiror06_15_cropped.jpg"
            alt="bg_admiror06_15"
          />
        </div>
      </div>
    </section>
  );
}
