import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura-a-plus/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura-a-plus/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />

      {/* Section 1 */}
      <section className="bg-white flex justify-center items-center text-gray-500">
        <div className="flex flex-col justify-center items-center max-w-3xl p-16">
          <h3 className="text-3xl text-center mb-8">
            Experience Power in Simplicity with PURA A+ Laptop!
          </h3>

          <div className="mb-8">
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_1_hk.png"
              alt="PURA_A_plus_product_1_hk"
              className="mb-2"
            />

            <small>*Demo image of the AVITA PURA A+ 15.6”</small>
          </div>

          <div className="leading-8">
            <p className="text-center mb-8">
              Power up your life with PURA A+, the new member of our PURA series
              which provides users with both simplicity and power. When it comes
              to student life, having a laptop that supports your all-round
              education, learning, and development is important.
            </p>
            <p className="text-center">
              PURA A+ is your ideal laptop choice for students who want
              simplicity and power in one device. With its sleek, lightweight,
              and durable design, PURA A+ is the perfect choice for individuals
              who are always on-the-go. Whether you're working, reading books,
              or watching movies, PURA A+ can meet all your needs. From music
              production to sports knowledge, photography, and beyond, PURA A+
              can support your interests and help you develop new skills.
              Whether you're a student or a recent graduate starting your
              career, PURA A+ is the ultimate companion for achieving your goals
              and powering up your future.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex justify-center items-center bg-[#EEEEEE]">
        <div className="flex h-full w-2/3 py-24 text-gray-700">
          <div className="hidden md:flex md:basis-1/2  justify-center items-center mr-10 ">
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_2_hk_mo.png"
              alt="PURA_A_plus_product_2_hk_pc"
            />
          </div>
          <div className="flex flex-col justify-center md:basis-1/2 ">
            <h2 className="text-3xl mb-14">
              Immerse Yourself in a World of Color and Creativity!
            </h2>

            <img
              src="/images/pura-a-plus/PURA_A_plus_product_2_hk_mo.png"
              alt="PURA_A_plus_product_2_hk_pc"
              className="sm:block md:hidden mb-10"
            />

            <p className="leading-8 mb-5">
              For individuals looking for a laptop that stands out, PURA A+ is
              the ideal choice. The new PURA A+ laptop comes in five vibrant
              colors, each with its own unique personality and style designed to
              inspire creativity in its users. Expressing your unique style and
              unleashing your creativity, only with PURA A+!
            </p>

            <p className="">
              <small>*Demo image of the AVITA PURA A+ 15.6”</small>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-white text-gray-500 flex justify-center items-center py-20 px-5">
        <div className="h-full w-3/4 flex flex-col justify-center items-center">
          <p className="leading-8 mb-10 md:w-1/2 text-center">
            Trophy Purple represents luxury and sophistication, evoking a sense
            of achievement and success. Award Pink expresses youthful and
            playful, specifically designed for those who want to add a touch of
            fun to their lives. Medal Black exudes elegance and className, while
            evoking a feeling of power and sophistication - perfect for making a
            bold statement. Badge Silver is associated with achievement and
            success, perfect for those who want to evoke a sense of
            accomplishment and recognition. Ribbon Blue creates a peaceful and
            inviting environment, perfect for those who want to feel safe,
            friendly, and relaxed.
          </p>

          <div>
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_3.png"
              alt="PURA_A_plus_product_3"
            />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-[#EEEEEE] flex justify-center items-center">
        <div className="flex h-full text-gray-700">
          <div className="md:basis-1/2 py-10 flex justify-end items-center">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_1_mo.jpg"
              alt="PURA_A_plus_feature_1_mo"
              className="h-full object-contain hidden md:block"
            />
          </div>
          <div className="md:basis-1/2 flex sm:justify-center md:justify-start md:pl-10">
            <div className="h-full sm:w-[90%] md:w-3/5 flex flex-col justify-center items-start py-10">
              <h2 className="text-3xl mb-14">
                Maximize Your Abilities- Accomplish Your Goals with Skill and
                Precision!
              </h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_1_mo.jpg"
                alt="PURA_A_plus_feature_1_mo"
                className="md:hidden mb-10"
              />

              <p className="leading-8 mb-5">
                PURA A+ is equipped with powerful features that help students
                achieve their academic goals efficiently. The laptop's
                high-performance CPU ensures productivity, with options
                available including the 12th Gen Intel® Core™ processor with
                Intel® Iris® Xe Graphics.
              </p>

              <div className="text-purple-900">
                <p>Up to</p>
                <p className="text-4xl">Intel i5-1235U</p>
                <p>
                  12<sup>th</sup> Gen INTEL®CORE™ PROCESSOR
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 -- windows 11 */}
      <section className="text-gray-500">
        <div className="flex py-20 ">
          <div className="p-10 md:p-0 md:basis-1/2 flex justify-end items-center ">
            <div className="md:w-3/5">
              <h2 className="text-3xl mb-14">
                Stay Organized and Driven to Achieve Your Dreams!
              </h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_4_mo.jpg"
                alt="PURA_A_plus_feature_4"
                className="block md:hidden mb-10"
              />

              <div className="leading-8 mb-10">
                <p className="">
                  Whether you are students, professionals, or busy parents, PURA
                  A+ helps you stay organized to achieve your dreams. With a
                  user-friendly interface and Windows 11 Home, PURA A+ helps you
                  stay productive and on top of your game.
                </p>
                <p className="">
                  The To Do widget keeps you focused and on track, ensuring you
                  never miss an important deadline.
                </p>

                <a href="/hk/product/pura-a+/spec" className="text-blue-500">
                  Tech Spec &gt;
                </a>
              </div>

              <div className="text-purple-900">
                <p>Operating System</p>
                <p className="text-4xl">Windows 11 Home</p>
                <a
                  href="https://support.microsoft.com/en-us/windows/windows-10-and-windows-11-in-s-mode-faq-851057d6-1ee9-b9e5-c30b-93baebeebc85#WindowsVersion=Windows_11"
                  target="_blank"
                  className="text-blue-500"
                >
                  Know more &gt;
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:basis-1/2 md:flex justify-center items-center p-20">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_4_mo.jpg"
              alt="PURA_A_plus_feature_4"
              className=""
            />
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section className="bg-[#EEEEEE] flex justify-center items-center">
        <div className="flex h-full text-gray-700">
          <div className="md:basis-1/2 py-10 flex justify-end items-center">
            <img
              src="/images/pura-a-plus/PURA_A_plus_feature_2_mo.jpg"
              alt="PURA_A_plus_feature_1_mo"
              className="w-full object-contain hidden md:block"
            />
          </div>
          <div className="md:basis-1/2 flex sm:justify-center md:justify-start md:pl-10">
            <div className="h-full sm:w-[90%] md:w-3/5 flex flex-col justify-center items-start py-10">
              <h2 className="text-3xl mb-14">
                Unleash Your Potential with BIG Storage and Flexibility!
              </h2>

              <img
                src="/images/pura-a-plus/PURA_A_plus_feature_2_mo.jpg"
                alt="PURA_A_plus_feature_1_mo"
                className="md:hidden mb-10"
              />

              <div className="leading-8 mb-5">
                <p>
                  You always have the ability to enhance your capabilities. PURA
                  A+ provides you with big storage capacity, ensuring that you
                  can store all your important files and documents without
                  worrying about running out of space. With up to 512GB of SSD
                  storage, you can keep all your photos, videos, and music in
                  one place.
                </p>
                <p>
                  This feature is perfect for individuals who need to store
                  large files or work on multiple projects simultaneously.
                </p>
              </div>

              <div className="text-purple-900 w-full flex sm:flex-col md:flex-row">
                <div className="basis-1/2 mb-8 md:mb-0">
                  <p className="">Up to</p>
                  <p className="text-4xl">
                    512<span className="text-sm">GB</span>
                  </p>
                  <p className="">SSD</p>
                </div>

                <div className="basis-1/2">
                  <p className="">Up to</p>
                  <p className="text-4xl">
                    8<span className="text-sm">GB</span>
                  </p>
                  <p className="">RAM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section className="bg-white text-gray-500 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center py-24 md:w-1/3 px-10 md:px-0">
          <h3 className="text-3xl text-center mb-8">
            The OPTIMAL All-round Laptop for Students on-the-go!
          </h3>

          <div className="mb-8">
            <img
              src="/images/pura-a-plus/PURA_A_plus_io_ports.png"
              alt="PURA_A_plus_io_ports"
            />
          </div>

          <div className="leading-8 text-center">
            <p>
              Designed specifically for students who are always on the move,
              PURA A+ is the ultimate all-in-one laptop for delivering
              presentations and staying productive at school. With its multi-I/O
              ports, connecting to different devices is effortless. Its reliable
              performance and 178-degree ultra-wide viewing angle make it the
              perfect device for students who demand high-quality performance.
            </p>
            <p>
              Featuring a 14” and 15.6” Full HD IPS panel, PURA A+ delivers a
              wider, more vivid, and immersive viewing experience. The
              full-sized Edge-to-edge backlit keyboard makes typing more
              comfortable and efficient. It also maximizes the available Space
              for the keys and minimizes the overall footprint of the keyboard,
              making it more compact and streamlined. With the backlit keys,
              which make typing easier in any conditions and increase your
              productivity. Whether you're exploring the internet or developing
              your skills in various subjects, PURA A+ makes it easier to stay
              focused, learn new things, and achieve your academic goals.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
