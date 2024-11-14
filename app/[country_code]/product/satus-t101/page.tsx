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
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full text-center lg:text-left px-12">
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
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8">
        {/* Left Column with Two Divs */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="py-6">
            <img
              src="/images/satus_t101/pic-T101-02.jpg" // Replace this with the path to your image
              alt="Person using AVITA tablet"
              className="h-full shadow-md"
            />
          </div>
          <div className="p-6">
            <section className="flex flex-wrap gap-8 px-6 py-16 text-purple-700">
              {/* Operating System */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">Operating System</p>
                <h2 className="text-3xl font-semibold">Android 11</h2>
              </div>

              {/* CPU */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-3xl font-semibold">Unisoc T618</h2>
                <p className="text-sm font-medium">Octa CPU</p>
              </div>

              {/* RAM */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-5xl font-semibold">
                  6<span className="text-lg">GB</span>
                </h2>
                <p className="text-sm font-medium">RAM</p>
              </div>

              {/* Storage */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-5xl font-semibold">
                  128<span className="text-lg">GB</span>
                </h2>
                <p className="text-sm font-medium">eMMC</p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column with Single Div */}
        <div className="lg:w-1/2 lg:px-6 p-6 text-center flex flex-col content-between">
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

      {/* product-satus-t101-text-image-block-2} */}
      <section className="px-6 py-16 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Text */}
        <div className=" flex flex-col justify-center text-center lg:w-1/2 lg:px-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-10 lg:max-w-xl">
            Easy to use. Equipped with the latest Android 11 OS and Google Play
            app.
          </h2>
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            While the synchronization function on Google Play allows you to link
            up multiple devices with a single Google account log-in to achieve
            an ‘all-in-one’ performance, allowing you to access divergent
            contents across different device at ease. For instance, reading an
            e-book taken from Google Play to let you freely enlarge or minimize
            the layout and text, or use the AVITA UBIQUE Stylus# to jot
            important notes accordingly. Moreover, Google Play offers an
            extensive range of games and movies for entertainment, your daily
            life and fun will no longer be bounded by physical space nor time
            constraint.
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            The robust system of Android 11 and Google Play allows you to use
            the AVITA SATUS T101 without security concern. Whenever there are
            security updates available, notifications via Google Play will be
            sent to remind you to restore any possible security flaws and keep
            your system running with the latest protection at times.
          </p>
          <br />
          <p className="text-gray-600 leading-relaxed lg:max-w-xl">
            There are more to discover for Android 11 operating system, please
            visit the official Android website for the latest information.
          </p>

          <p className="text-start mt-8 text-gray-600 text-sm lg:max-w-xl">
            #The above mentioned AVITA UBIQUE Stylus may be sold separately.
          </p>
        </div>

        {/* Right Column - Images */}
        <div className="lg:w-1/2 flex flex-col">
          <img
            src="/images/satus_t101/pic-T101-03.jpg"
            alt="Description of first image"
            className="w-full h-auto object-cover"
          />
          <img
            src="/images/satus_t101/t101-feature03.png"
            alt="Description of second image"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col content-between lg:flex-row items-center">
        <div className="lg:w-full lg:h-full lg:text-center px-12 text-center items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center max-w-lg">
            Flexible Bluetooth configuration. Sync up with whatever accessory of
            your preference.
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-6">
            AVITA SATUS T101 is compatible with multiple Bluetooth devices^. For
            instance, by connecting the AVITA UBIQUE True Wireless Earphone#
            allows you to focus on a call without any interruption from nearby
            environment, or immerse yourself with enjoyable music or movies in a
            clean and balanced sound area. You can also connect to AVITA UBIQUE
            Stylus#, and capture all your random thoughts or creative ideas
            instantly in just a few simple strokes.
          </p>
          <p className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            You can also pair any third-party accessories* of your choice to the
            AVITA SATUS T101 via Bluetooth. No matter you are at home, office or
            in the car, the tablet can function flexibly in different ways,
            elevating your daily use or work to the next level.
          </p>
          <br />
          <p className="text-start max-w-lg text-sm text-gray-600 mx-auto lg:mx-0 leading-relaxed">
            #The above mentioned AVITA UBIQUE Stylus or True Wireless Earphone
            may be sold separately. <br />
            ^Some features and applications may not be available in specific
            countries/regions. Need to use only with compatible smart devices
            (sold separately)。 Subject to local network, data and messaging
            services. <br />
            *When pairing/connecting with third-party accessories, AVITA does
            not guarantee that all Bluetooth devices are compatible with AVITA
            SATUS T101.
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-end">
          <img
            src="/images/satus_t101/pic-T101-04.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-t101-disclaimer} */}
      <section className="px-6 py-10 md:px-12 lg:px-24">
        <ul className="list-disc list-inside space-y-0.5 text-gray-700 leading-relaxed text-xs">
          <li>
            AVITA SATUS series is warranted by Nexstgo Company Limited for a
            period of twelve (12) months from the date of purchase under the
            terms and conditions of this warranty. For details, please{" "}
            <a href="#" className="text-blue-600 underline">
              click here
            </a>
            .
          </li>
          <li>
            Product design, models or specifications may vary from country to
            country. The availability of colors may vary by retailers. Weights
            vary depending on configuration and manufacturing variability.
          </li>
          <li>
            Please check with your local distributors or retailers for any
            updates on the current product.
          </li>
          <li>
            Colors of actual products may differ from product shots due to
            photography lighting or display setting of your viewing device.
          </li>
          <li>
            4G services are only supported in 4G network enabled locations in
            4G-ready countries. Requires optimal connection. Actual speed may
            vary depending on country, carrier and user environment.
          </li>
          <li>
            You may incur additional charges for making calls over Wi-Fi, so
            check with your mobile service provider for details.
          </li>
          <li>
            GPS connection is subject to local network and data services and
            network providers may charge additional service fees. Additionally,
            connection times can be affected by external factors, such as
            surrounding environment, weather, etc.
          </li>
          <li>
            Performance of the battery is subject to the network, signal
            strength, function, selection and profile. Battery time is based on
            our own laboratory measurements, and may vary depending on factors
            such as device settings, usage patterns and operating conditions.
          </li>
          <li>
            Actual available memory for end user usage may vary due to
            pre-configuration of tablet. The pre-configuration includes
            preloaded operating system and applications.
          </li>
          <li>
            When pairing/connecting with third-party accessories, AVITA does not
            guarantee that all Bluetooth devices are compatible with our models.
          </li>
          <li>Android, Google Play is a trademark of Google LLC.</li>
          <li>
            We try our best to provide accurate and complete product information
            online yet we reserve the rights to keep, change or correct any
            information without further notice.
          </li>
          <li>
            In the event of any disputes, Nexstgo Company Limited reserves the
            right of the final decision.
          </li>
        </ul>
      </section>
    </main>
  );
}
