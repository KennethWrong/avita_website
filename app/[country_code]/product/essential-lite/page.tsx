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
      <section className="text-gray-700 bg-white">
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

      {/* Section 4 */}
      <section className="text-gray-700 bg-white">
        <div
          className="flex bg-white md:bg-[url('/images/essential-lite/essential-lite14_bg3.jpg')]
        bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-2/3 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">
                COMFORTABLE VIEWING．
                <br />
                FULL HD ANTI-GLARE SCREEN
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Essential-lite_ic_HD.png"
                  alt="Essential-lite_ic_HD"
                  className=""
                />

                <img
                  src="/images/essential-lite/Essential-lite_ic_angle.png"
                  alt="Essential-lite_ic_angle"
                  className=""
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg3_mo.jpg"
                alt="essential-lite14_bg3"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>
                  The 14-inch 16:9 full HD IPS anti-glare display of ESSENTIAL
                  Lite provides a 178-degree ultra-wide viewing angle which can
                  effectively reduce eye fatigue while retaining the resolution
                  of screen. It provides an optimal viewing comfort even if you
                  are having online learning and working for a long duration of
                  time. Its wide viewing angle allows you to review contents
                  with every vivid detail from a maximised perspective anytime
                  and anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="text-gray-800 bg-white">
        <div
          className="flex bg-[#EEE] md:bg-[url('/images/essential-lite/essential-lite14_bg4.jpg')]
            bg-no-repeat bg-cover bg-center py-10 md:py-20"
        >
          <div className="hidden md:basis-1/2 md:flex justify-center items-center"></div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">
                UP-TO-DATE COMPACT．
                <br />
                PRELOADED WITH WINDOWS 11 OPERATING SYSTEM
              </h2>

              <div className="flex mb-10">
                <img
                  src="/images/essential-lite/Intel_Celeron_Logo.png"
                  alt="Essential-lite_ic_boundless"
                  className="w-[100px]"
                />
              </div>

              <img
                src="/images/essential-lite/essential-lite14_bg4_mo.jpg"
                alt="essential-lite14_bg4"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="mb-8">
                  ESSENTIAL Lite is pre-loaded with the latest Windows 11 Home
                  Edition operating system which features a fresh and
                  intuitively designed interface. Users are able to work on
                  multiple apps or managing multiple windows simultaneously by
                  simply clicking the "Start" button located at the center of
                  the screen, offering incredible experiences for gaming,
                  entertainment and communication.
                </p>
                <p>
                  The laptop is also equipped with Intel® Celeron® N4020
                  processor, 8GB LPDDR4 memory and up to 256GB SSD, boosting the
                  performance with reliable configuration as well as bringing
                  you a steadier experience while working or learning online
                  every day.
                </p>
                <a
                  href="https://avita.com/hk/product/essential-lite/spec"
                  className="text-blue-500 hover:underline"
                >
                  Tech Spec &gt;
                </a>
              </div>

              <div className="text-purple-900">
                <div className="mb-8">
                  <p>Operating System</p>
                  <p className="text-4xl">Windows 11 Home</p>
                  <a
                    href="https://support.microsoft.com/en/help/4020089/windows-10-in-s-mode-faq"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    Know more &gt;
                  </a>
                </div>
                <div className="mb-8">
                  <p>Up to</p>
                  <p className="text-4xl">N4020</p>
                  <p>INTEL® Celeron® PROCESSOR</p>
                </div>

                <div className="flex">
                  <div className="basis-1/2">
                    <p>Up to</p>
                    <p className="text-4xl">
                      256<span className="pl-1 text-sm">GB</span>
                    </p>
                    <p>SSD</p>
                  </div>
                  <div className="basis-1/2">
                    <p>Up to</p>
                    <p className="text-4xl">
                      8<span className="pl-1 text-sm">GB</span>
                    </p>
                    <p>RAM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="text-gray-700 bg-white md:bg-[#F9F3E7]">
        <div className="flex">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl mb-14">
                SIMPLE AND CONVENIENT．AVAILABILITY OF MULTIPLE PORTS
              </h2>

              <img
                src="/images/essential-lite/essential-lite14_bg5_mo.jpg"
                alt="essential-lite14_bg5"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>
                  ESSENTIAL Lite prioritizes user convenience, and thus moved
                  various ports that usually found on the left and right hand
                  sides to the back of the device, which include the plug-ins
                  for USB 3.0, HDMI to Micro SD. It allows you to connect
                  peripheral devices no matter you are left-handed or
                  right-handed, and you can manage your learning and working in
                  all aspects at ease without having to take up lots of physical
                  space.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg5_mo_cropped.jpg"
              alt="essential-lite14_bg5"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="text-gray-700 bg-white">
        <div className="flex">
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/essential-lite/essential-lite14_bg6_mo.jpg"
              alt="essential-lite14_bg6"
              className="w-full"
            />
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl mb-14">
                ULTRA FLEXIBILITY． FULL-SIZE CURVED KEYBOARD
              </h2>

              <img
                src="/images/essential-lite/essential-lite14_bg6_mo.jpg"
                alt="essential-lite14_bg6"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p>
                  ESSENTIAL Lite is also equipped with a specially designed
                  full-size island style keyboard, offering you the best typing
                  experience as distance between buttons are carefully
                  calculated. Coupled with a large touchpad, you can simply
                  slide your fingertips to have many different applications in
                  control. Without any barrier and constraint, your learning and
                  working performance can be enhanced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
