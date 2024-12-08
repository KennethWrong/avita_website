import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeSignUp() {
  const t = useTranslations("homepage");

  return (
    <section className="w-full flex flex-col justify-center items-center bg-[#f0f0f0] p-20 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl text-gray-700 mb-5">{t("signup.title")}</h2>
        <p className="text-lg text-gray-500 mb-5">{t("signup.content")}</p>
        <Link className="" href="/register?">
          <div
            className="flex justify-center items-center
              bg-purple-800 hover:bg-gray-700 text-white w-80 h-10 p-5"
          >
            {t("signup.btn_text")}
            {/* <input type="hidden" id="alertMsg" value="Thank you for your subscribing!">  */}
          </div>
        </Link>
      </div>
    </section>
  );
}
