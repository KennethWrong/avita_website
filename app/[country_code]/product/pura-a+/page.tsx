import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura_a/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura_a/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />
    </main>
  );
}
