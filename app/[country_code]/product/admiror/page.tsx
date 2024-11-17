import AdmirorArtisticDesign from "@/components/admiror/AdmirorArtisticDesign";
import AdmirorBanner from "@/components/admiror/AdmirorBanner";
import AdmirorBatteryInfo from "@/components/admiror/AdmirorBatteryInfo";
import AdmirorColorOpts from "@/components/admiror/AdmirorColorOpts";
import AdmirorExtraDesc from "@/components/admiror/AdmirorExtraDesc";
import AdmirorOutstanding from "@/components/admiror/AdmirorOutstanding";
import AdmirorPrideDelighted from "@/components/admiror/AdmirorPrideDelighted";
import AdmirorProduct from "@/components/admiror/AdmirorProduct";
import AdmirorProductStatement from "@/components/admiror/AdmirorProductStatement";
import AdmirorWinHello from "@/components/admiror/AdmirorWinHello";

export default function AdmirorPage() {
  return (
    <main className="flex flex-col">
      <AdmirorBanner />
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
