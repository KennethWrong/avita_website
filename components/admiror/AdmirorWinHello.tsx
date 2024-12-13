import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorWinHello() {
  const t = useTranslations("admiror.win_hello");

  return (
    <section className="text-white">
      <div
        className="bg-black md:bg-[url('/images/admiror/bg_admiror03.jpg')]
        bg-no-repeat bg-top flex justify-center py-10"
      >
        <div className="flex flex-row w-full">
          <div className="w-full md:basis-1/2 flex justify-end items-end">
            <div className="md:max-w-xl p-10 mb-16">
              <img
                src="/images/admiror/bg_admiror03_mob.jpg"
                alt="bg_admiror03"
                className="block md:hidden mb-6"
              />
              <h2 className={`${styles.admiror_h2} mb-5`}>{t("title")}</h2>

              <p className="leading-8 mb-5">{t("content")}</p>

              <div className="flex flex-row">
                <img
                  src="/images/admiror/pic_window_hello.png"
                  className="mr-10"
                />
                <img src="/images/admiror/pic_fingerprint.png" />
              </div>
            </div>
          </div>

          <div className="hidden md:block md:basis-1/2"></div>
        </div>
      </div>
    </section>
  );
}
