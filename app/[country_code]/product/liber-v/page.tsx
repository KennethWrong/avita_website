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
      {/* TODO: finish this */}
      <section className="text-gray-700 bg-red-50">
        <div className="flex bg-[url('/images/liber-v/product-liber-v-computer-bg2.png')] bg-center bg-no-repeat">
          <div className="hidden md:basis-1/2 md:flex flex-col justify-center items-end border-4 border-red-500">
            <div className="w-[48rem] pr-20">
              <img
                src="/images/liber-v/AVITA_liber_v_screen.jpg"
                alt="liber-v laptop 03"
                className="w-full"
              />
            </div>
          </div>
          <div className="p-10 md:px-0 md:basis-1/2 flex flex-col justify-center items-start border-4 border-red-500">
            <div className="md:w-3/5 ml-0 md:ml-16">
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
            <div className="grid grid-cols-2">
              <div className="badge-caption pb-1">
                <div className="badge-value d-inline pr-1">15.9</div>mm
                <div className="badge-caption">Thin</div>
              </div>
              <div>
                <img
                  className="bc-computer-image bc-computer-2"
                  src="/images/liber-v/FaceUnlock.png"
                />
              </div>

              <div className="badge-caption pb-1">
                <div className="badge-value d-inline pr-1">1.28</div>kg
                <div className="badge-caption">14-inch Monitor</div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
