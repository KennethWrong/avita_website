import { useTranslations } from "next-intl";

const Aboutus: React.FC = () => {
  const t = useTranslations("aboutus");

  return (
    <main className="flex lg:flex-row flex-col bg-gray-200">
      <div className="flex lg:w-2/3 w-full items-center justify-center pl-8 pr-8 lg:pr-0 mb-20 order-2 lg:order-1">
        <div className="flex flex-col lg:full text-sm leading-relaxed lg:w-4/6 w-full mt-20 text-gray-600">
          <h1 className=" text-4xl mb-4">{t("aboutus_about")}</h1>
          <p>{t("aboutus_consumer_lifestyle")}</p>
          <br />
          <p>{t("aboutus_passions")}</p>
          <br />
          <p>{t("aboutus_product_series")}</p>
          <br />
          <p>
            {t("aboutus_in")}{" "}
            <span className="font-bold">{t("aboutus_2021")}</span>
            {t("aboutus_partner_award")}
          </p>
          <br />
          <div className="flex flex-row mb-5">
            <img
              src="/images/aboutus/intel_Titanium_partner.jpg" // Replace this with the path to your image
              alt="People sitting in a line laughing"
              className=" w-32 h-auto"
            />
            <img
              src="/images/aboutus/reddot_winner_2021.png" // Replace this with the path to your image
              alt="People sitting in a line laughing"
              className="w-56 h-auto"
            />
          </div>
          <p>
            <span className="font-bold">{t("aboutus_july")} </span>{" "}
            {t("aboutus_hereinafter")}
          </p>
          <br />
          <p>{t("aboutus_elaborated")}</p>
          <br />
          <p>
            <span className="font-bold">{t("aboutus_nov_2022")}</span>{" "}
            {t("aboutus_jasmy")}
          </p>
          <br />
          <p>{t("aboutus_diversity")}</p>
        </div>
      </div>
      <div className="w-full lg:w-2/3 order-1 lg:order-2">
        <img
          src="/images/aboutus/aboutus-min.png" // Replace this with the path to your image
          alt="People sitting in a line laughing"
          className="w-full lg:object-none"
        />
      </div>
    </main>
  );
};

export default Aboutus;
