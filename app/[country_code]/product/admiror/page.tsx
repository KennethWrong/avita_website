import AdmirorArtisticDesign from "@/components/admiror/AdmirorArtisticDesign";
import AdmirorBatteryInfo from "@/components/admiror/AdmirorBatteryInfo";
import AdmirorColorOpts from "@/components/admiror/AdmirorColorOpts";
import AdmirorExtraDesc from "@/components/admiror/AdmirorExtraDesc";
import AdmirorOutstanding from "@/components/admiror/AdmirorOutstanding";
import AdmirorPrideDelighted from "@/components/admiror/AdmirorPrideDelighted";
import AdmirorProduct from "@/components/admiror/AdmirorProduct";
import AdmirorProductStatement from "@/components/admiror/AdmirorProductStatement";
import AdmirorWinHello from "@/components/admiror/AdmirorWinHello";
import ProductBanner from "@/components/ProductBanner";

export default function AdmirorPage() {
  return (
    <main className="flex flex-col">
      <ProductBanner
        desktopImage={"/images/admiror/banner_admiror_15_e.jpg"}
        mobileImage={"/images/admiror/banner_mob_admiror_15_e.jpg"}
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
      <AdmirorProductStatement />
    </main>
  );
}
