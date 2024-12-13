import { useTranslations } from "next-intl";
import Link from "next/link";

export default function AdmirorProduct() {
  const t = useTranslations("admiror.product");

  return (
    <section className="text-white bg-black p-10 font-times">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl md:text-5xl m-5">
          {t("express_yourself_title")}
        </h1>
        <p className="text-lg m-10">{t("you_can_be_paragraph")}</p>
        <div>
          <img src="/images/admiror/pic_AMIROR01.png" />
        </div>
        <p className="text-lg  max-w-3xl leading-8 m-5">{t("description")}</p>

        <div className="m-20">
          <img
            className="hidden md:block"
            src="/images/admiror/pic_feature01_15.png"
          />
          <img
            className="block md:hidden"
            src="/images/admiror/pic_feature01_15_mob.png"
          />
        </div>

        {/* banner anchors */}
        <h1 className="text-3xl md:text-5xl mb-20">{t("brings_you_title")}</h1>
        <section>
          <div className="flex flex-col md:flex-row md:max-w-6xl justify-center items-center">
            <div className="mx-5 md:max-w-[33%]">
              <Link href="#artistic_design" className="group">
                <img className="group-hover:hidden" src={t("button1")} />
                <img
                  className="hidden group-hover:block"
                  src={t("button1-hover")}
                />
              </Link>
            </div>

            <div className="my-5 md:my-0 mx-5 md:max-w-[33%]">
              <Link href="#usage_experience" className="group">
                <img className="group-hover:hidden" src={t("button2")} />
                <img
                  className="hidden group-hover:block"
                  src={t("button2-hover")}
                />
              </Link>
            </div>

            <div className="mx-5 md:max-w-[33%]">
              <Link href="#outstanding" className="group">
                <img className="group-hover:hidden" src={t("button3")} />
                <img
                  className="hidden group-hover:block"
                  src={t("button3-hover")}
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
