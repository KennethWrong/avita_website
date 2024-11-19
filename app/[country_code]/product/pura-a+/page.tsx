import ProductBanner from "@/components/ProductBanner";

export default function Home() {
  return (
    <main>
      <ProductBanner
        desktopImage={"/images/pura-a-plus/AVITA_pura-a-plus-pc_en.jpg"}
        mobileImage={"/images/pura-a-plus/AVITA_pura-a-plus-mo_en.jpg"}
        altText={"Pura A+ Banner"}
      />

      <section className="bg-white flex justify-center items-center">
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
    </main>
  );
}
