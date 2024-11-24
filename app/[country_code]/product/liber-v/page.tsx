import ProductBanner from "@/components/ProductBanner";

export default function LiberPage() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/liber-v/AVITA_liber_v_banner_hk_en.jpg"}
        mobileImage={"/images/liber-v/AVITA_liber_v_banner_hk_en_mo.jpg"}
        altText={"Liber Banner"}
      />

      {/* Section 1 */}
      <section className="text-gray-700">
        <div className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg.jpg')] bg-center bg-no-repeat">
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-end items-center">
            <div className="md:w-3/5 mr-0 md:mr-16">
              <h2 className="text-3xl text-center md:text-left mb-14">
                Post-modern inspired design
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center md:text-left">
                  Taking "Limitless Evolution" as its concept, LIBER V's design
                  is inspired by the creativity of the avant-garde post-modern
                  fortress La Muralla Roja in Spain. LIBER V installs its
                  high-quality webcam out of the screen with neat geometric
                  lines, perfectly interprets the epistemology of geometry.
                  Paired with the vibrant color options of LIBER V, the
                  geometric chassis realizes a slimmer body and an easy-to-open
                  clip, thereby offering a new interpretation of design in
                  laptop fashion.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center">
            <img
              src="/images/liber-v/LiberV_14colors_hk_en.png"
              alt="LiberV_14colors_hk_en"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <ProductBanner
        desktopImage={"/images/liber-v/AVITA_liber_v_banner_v2_hk_en.jpg"}
        mobileImage={"/images/liber-v/AVITA_liber_v_banner_v2_hk_en_mo.jpg"}
        altText={"Liber Banner"}
      />

      {/* Section 3 */}
      <section className="text-gray-700">
        <div className="flex bg-[url('/images/liber-v/product-liber-v-view-bg.jpg')] bg-center bg-no-repeat">
          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-center">
            <div className="">
              <img
                src="/images/liber-v/Features_hk_en.png"
                alt="Features_hk_en"
                className="w-full "
              />
              <img
                src="/images/liber-v/p03.png"
                alt="liber-v laptop 03"
                className="w-full"
              />
            </div>
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex justify-start items-center">
            <div className="md:w-3/5 ml-0 md:ml-16">
              <h2 className="text-3xl text-center md:text-left mb-14">
                Incredible Viewing Experience
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center md:text-left">
                  Slimmer but greater. The LIBER V series has a 3.7mm unbound
                  ultra-narrow bezel which has been reduced by about 63%
                  compared with previous LIBER series notebooks, one step closer
                  to perfection with its 78.2% screen-to-body ratio. With a full
                  HD 16:9 IPS display with anti-glare, presenting detailed
                  images clearly with a stable response time under various
                  ambient indoor and outdoor lighting conditions, allowing you
                  to enjoy the LIBER V's big world with the ultra-wide viewing
                  angle of 178 degrees. Whether you are studying, working, or
                  simply having fun, LIBER V brings you an extraordinary viewing
                  experience that you have never seen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="text-gray-700">
        <div
          className="bg-[url('/images/liber-v/AVITA_liber_v_color.jpg')]
          bg-center bg-no-repeat py-24 flex flex-col justify-center items-center"
        >
          <div className="flex md:max-w-7xl md:mb-16">
            <div className="basis-1/3 hidden md:block">
              <img src="/images/liber-v/p04.png" alt="liber-v laptop 04" />
            </div>
            <div className="md:basis-2/3 flex flex-col justify-center items-center p-10">
              <h2 className="text-3xl text-center md:text-left mb-14">
                Colorful Expression
              </h2>

              <div className="leading-8 text-center md:text-left">
                <p className="mb-5">
                  Appealing to different style personalities, LIBER V debuts
                  with over 14 distinguishably attractive colors. You can also
                  customize your LIBER V with a laser engraving service,
                  engraving names or words onto the chassis to reflect your
                  unique personal statement, like a fashion accessory tailored
                  just for you. You can fully release your personal charm and
                  stand out from the crowd.
                </p>

                <p>
                  More color combinations will be coming soon to suit your every
                  day needs. Whether you are a professional or a fashionista,
                  LIBER V makes you shine even more.
                </p>
              </div>
            </div>
            <div className="basis-1/3 hidden md:block">
              <img src="/images/liber-v/p05.png" alt="liber-v laptop 05" />
            </div>
          </div>
          <div className="hidden md:block md:max-w-7xl">
            <img
              src="/images/liber-v/AVITA_liber_v_all.png"
              alt="AVITA_liber_v_all"
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="text-gray-700 bg-red-50">
        <div
          className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg2.png')]
          bg-center bg-no-repeat bg-cover md:p-20"
        >
          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-end">
            <div className="">
              <img
                src="/images/liber-v/AVITA_liber_v_screen.jpg"
                alt="liber-v laptop 03"
                className="w-full"
              />
            </div>
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex flex-col justify-center items-start">
            <div className="md:w-3/5 md:ml-16">
              <div className="block md:hidden mb-10">
                <img
                  src="/images/liber-v/AVITA_liber_v_screen.jpg"
                  alt="liber-v laptop 03"
                  className="w-full"
                />
              </div>
              <h2 className="text-3xl text-center md:text-left mb-14">
                Readily Portable
              </h2>

              <div className="leading-8 mb-10">
                <p className="text-center md:text-left">
                  LIBER V is sophisticatedly engineered by compacting a 14-inch
                  screen inside the 13.3-inch that weights from just 1.28kg, 14%
                  less than previous models and well-balancing lightness and
                  durability, bringing you an easy and convenient experience.
                  LIBER V incorporates a Windows Hello fingerprint reader, which
                  strengthens privacy protection. LIBER V can always accompany
                  you while traveling or working effortlessly.
                </p>
              </div>
            </div>

            <div className="md:ml-16">
              <div className="flex flex-row">
                <div className="mr-36">
                  <p>
                    <span className="text-4xl mr-1">15.9</span>mm
                  </p>
                  <p>Thin</p>
                </div>
                <div>
                  <img
                    src="/images/liber-v/FaceUnlock.png"
                    alt="FaceUnlock logo"
                    className="w-20"
                  />
                </div>
              </div>
              <div>
                <p>
                  <span className="text-4xl mr-1">1.28</span>kg
                </p>
                <p>14-inch Monitor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="text-gray-700 bg-green-50">
        <div
          className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg.png')] 
              bg-center bg-no-repeat bg-cover md:p-20"
        >
          <div className="p-10 md:px-0 md:basis-1/2 flex flex-col justify-center items-end">
            <div className="md:w-3/5 md:mr-16 md:max-w-md">
              <div className="block md:hidden mb-10">
                <img
                  src="/images/liber-v/AVITA_liber_v_performance.jpg"
                  alt="AVITA_liber_v_performance"
                  className="w-full"
                />
              </div>
              <h2 className="text-3xl text-center mb-14">
                Extraordinary Performance and Productivity{" "}
              </h2>

              <div className="leading-8 text-center mb-10">
                <p className="mb-10">
                  Not only LIBER V is unique in appearance but also in
                  performance. Adapting the new 10th Gen Intel® Core™
                  i5-10210U/i7-10510U processors, 8GB RAM and large storage up
                  to 1TB SSD, LIBER V can swiftly process and access files,
                  allowing you to work with ease, even with complex workflows.
                </p>

                <p>
                  LIBER V’s full-size backlit keyboard with 1.5mm key travel and
                  19mm key pitch delivers the ultimate word processing
                  experience that you could ever ask for. Along with AVITA’s
                  extra-large touchpad, support for 4 fingers gestures
                  perfectly, you can have more space to control. LIBER V’s
                  battery life lasts for up to 10 hours whilst the notebook is
                  equipped with different ports that are compatible with other
                  devices. Making it possible to simultaneously charge, transfer
                  data, display, and connect to various devices to meet your
                  different needs.
                  <small>*Up to 10 hours on MobileMark 2014</small>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center text-purple-900">
              <div className="">
                <div className="mb-6">
                  <p>Operating System</p>
                  <p className="text-4xl">Windows 10 Home</p>
                </div>
                <div className="flex">
                  <div className="mr-24">
                    <p>Up to</p>
                    <p className="text-4xl">Core i7</p>
                    <p>10th Gen INTEL® CORE™ PROCESSOR</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <p>
                      Up to
                      <br />
                      <span className="text-4xl">8</span>GB
                      <br />
                      RAM
                    </p>

                    <p>
                      Up to
                      <br />
                      <span className="text-4xl">1</span>TB
                      <br />
                      SSD
                    </p>

                    <p>
                      Up to
                      <br />
                      <span className="text-4xl">1.5</span> mm
                      <br />
                      key travel
                    </p>

                    <p>
                      Up to
                      <br />
                      <span className="text-4xl">19</span>mm
                      <br />
                      key pitch
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-end">
            <div className="">
              <img
                src="/images/liber-v/AVITA_liber_v_performance.jpg"
                alt="AVITA_liber_v_performance"
                className="w-full"
              />

              <img
                src="/images/liber-v/p02_hk_en.png"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-blue-100">
        <div
          className="bg-[url('/images/liber-v/product-liber-v-computer-bg.png')] bg-center bg-no-repeat bg-cover
        flex justify-center items-center p-10 md:py-28"
        >
          <img
            src="/images/liber-v/AVITA_liber_v_io.png"
            alt="AVITA_liber_v_io"
          />
        </div>
      </section>

      {/* Section 8 -- product statement */}
      <section className="text-gray-700 bg-[#EEEEEE] flex justify-center items-center">
        <div className="flex justify-center items-center px-10 md:w-2/3 py-10 md:py-24">
          <ul className="list-disc leading-6 text-xs">
            <li>
              Centrino Logo, Core Inside, Intel, Intel Logo, Intel Core, Intel
              Inside, Intel Inside Logo, Intel Viiv, Intel vPro, Itanium,
              Itanium Inside, Pentium, Pentium Inside, Viiv Inside, vPro Inside,
              Xeon, and Xeon Inside are trademarks of Intel Corporation in the
              U.S. and other countries.
            </li>
            <li>
              Actual battery life may vary depending on product configuration,
              usage, operational conditions and power management settings.
              Battery life will decrease over the lifetime of the battery.
            </li>
            <li>
              Models or specifications may vary from country to country. Check
              with your local distributors or retailers for any updates on the
              current product.
            </li>
            <li>
              Weights vary depending on configuration and manufacturing
              variability.
            </li>
            <li>
              Colors of actual products may differ from product shots due to
              photography lighting or display setting of your viewing device.
            </li>
            <li>
              We try our best to provide accurate and complete product
              information online yet we reserve the rights to keep, change or
              correct any information without further notice.
            </li>
            <li>
              Windows is either registered trademark or trademark of Microsoft
              Corporation in the United States and/or other countries.
            </li>
            <li>The availability of colors may vary by retailers.</li>
            <li>
              Product appearance design, color, matching, may vary according to
              different models and configurations.
            </li>
            <li>
              In the event of any disputes, Nexstgo Company Limited reserves the
              right of the final decision.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
