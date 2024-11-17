export default function AdmirorProduct() {
  return (
    <section className="text-white bg-black p-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl m-5">#YouCanBe Expressing Yourself</h1>
        <p className="text-lg m-10">
          Be who you are and show your individuality. The choice is yours.
          #YouCanbe
        </p>
        <div>
          <img src="/images/admiror/pic_AMIROR01.png" />
        </div>
        <p className="text-lg  max-w-3xl leading-8 m-5">
          The all-new AVITA ADMIROR takes you on a journey of self-discovery.
          Shattering the norms and constraints of conventional laptops, the
          ADMIROR’s intricate designs and eye-catching colours are yours to
          embrace, because you deserve to be extraordinary!
        </p>

        <div className="m-20">
          <img
            className="hidden md:block"
            src="/images/admiror/pic_feature01_15.png"
          />
          <img
            className="block md:hidden"
            src="/images/admiror/pic_feature01_15_mob.png"
          />
        </div>

        {/* banner anchors */}
        <h1 className="text-5xl mb-20">AVITA ADMIROR brings you</h1>
        <section>
          <div className="flex flex-row max-w-6xl">
            <div className="mx-5 max-w-[33%]">
              <a href="#artistic_design" className="group">
                <img
                  className="group-hover:hidden"
                  src="/images/admiror/btn_artistic_1.png"
                />
                <img
                  className="hidden group-hover:block"
                  src="/images/admiror/btn_artistic_2.png"
                />
              </a>
            </div>

            <div className="mx-5 max-w-[33%]">
              <a href="#usage_experience" className="group">
                <img
                  className="group-hover:hidden"
                  src="/images/admiror/btn_pride_1.png"
                />
                <img
                  className="hidden group-hover:block"
                  src="/images/admiror/btn_pride_2.png"
                />
              </a>
            </div>

            <div className="mx-5 max-w-[33%]">
              <a href="#outstanding" className="group">
                <img
                  className="group-hover:hidden"
                  src="/images/admiror/btn_outstanding_1.png"
                />
                <img
                  className="hidden group-hover:block"
                  src="/images/admiror/btn_outstanding_2.png"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
