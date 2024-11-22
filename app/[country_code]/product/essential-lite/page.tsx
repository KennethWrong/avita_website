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

      {/* Section 2 */}
      <section className="text-gray-500 bg-white">
        <div className="flex">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">
                Re-Discover the Beauty in Lite Inspired by Renaissance Art Form
              </h2>

              <img
                src="/images/essential-lite/essential-lite14_bg1_mo.jpg"
                alt="essential-lite14_bg1"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="mb-10">
                  ESSENTIAL Lite range assembled with exquisite craftsmanship
                  which inspired by the Renaissance era 'sculptural design. The
                  carved laptop is available in eight different stylish carved
                  covers.*
                </p>

                <p>
                  *Planet Blue, Pixel Green, Solar Pink, Mega Purple, Geometric
                  Motion, Cyber World, Digital Rainbow, Purple Network
                  <br />
                  (Different colors/patterns will be launched soon)
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg1_mo_cropped.jpg"
              alt="essential-lite14_bg1"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="text-gray-800 bg-white">
        <div
          className="flex bg-white md:bg-[url('/images/essential-lite/essential-lite14_bg2.jpg')]
            bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">
                LIGHT LOADED WITH 1KG FEATHERWEIGHT．
                <br />
                SLIM BODY WITH THIN BEZELS
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Essential-lite_ic_boundless.png"
                  alt="Essential-lite_ic_boundless"
                />
                <img
                  src="/images/essential-lite/Essential-lite_ic_screen.png"
                  alt="Essential-lite_ic_screen"
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg2_mo.jpg"
                alt="essential-lite14_bg2"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>
                  ESSENTIAL Lite is specially designed for standard users
                  without compromising its function and quality. Within its 4 mm
                  extremely thin bezels and 20 mm light-loaded body design there
                  lies a 14-inch screen, and the whole compact constitues merely
                  an approximate of 1kg#, which such lightloaded feature makes
                  it stand out from other similar laptops in the market^. Giving
                  you a convenient and flexible experience while carrying it
                  around for learning and working at anytime and anywhere you
                  want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
