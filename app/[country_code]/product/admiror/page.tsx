export default function Home() {
  return (
    <main className="flex flex-col">
      {/* product-liber-banner */}
      <section>
        <div className="w-screen h-auto top-0 left-0 relative">
          <img
            className="w-full"
            src="/images/admiror/banner_admiror_15_e.jpg"
            alt="Admiror Banner"
          />
        </div>
      </section>

      {/* product-admiror-computer */}
      <section className="text-white bg-black p-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl m-5">#YouCanBe Expressing Yourself</h1>
          <p className="text-lg m-10">
            Be who you are and show your individuality. The choice is yours.
            #YouCanbe
          </p>
          <div className="Fadein" style={{ opacity: 0.597166 }}>
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
              className="hidden-sm-down"
              src="/images/admiror/pic_feature01_15.png"
            />
            {/* <img */}
            {/*   className="hidden-md-up" */}
            {/*   src="/images/admiror/pic_feature01_15_mob.png" */}
            {/* /> */}
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

      {/* artistic_design */}
      <section className="text-white" id="artistic_design">
        {/* Background Image */}
        <div
          className="bg-[url('/images/admiror/bg_gothic.jpg')] bg-no-repeat 
        bg-center bg-origin-border bg-cover p-24"
        >
          <div className="flex flex-col">
            <div className="text-center w-full">
              <h1 className="text-4xl font-bold">An artistic design</h1>
              <h3 className="text-xl font-medium mb-4">
                to flaunt your identity
              </h3>
            </div>

            <div className="flex flex-row  items-center justify-center">
              <img
                className="bc-computer-image admiror01"
                src="/images/admiror/ADMIROR03.png"
                alt="ADMIROR Design"
              />
              <div className="max-w-xl ml-24">
                <h2
                  className="text-[#7accc8] text-2xl leading-8 tracking-[0.1em]
                    font-light uppercase text-left pb-5"
                >
                  Exquisite design that combines Gothic architectural aesthetics
                </h2>
                <p className="leading-loose text-white text-left">
                  Inspired by the magnificence of the Gothic architecture, the
                  brand new AVITA ADMIROR series combines contemporary
                  architectural aesthetics into its state-of-the-art technology.
                  The ADMIROR features an ultra-slim body in a modern design,
                  paying attention to the smallest detail. The hinge concealed
                  between the screen and the keyboard references the renowned
                  flying buttress of the Gothic design. The essence of the grand
                  and tall Gothic architecture is reflected in the laptop's
                  slender body that contrasts with the rounded hedge, mimicking
                  the iconic pointed arches. With a unique appearance inspired
                  by epoch-making architectural art, ADMIROR is an iconic design
                  for fashionistas and those who crave for an individual style.
                </p>

                <h2
                  className="text-[#7accc8] text-2xl leading-8 tracking-[0.1em]
                    font-light uppercase text-left pb-5 mt-16"
                >
                  Stand out with colors
                </h2>
                <p className="leading-loose text-white text-left">
                  ADMIROR makes sure your individuality gets all the attention.
                  The new series offers unique color options to express your
                  personal style. Be it the rebellious Blazing Brown or Flaming
                  Copper, the eye-catching Delight Pink or Passionate Red, the
                  ADMIROR simply complements any outfit you choose to wear.
                  (Choice of colours of 14”: Flaming Copper, Delight Pink and
                  Blazing Brown; Choice of colours of 15.6”: Flaming Copper,
                  Delight Pink and Passionate Red)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
