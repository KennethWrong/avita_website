import AdmirorArtisticDesign from "@/components/admiror/AdmirorArtisticDesign";
import AdmirorBanner from "@/components/admiror/AdmirorBanner";
import AdmirorExtraDesc from "@/components/admiror/AdmirorExtraDesc";
import AdmirorPrideDelighted from "@/components/admiror/AdmirorPrideDelighted";
import AdmirorProduct from "@/components/admiror/AdmirorProduct";

export default function AdmirorPage() {
  return (
    <main className="flex flex-col">
      <AdmirorBanner />
      <AdmirorProduct />
      <AdmirorArtisticDesign />
      <AdmirorExtraDesc />
      <AdmirorPrideDelighted />
    </main>
  );
}
