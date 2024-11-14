import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/satus_t101/AVITA_satus_t101_product_banner_en.jpg"
            alt="Satus_T101 Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-infoblock-1 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center ">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-relaxed max-w-2xl mx-auto">
          Opens up new horizons • Starting with AVITA SATUS T101 Tablet powered
          by Android™
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          SATUS, derived from the Latin vocabulary meaning "Start" and "Growth",
          it also comprises and can be elaborated as “seeding” and “budding”; it
          represents the beginning of all things. Based on such the idea, AVITA
          has further developed a brand new series riding on the product concept
          of “First Laptop”, dedicating for young users and to assist them in
          embarking on a journey of growth and success.
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          AVITA SATUS T101 Tablet is a new member of our SATUS series. It
          continues to inherit the modern and stylish design aesthetics, whilst
          equipped with the new Android 11 operating system that is especially
          suitable for light and spontaneous users. With just one device, you
          are able to explore on new horizons and boost the many imaginations
          through the versatile applications on Google Play provided.
        </p>
      </section>

      {/* product-satus-t101-text-image-block-1} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Anytime Anywhere.
            <br />
            A multi-functioned device that satisfy
            <br />
            your various needs
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed mb-6">
            AVITA SATUS T101 marries the functional specifications of a laptop
            with great flexibility. Its slim design is built with metal chassis
            and comprised with a 10.1-inch full HD IPS touchscreen monitor with
            1,200 x 1,920 resolution. Its optical comfort and clearer picture
            quality for both entertainment and light work occasion, maximizing
            the visual experience in response to various users’ needs.
          </p>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
            Coupled with a touchscreen display that weighs just about 480g and
            merely 9.5mm thick, this tablet is easy to carry around in providing
            enhanced user experience in additions to the huge offers of
            functions enabled.
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end">
          <img
            src="/images/satus_t101/pic-T101-01.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-2} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-8">
        {/* Left Column with Two Divs */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="p-6">
            <img
              src="/images/satus_t101/pic-T101-02.jpg" // Replace this with the path to your image
              alt="Person using AVITA tablet"
              className="h-full shadow-md"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Left Bottom Content
            </h3>
            <p className="text-gray-600 leading-relaxed">
              This is the content for the bottom div in the left column. You can
              place any text or other elements here.
            </p>
          </div>
        </div>

        {/* Right Column with Single Div */}
        <div className="lg:w-1/2 p-6 text-center flex flex-col content-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Dual Nano SIM Dual standby. Expand boundless possibilities.
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Equipped with dual card slots*, AVITA SATUS T101 allows users to
            standby on two Nano SIM cards with two separate numbers (DSDS
            mode)#. Allowing user to receive audio calls and text messages from
            both networks without having switched Nano SIM cards. Rest assured
            that no important information will be missed. User can easily
            separate their work and personal account even on same device, whilst
            when working or travelling overseas, users can activate a mobile
            data plan from local network provider without having to swap another
            Nano SIM card, enjoying greater flexibility and autonomy.
          </p>
          <br />

          <p className="text-gray-600 leading-relaxed">
            AVITA SATUS T101 comes with an up to 6GB RAM and 128GB ROM storage,
            allowing you to store a large number of important documents or
            files. If you don't need to use two SIM cards at the same time, you
            can replace one of the slots with a microSD card to increase the
            capacity. Combined with a USB-C port, you can save and transfer data
            anytime and anywhere which helps keep every of your important
            document, file and precious moment safe.
          </p>
          <br />

          <p className="text-gray-600 leading-relaxed">
            With an Octa Core CPU processor, AVITA SATUS T101 supports 4G LTE
            and Wi-Fi 5 network while delivering reliable and stable speed and
            battery performance. Through the synchronization function of Google
            Play, users can link multiple Google accounts devices and access
            their browsing histories and preference settings. It saves time and
            reduces the inconvenience of having to re-search and download data
            from other devices, striking a perfect balance between portability,
            speed and performance.
          </p>

          <br />

          <p className="text-gray-600 leading-relaxed">
            Designed as the best companion for users to keep up with their
            lives, AVITA SATUS T101 supports wireless headsets paired via
            Bluetooth 5.0. Coupled with a 5MP built-in front camera and an 8MP
            rear camera with autofocus feature, you can easily keep in touch
            with friends, family, and colleagues, as well as staying connected
            with the world anywhere and anytime.
          </p>

          <br />

          <p className="text-gray-600 text-start italic">
            *The dual card slot has two separate compartments for storing two
            Nano SIM cards (Nano SIM1 and Nano SIM2), or storing one SIM card
            and one microSD card (Nano SIM1 and microSD). #The two Nano SIM
            cards (Nano SIM1 and Nano SIM2) used in the dual SIM dual standby
            (DSDS) mode both support 4G LTE mobile network.
          </p>
        </div>
      </section>

      {/* product-satus-t101-computer */}
      <section className="" style={{ backgroundColor: "#000" }}>
        <div className="banner-block">
          <div className="container">
            <div>
              <div className="h1">#YouCanBe Expressing Yourself</div>
              <div className="space60 hidden-sm-down"></div>
              <div className="banner-para ls-0 col-sm-offset-2 col-sm-8">
                Be who you are and show your individuality. The choice is yours.
                #YouCanbe{" "}
              </div>
              <div className="space30"></div>
              <div className="Fadein" style={{ opacity: 0.597166 }}>
                <img src="/images/admiror/pic_AMIROR01.png" />
              </div>
              <div className="banner-para ls-0 col-sm-offset-2 col-sm-8">
                The all-new AVITA ADMIROR takes you on a journey of
                self-discovery. Shattering the norms and constraints of
                conventional laptops, the ADMIROR’s intricate designs and
                eye-catching colours are yours to embrace, because you deserve
                to be extraordinary!
              </div>
              <div className="space60 hidden-sm-down"></div>
              <div className="banner-data text-center col-lg-12">
                <img
                  className="hidden-sm-down"
                  src="/images/admiror/pic_feature01_15.png"
                />
                <img
                  className="hidden-md-up"
                  src="/images/admiror/pic_feature01_15_mob.png"
                />
              </div>
              <div className="space60 hidden-sm-down"></div>
              <div className="space60 hidden-sm-down"></div>
              <div className="h1">AVITA ADMIROR brings you</div>

              <section className="banner-anchor">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <a href="#artistic_design">
                        <img
                          className="first"
                          src="/images/admiror/btn_artistic_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_artistic_2.png"
                        />
                      </a>
                    </div>

                    <div className="col-md-4">
                      <a href="#usage_experience">
                        <img
                          className="first"
                          src="/images/admiror/btn_pride_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_pride_2.png"
                        />
                      </a>
                    </div>

                    <div className="col-md-4">
                      <a href="#outstanding">
                        <img
                          className="first"
                          src="/images/admiror/btn_outstanding_1.png"
                        />
                        <img
                          className="hover"
                          src="/images/admiror/btn_outstanding_2.png"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <div className="space60"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
