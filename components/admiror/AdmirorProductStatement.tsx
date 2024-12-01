import React from "react";
import { useTranslations } from "next-intl";

export default function AdmirorProductStatement() {
  const t = useTranslations("admiror.product_statement");

  return (
    <section className="flex justify-center items-center bg-[#f0f0f0]">
      <div className="tracking-[0.15em] p-10 md:p-24">
        <ul className="list-disc leading-6 text-xs">
          <li>{t("bullet1")}</li>
          <li>{t("bullet2")}</li>
          <li>{t("bullet3")}</li>
          <li>{t("bullet4")}</li>
          <li>{t("bullet5")}</li>
          <li>{t("bullet6")}</li>
        </ul>
      </div>
    </section>
  );
}
