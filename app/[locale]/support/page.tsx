import Image from "next/image";
import { FaMap, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("service");

  return (
    <div className="flex flex-col items-center mb-10 text-gray-600 leading-relaxed">
      <img
        className="lg:w-4/6 my-10 w-full"
        src="/images/support/avita_support_center_feature_img2.jpg"
      />
      <div className="lg:w-4/6 w-full px-4 text-lg">
        <p className=" text-3xl text-center">{t("service_notice")}</p>
        <br />
        <p>{t("service_description")}</p>
        <br />
        <p>{t("service_avita_email")}</p>
        <br />
        <p className="mb-10">{t("service_satisfaction_claim")}</p>
        <br />
        <p className="text-3xl mb-2">{t("service_service_center")}</p>
        <div className="flex flex-col ml-3">
          <div className="flex flex-row items-center">
            <FaMap className="h-5 w-5" />
            <span className="ml-3">{t("service_customer_service")}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaClock className="h-5 w-5" />
            <span className="ml-3">-</span>
          </div>
          <div className="flex flex-row items-center">
            <FaPhone className="h-5 w-5" />
            <span className="ml-3">{t("service_repair_enquiry")}</span>
          </div>
          <div className="flex flex-row items-center">
            <FaEnvelope className="h-5 w-5" />
            <span className="ml-3">{t("service_repair_email")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
