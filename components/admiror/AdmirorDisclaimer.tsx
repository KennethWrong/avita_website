import React from "react";
import { useTranslations } from "next-intl";

export default function AdmirorDisclaimer() {
  const t = useTranslations("admiror");

  return (
    <section className="flex justify-center items-center bg-[#f0f0f0]">
      <div className="tracking-[0.15em] p-10 md:p-24">
        <ul className="list-disc leading-6 text-xs">
          {Object.keys(t.raw("disclaimer")).map((key) => (
            <li key={key}>{t(`disclaimer.${key}`)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
