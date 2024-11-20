import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura-a-plus/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura-a-plus/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />
      {/* TODO: responsiveness */}
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
    </main>
  );
}
