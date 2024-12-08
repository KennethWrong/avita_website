import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("repair_tnc");

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6 md:px-20 lg:px-40 leading-relaxed">
      <div className=" max-w-7xl mx-auto p-8">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">
          {t("repair_tnc_title")}
        </h1>
        <ol className="list-inside text-gray-600 space-y-4 list-decimal">
          <li>{t("repair_tnc_1")}</li>
          <li>{t("repair_tnc_2")}</li>
          <li>{t("repair_tnc_3")}</li>
          <li>{t("repair_tnc_4")}</li>
          <li>{t("repair_tnc_5")}</li>
          <li>{t("repair_tnc_6")}</li>
          <li>{t("repair_tnc_7")}</li>
          <li>{t("repair_tnc_8")}</li>
          <li>{t("repair_tnc_9")}</li>
          <li>{t("repair_tnc_10")}</li>
          <li>{t("repair_tnc_11")}</li>
          <li>{t("repair_tnc_12")}</li>
          <li>{t("repair_tnc_13")}</li>
          <li>{t("repair_tnc_14")}</li>
          <li>{t("repair_tnc_15")}</li>
          <li>{t("repair_tnc_16")}</li>
          <li>{t("repair_tnc_17")}</li>
          <li>{t("repair_tnc_18")}</li>
          <li>{t("repair_tnc_19")}</li>
          <li>{t("repair_tnc_20")}</li>
          <li>{t("repair_tnc_21")}</li>
          <li>{t("repair_tnc_22")}</li>
          <li>{t("repair_tnc_23")}</li>
          <li>{t("repair_tnc_24")}</li>
        </ol>
      </div>
    </div>
  );
}
