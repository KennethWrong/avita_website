import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorOutstanding() {
  const t = useTranslations("admiror.outstanding");

  return (
    <section id="outstanding">
      <div
        className="bg-white md:bg-[url('/images/admiror/bg_admiror02.jpg')]
        bg-no-repeat bg-top h-[720px] flex justify-center"
      >
        <div className="hidden md:block md:basis-2/5"></div>
        <div className="text-black md:text-white h-full md:basis-3/5 flex justify-center p-10">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <h1 className="text-6xl text-center md:text-left font-light uppercase mb-5">
              {t("title")}
            </h1>
            <h3 className="text-3xl text-center md:text-left font-light tracking-wide mb-16">
              {t("title_h3")}
            </h3>

            <h2 className={`${styles.admiror_h2} mb-6`}>{t("title_h2")}</h2>

            <p className="leading-8 text-center md:text-left">
              {t.rich("content", {
                sup: (chunks) => <sup>{chunks}</sup>,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
