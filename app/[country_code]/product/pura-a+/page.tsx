import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura-a-plus/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura-a-plus/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />
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

      <section className="flex justify-center items-center h-[600px] bg-[#EEEEEE]">
        <div className="flex h-full w-2/3 p-10 text-gray-700">
          <div className="basis-1/2 flex justify-center items-center mr-10">
            <img
              src="/images/pura-a-plus/PURA_A_plus_product_2_hk_mo.png"
              alt="PURA_A_plus_product_2_hk_pc"
            />
          </div>
          <div className="flex flex-col justify-center basis-1/2">
            <h2 className="text-3xl mb-14">
              Immerse Yourself in a World of Color and Creativity!
            </h2>

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

      <section className="bg-white h-[700px] text-gray-500 flex justify-center items-center">
        <div className="h-full w-3/4 flex flex-col justify-center items-center">
          <p className="leading-8 mb-10 w-1/2 text-center">
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
    </main>
  );
}
