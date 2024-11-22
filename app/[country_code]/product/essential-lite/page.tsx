import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/essential-lite/AVITA_essential_lite_en.jpg"}
        mobileImage={"/images/essential-lite/AVITA_essential_lite_en_mo.jpg"}
        altText={"AVITA_essential_lite_en"}
      />

      {/* Section 1 */}
      <section className="bg-[#EEE] text-gray-700 w-full">
        <div className="w-full flex flex-col justify-center items-center py-20 md:py-32">
          <h1 className="text-center text-3xl mb-20">
            The ultra-lightweight ESSENTIAL Lite revolutionizes laptop
            <br />
            aesthetic with exquisite craftsmanship
          </h1>
          <div className="w-full flex justify-center">
            <a href="/" target="_blank" className="mr-10 hover:underline">
              Buy now &gt;
            </a>
            <a
              href="/hk/product/essential-lite/where_to_buy"
              className="hover:underline"
            >
              Where to buy &gt;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
