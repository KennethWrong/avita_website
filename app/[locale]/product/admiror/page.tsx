import AdmirorArtisticDesign from "@/components/admiror/AdmirorArtisticDesign";
import AdmirorBatteryInfo from "@/components/admiror/AdmirorBatteryInfo";
import AdmirorColorOpts from "@/components/admiror/AdmirorColorOpts";
import AdmirorExtraDesc from "@/components/admiror/AdmirorExtraDesc";
import AdmirorOutstanding from "@/components/admiror/AdmirorOutstanding";
import AdmirorPrideDelighted from "@/components/admiror/AdmirorPrideDelighted";
import AdmirorProduct from "@/components/admiror/AdmirorProduct";
import AdmirorDisclaimer from "@/components/admiror/AdmirorDisclaimer";
import AdmirorWinHello from "@/components/admiror/AdmirorWinHello";
import ProductBanner from "@/components/ProductBanner";
import { useTranslations } from "next-intl";

export default function AdmirorPage() {
  const t = useTranslations("admiror");

  return (
    <main className="flex flex-col">
      <ProductBanner
        desktopImage={t("banner.pc")}
        mobileImage={t("banner.mo")}
        altText={"Admiror Banner"}
      />
      <AdmirorProduct />
      <AdmirorArtisticDesign />
      <AdmirorExtraDesc />
      <AdmirorPrideDelighted />
      <AdmirorOutstanding />
      <AdmirorWinHello />
      <AdmirorBatteryInfo />
      <AdmirorColorOpts />
      <AdmirorDisclaimer />
    </main>
  );
}
