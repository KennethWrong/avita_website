import AdmirorArtisticDesign from "@/components/admiror/AdmirorArtisticDesign";
import AdmirorBanner from "@/components/admiror/AdmirorBanner";
import AdmirorBatteryInfo from "@/components/admiror/AdmirorBatteryInfo";
import AdmirorExtraDesc from "@/components/admiror/AdmirorExtraDesc";
import AdmirorOutstanding from "@/components/admiror/AdmirorOutstanding";
import AdmirorPrideDelighted from "@/components/admiror/AdmirorPrideDelighted";
import AdmirorProduct from "@/components/admiror/AdmirorProduct";
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
    </main>
  );
}
