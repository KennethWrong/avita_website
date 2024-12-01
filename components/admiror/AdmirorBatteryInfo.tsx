import styles from "./Admiror.module.css";
import { useTranslations } from "next-intl";

export default function AdmirorBatteryInfo() {
  const t = useTranslations("admiror.battery_info");

  return (
    <section className="bg-[#777] text-white flex justify-center items-center">
      {/* rows */}
      <div className="flex flex-col md:flex-row md:max-w-6xl py-10 md:py-20">
        <img
          src="/images/admiror/ADMIROR05.png"
          alt="ADMIROR05"
          className="block md:hidden"
        />
        <div className="basis-1/2 p-10 md:bg-[url('/images/admiror/ADMIROR05.png')] bg-contain bg-no-repeat bg-center">
          <div className="md:w-[80%]">
            <h2 className={`${styles.admiror_h2} mb-5`}>{t("title")}</h2>

            <p className="leading-8 mb-10">{t("desc")}</p>

            <div className="">
              {t("life_prefix")} <br />
              <img src="/images/admiror/10hr_e.png" alt="Battery Life Icon" />
              {t("life_suffix")} <br />
              <span className="text-sm">{t("life_note")}</span>
            </div>
          </div>
        </div>

        <div className="basis-1/2 p-10">
          <h2 className={`${styles.admiror_h2} mb-5`}>
            {t("connectivity_title")}
          </h2>

          <p className="leading-8">
            {t.rich("connectivity_desc", {
              br: () => <br />,
            })}
          </p>

          <div className="flex flex-row mt-5">
            <div className="mr-10">
              <img src="/images/admiror/pic_usb_adapter_15.png" alt="Adapter" />
              <p className="txt_white">
                {/* USB-C to <br></br> USB/HDMI/3.5mm audio jack adapter */}
                {t.rich("adapter_desc", {
                  br: () => <br />,
                })}
              </p>
            </div>
            <img
              src="/images/admiror/pic_usb_c.png"
              alt="USB-C"
              className="w-28 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
