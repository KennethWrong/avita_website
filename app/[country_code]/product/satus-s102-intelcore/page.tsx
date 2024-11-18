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
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature4_pc.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Multiple Color Options to Represent Yourself
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            AVITA SATUS S102 inherits the signature minimalist design of the
            "AVITA SATUS" series, with a range of colors that includes classic
            black and lighter shades of blue, pink and purple. Each color option
            exudes a unique personality and style, making your laptop a true
            reflection of your individuality.
          </p>
        </div>
      </section>

      {/* product-satus-t101-text-image-block-5} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-full lg:h-full lg:text-left px-12 leading-loose">
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Precise Details As Usual
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            To cater to the practical needs of users, AVITA SATUS S102 is
            equipped with a 15.6-inch Full HD IPS display and a 178-degree
            ultra-wide viewing angle, enabling the clear display of details and
            facilitating precise and prompt task handling for users. The Intel®
            Iris® Xe Graphics card boasts powerful graphic processing
            capabilities, allowing for speedy handling of complex images and
            videos, and enabling users to enjoy high-quality visual experiences
            in various scenarios, whether it be for work, entertainment or
            creative purposes.
          </p>
          <div className=" flex flex-col lg:flex-row">
            <img
              src="/images/satus_s102_intel/satus_ic_angle_black_en.png" // Replace this with the path to your image
              alt="Person using AVITA tablet"
              className="h-full"
            />
            <img
              src="/images/satus_s102_intel/satus_ic_HD_black_en.png" // Replace this with the path to your image
              alt="Person using AVITA tablet"
              className="h-full"
            />
          </div>
        </div>
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature5_pc.jpg" // Replace this with the path to your image
            alt="Person using AVITA tablet"
            className="h-full"
          />
        </div>
      </section>

      {/* product-satus-t101-text-image-block-5} */}
      <section className="bg-gray-100 px-6 md:px-12 lg:py-10 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="flex-grow lg:w-full lg:h-full mt-8 lg:mt-0 lg:ml-8 flex justify-center lg:justify-start lg:items-start">
          <img
            src="/images/satus_s102_intel/AVITA_satus_s102_bigcore_feature7_mo.jpg" // Replace this with the path to your image
            alt=""
            className="h-full"
          />
        </div>
        <div className="lg:w-1/2 lg:h-full lg:text-left px-12 leading-loose">
          <div className="max-w-xs">
            <img
              src="/images/satus_s102_intel/keypad.png" // Replace this with the path to your image
              alt="keypad icon"
              className="h-20"
            />
          </div>
          <h2 className="text-2xl text-gray-800 mb-4 max-w-lg">
            Full-size keyboard · Improving accuracy of word processing
          </h2>
          <p className="text-gray-600 max-w-md mx-auto lg:mx-0 mb-6">
            AVITA SATUS S102 also features a full-size keyboard and large
            touchpad that provide a comfortable environment for long-term input
            operations. These features are designed to enhance your work
            efficiency and overall comfort, delivering a superior user
            experience that you'll love.
          </p>
        </div>
      </section>

      {/* product-satus-t101-banner 2*/}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/satus_s102_intel/AVITA_satus_s102_port_io_pc.jpg"
            alt="Satus_T102_Intel ports"
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
