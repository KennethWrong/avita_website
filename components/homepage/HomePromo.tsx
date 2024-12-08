import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePromo() {
  const t = useTranslations("homepage.promo");

  return (
    <section
      className="w-screen flex flex-col md:grid md:grid-cols-2 
      lg:flex lg:flex-row justify-center items-center"
    >
      <div className="basis-1/4">
        <Link href="/">
          <img src={t("promo1")} alt="promo-01" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/news">
          <img src={t("promo2")} alt="promo-02" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/aboutus">
          <img src={t("promo3")} alt="promo-03" className="w-full" />
        </Link>
      </div>

      <div className="basis-1/4">
        <Link href="/support">
          <img src={t("promo4")} alt="promo-04" className="w-full" />
        </Link>
      </div>
    </section>
  );
}
