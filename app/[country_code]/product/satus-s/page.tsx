import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/satus_s/AVITA_satus_s101_banner_en_pc.jpg"
            alt="Satus_T101 Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-infoblock-1 */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-24 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 leading-loose max-w-2xl mx-auto">
          AVITA SATUS –Where the Successful Life Journey Begins
        </h2>

        <h3 className=" text-2xl mb-8">Turning a new page of life</h3>

        <p className="text-gray-600 max-w-2xl mx-auto leading-loose text-lg">
          SATUS, derived from the Latin vocabulary meaning “Start” and “Growth”.
          It also comprises and can be elaborated as “seeding” and “budding”; it
          represents the beginning of all things. In AVITA, we believe that
          success derives from a great start, hence an effective and
          well-designed appliance is crucial to cope with daily challenges and
          achieving goals. <br />
        </p>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 leading-loose text-lg">
          Bearing this in mind, AVITA introduces the new - "AVITA SATUS" series
          - a laptop dedicated for new generation of young users who are highly
          familiar with studying under the constraints of the New Normal. The
          product is designed and built in simple clear-cut design yet with
          comprehensive manner, enabling users to deal with their different
          missions and completing their various tasks in the best state. Making
          their studies and daily lives more fulfilling and at ease. Its
          limitless functions also broaden users’ horizons and imaginations
          without having set foot to the outside world. SATUS is indeed the best
          ‘1st laptop’ for many.
        </p>
      </section>

      {/* product-satus-s-text-image-block-1} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 lg:h-full text-center px-12 items-center mt-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Modern and Minimalist ．Design Aesthetics
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            AVITA SATUS S series leverages minimalist and neat design in neutral
            color tone, just the right way to present an aesthetic design of
            simplicity, an expression of ingenious, and be realistic without
            being flashy. User-oriented with a complete and functional system
            configuration, the series packs with a powerful punch to meet the
            studies and work needs, allowing users to further explore and grow
            without boundaries.
          </p>
        </div>
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end">
          <img
            src="/images/satus_s/pic-feature01.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
      </section>

      {/* product-satus-s-text-image-block-2} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end">
          <img
            src="/images/satus_s/pic-feature02.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full shadow-md"
          />
        </div>
        <div className="lg:w-1/2 lg:h-full text-center px-12 items-center mt-8 flex flex-col">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Full HD screen．Broader vision and interaction
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            In order to integrate AVITA SATUS S Series simple design with
            practical functions, the laptop is equipped with a 15.6-inch full HD
            IPS LCD Screen, which delivers a 178-degree ultra-wide viewing angle
            with outstanding colour when being viewed from different angles. Its
            colour accuracy and consistency with smooth and detailed images
            showcased on screen can cater perfectly for any learning, social and
            gaming purposes. For instance, clearer appearance and expressions of
            participants would help create closer connection with each other
            during online classes or video conferences, thus increase the level
            of interaction and engagement throughout the conversations. It would
            also help enhancing focus and concentration as users can easily read
            through various file contents displayed on screen especially when
            working on clerical tasks. In addition, users can easily split the
            laptop screen into multiple windows, making work progress more
            visually comfortable and efficient.
          </p>
          <div className="flex lg:flex-row flex-col">
            <img
              src="/images/satus_s/satus_ic_HD_en.png"
              alt="HD icon of satus"
              className="h-full"
            />
            <img
              src="/images/satus_s/satus_ic_angle_en.png"
              alt="angle icon of satus"
              className="h-full"
            />
          </div>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8 lg:min-h-screen">
        {/* Left Column with Two Divs */}
        <div className="lg:w-1/2 pl-10 flex flex-grow flex-col gap-6 lg:h-full items-center lg:mt-20 lg:mr-20 lg:items-end">
          <div className=" text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 max-w-lg">
              Quick startup．Smart connections
            </h3>
            <p className="text-gray-600 leading-loose max-w-lg">
              AVITA SATUS S series comes in simple and smart details of which it
              is structured with multiple ports, providing users a seamless and
              convenient experience without the need of adapters. Equipped with
              a dual core CPU Intel® Celeron® N4020 which brings reliable and
              responsive performance, as well as a built-in 8GB LPDDR4 memory,
              every single task whether it is word processing, presentations or
              video calls can be processed without hindrance. The built-in SSD
              drive also enables Windows 11 operating system to start up
              swiftly. Hence, providing stable access to documents and ensuring
              the data safety. Moreover, a Mini HDMI port and a MicroSD/TF card
              slot are equipped, allowing users to connect to other external
              devices for presentation use and expand the storage capacity of
              their choice anytime without limits.
            </p>
          </div>
          <div className="p-6 lg:ml-20">
            <section className="flex flex-wrap gap-8 px-6 py-16 text-purple-600">
              {/* Operating System */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">Operating System</p>
                <h2 className="text-3xl font-semibold">Windows 11 Home</h2>
              </div>

              {/* CPU */}
              <div className="w-full lg:w-1/2">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-3xl font-semibold">N4020</h2>
                <p className="text-sm font-medium">INTEL® Celeron® PROCESSOR</p>
              </div>

              {/* RAM */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-5xl font-semibold">
                  8<span className="text-lg">GB</span>
                </h2>
                <p className="text-sm font-medium">RAM</p>
              </div>

              {/* Storage */}
              <div className="w-1/2 lg:w-1/4">
                <p className="text-sm font-medium">Up to</p>
                <h2 className="text-5xl font-semibold">
                  256<span className="text-lg">GB</span>
                </h2>
                <p className="text-sm font-medium">SSD</p>
              </div>
            </section>
          </div>
        </div>

        {/* Right Column with Single Div */}
        <div className="lg:w-1/2 text-center flex flex-col content-between h-full items-center">
          <img
            src="/images/satus_s/pic-feature03.jpg" // Replace this with the path to your image
            alt="child using the satus laptop"
            className="h-full"
          />
          <img
            src="/images/satus_s/satus_product_2.png" // Replace this with the path to your image
            alt="image of the satus laptop"
            className="max-w-lg h-auto"
          />
        </div>
      </section>

      {/* product-satus-s-text-image-block-4} */}
      <section className=" px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-1/2 h-full text-center px-12 items-center mt-8 flex flex-col leading-loose">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Full-size keyboard．Improving accuracy of word processing
          </h2>
          <p className="text-gray-600 w-full mx-auto lg:mx-0 leading-loose mb-6">
            Taking the speed and smoothness of processing clerical or daily
            tasks into account, AVITA SATUS S series comes with a full-size
            island-style keyboard as well as a numeric keyboard* to facilitate
            calculations. Each key is accurately adjusted to help improve typing
            comfort and flexibility in order to cater for different study or
            work needs.
          </p>
          <div className="flex flex-row text-start w-3/4 h-full items-center justify-center lg:mt-px text-purple-600">
            <div className="w-full lg:w-full">
              <h2 className="text-2xl">
                1.31<span className="text-sm"> kg</span>
              </h2>
              <p className="text-xs mt-0.5">AVITA SATUS S102</p>
            </div>
            <div className="flex flex-col">
              <img
                src="/images/satus_s/keypad.png" // Replace this with the path to your image
                alt="finger of person clicking on satus laptop"
                className="max-h-32"
              />
              <p className=" text-xs text-purple-600 mt-2">Numeric keyboard</p>
            </div>
          </div>
          <p className="lg:mt-20 lg:pb-3 pb-1 text-gray-500 text-xs">
            *The numeric keyboard only applicable to 15.6-inch AVITA SATUS S102
          </p>
        </div>
        <div className="flex-grow lg:w-1/2 lg:h-full mt-8 lg:mt-0 lg:ml-0 flex justify-center lg:justify-end">
          <img
            src="/images/satus_s/pic-feature04.jpg" // Replace this with the path to your image
            alt="finger of person clicking on satus laptop"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-s-image-banner-2} */}
      <section>
        <div className="w-screen top-0 left-0 relative min-h-full mb-20 lg:mt-20 items-center">
          <img
            className="w-full h-auto"
            src="/images/satus_s/AVITA_satus_15_io.png"
            alt="Satus_T101 Banner"
          />
          <p className="px-8 lg:ml-20 text-xs text-gray-500">
            *The port locations are the same between AVITA SATUS S101 & S102
          </p>
        </div>
      </section>

      {/* product-satus-s-disclaimer} */}
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
            Actual battery life may vary depending on product configuration,
            usage, operational conditions and power management settings. Battery
            life will decrease over the lifetime of the battery.
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
            We try our best to provide accurate and complete product information
            online yet we reserve the rights to keep, change or correct any
            information without further notice.
          </li>
          <li>
            Windows is either a registered trademark or trademark of Microsoft
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
      </section>

      <div className="space60"></div>
    </main>
  );
}
