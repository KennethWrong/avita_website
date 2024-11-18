import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* product-satus-t101-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_banner_en.jpg"
            alt="Satus_T102_Intel Banner"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-1} */}
      <section className="bg-gray-100 pt-3 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose items-center lg:items-start">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Embrace the essence and carry forward the design ethos of the "AVITA
            SATUS" series
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            Experience the perfect blend of aesthetics and performance with
            AVITA SATUS S102 - the latest addition to the AVITA SATUS series.
            Designed to grow with you, this laptop is the ultimate embodiment of
            our core design concept. With powerful hardware configurations,
            AVITA SATUS S102 empowers you to showcase your unique style while
            boosting your work efficiency. Upgrade your tech game with AVITA
            SATUS S102 today to truly reflect your personality.
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full lg:mt-0 lg:ml-8 flex items-center lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature1.png" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full w-auto"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-2} */}
      <section className="bg-gray-100 py-3 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row gap-8 lg:min-h-screen items-end">
        {/* Left Column with Single Div */}
        <div className="h-full w-full lg:w-3/4">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature2_mo.jpg" // Replace this with the path to your image
            alt="child using the satus laptop"
            className="w-full h-auto"
          />
        </div>
        {/* Right Column with Two Divs */}
        <div className="lg:w-1/2 pl-10 flex flex-grow flex-col gap-6 lg:h-full items-center lg:mr-20 lg:items-end">
          <div className=" text-center flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 max-w-lg">
              Your Productivity Accelerator
            </h3>
            <p className="text-gray-600 leading-loose max-w-lg">
              Equipped with the 12th generation Intel® Core™ processor i5-1235U,
              AVITA SATUS S102 features 10 cores with the ability to handle 12
              threads simultaneously, providing excellent processing speed and
              operating efficiency. It can meet users' demands for efficiency,
              high performance, and high quality, making it the ideal laptop for
              work and study. On the other hand, the low-voltage processor
              design ensures powerful performance of the laptop while
              maintaining excellent battery life. Experience lightning-fast
              boot-up times, seamless multi-tasking, and enhanced efficiency
              with AVITA SATUS S102, powered by the latest Windows 11 operating
              system. Windows 11 boasts a faster start-up time, allowing you to
              enter work mode within seconds. Its intelligent start menu adjusts
              application and file displays according to your usage habits,
              providing a faster and more convenient search and application
              launch method. The multi-tasking management of Windows 11 provides
              improved window management and virtual desktop functions, allowing
              you to effortlessly handle multiple tasks and applications.
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
                <h2 className="text-3xl font-semibold">Core i5</h2>
                <p className="text-sm font-medium">
                  12th Gen INTEL® CORE™ PROCESSOR
                </p>
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
                  512<span className="text-lg">GB</span>
                </h2>
                <p className="text-sm font-medium">SSD</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Aesthetics · Performance in Perfect Balance
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            AVITA SATUS S102 is the ultimate combination of aesthetics and
            performance. Boasting a sleek and stylish design available in a
            range of eye-catching colors, AVITA SATUS S102 is the perfect
            accessory to refresh your work and entertainment experiences, while
            showcasing your unique personality in your daily life.
          </p>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            More than just a pretty face, AVITA SATUS S102 features the
            high-performance that includes lightning-fast boot and loading
            speeds, to ensure a smoother performance and an unparalleled user
            experience whether you're working or unwinding with your favorite
            entertainment.
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature3_mo.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-4} */}
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Aesthetics · Performance in Perfect Balance
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            AVITA SATUS S102 is the ultimate combination of aesthetics and
            performance. Boasting a sleek and stylish design available in a
            range of eye-catching colors, AVITA SATUS S102 is the perfect
            accessory to refresh your work and entertainment experiences, while
            showcasing your unique personality in your daily life.
          </p>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            More than just a pretty face, AVITA SATUS S102 features the
            high-performance that includes lightning-fast boot and loading
            speeds, to ensure a smoother performance and an unparalleled user
            experience whether you're working or unwinding with your favorite
            entertainment.
          </p>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature3_mo.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-3} */}
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

      {/* product-satus-t101-text-image-block-4} */}
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
            Models or specifications may vary from country to country. Check
            with your local distributors or retailers for any updates on the
            current product.
            <a href="#" className="text-blue-600 underline">
              click here
            </a>
            .
          </li>
          <li>
            Product appearance design, color, matching, may vary according to
            different models and configurations, Colors of actual products may
            differ from product shots due to photography lighting or display
            setting of your viewing device.
          </li>
          <li>
            We try our best to provide accurate and complete product information
            online yet we reserve the rights to keep, change or correct any
            information without further notice.
          </li>
          <li>
            Weights vary depending on configuration and manufacturing
            variability.
          </li>
          <li>
            Actual battery life may vary depending on product configuration,
            usage, operational conditions and power management settings. Battery
            life will decrease over the lifetime of the battery.
          </li>
          <li>
            In the event of any disputes, AVITA TECHNOLOGIES INTERNATIONAL
            CO.,LTD. reserves the right of the final decision.
          </li>
        </ul>
      </section>
    </main>
  );
}
