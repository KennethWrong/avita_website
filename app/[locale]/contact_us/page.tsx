import { useTranslations } from "next-intl";

const Page: React.FC = () => {
  const t = useTranslations("contact_us");
  return (
    <main className="bg-gray-100 min-h-[40vh] py-10">
      <div className="flex flex-col items-center">
        <h1 className="w-3/4 text-3xl my-8">{t("contact_us_title")}</h1>
        <div className="flex flex-col lg:flex-row w-3/4">
          <div className=" w-full">
            <p className="font-bold">{t("contact_us_sales")}</p>
            <p>
              <span className="font-bold">{t("contact_us_email")}:</span>{" "}
              {t("contact_us_sales_email")}
            </p>
          </div>
          <div className="w-full mt-5 lg:mt-0">
            <p className="font-bold">{t("contact_us_tech_support")}</p>
            <p>
              <span className="font-bold">{t("contact_us_email")}:</span>{" "}
              {t("contact_us_tech_support_email")}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
