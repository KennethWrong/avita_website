import styles from "./Admiror.module.css";

export default function AdmirorArtisticDesign() {
  return (
    <section className="text-white" id="artistic_design">
      {/* Background Image */}
      <div
        className="bg-[url('/images/admiror/bg_gothic.jpg')] bg-no-repeat 
        bg-center bg-origin-border bg-cover p-24"
      >
        <div className="flex flex-col">
          <div className="text-center w-full">
            <h1 className="text-4xl font-bold uppercase mb-5">
              An artistic design
            </h1>
            <h3 className="text-3xl font-medium mb-4">
              to flaunt your identity
            </h3>
          </div>

          <div className="flex flex-row items-center justify-center ">
            <img
              className="hidden md:block transform translate-x-8 -translate-y-24"
              src="/images/admiror/ADMIROR03.png"
              alt="ADMIROR Design"
            />

            <div className="text-center md:text-left md:max-w-xl md:ml-24">
              <h2 className={`${styles.admiror_h2} pb-5 mt-16`}>
                Exquisite design that combines Gothic architectural aesthetics
              </h2>
              <p className="leading-loose text-white">
                Inspired by the magnificence of the Gothic architecture, the
                brand new AVITA ADMIROR series combines contemporary
                architectural aesthetics into its state-of-the-art technology.
                The ADMIROR features an ultra-slim body in a modern design,
                paying attention to the smallest detail. The hinge concealed
                between the screen and the keyboard references the renowned
                flying buttress of the Gothic design. The essence of the grand
                and tall Gothic architecture is reflected in the laptop's
                slender body that contrasts with the rounded hedge, mimicking
                the iconic pointed arches. With a unique appearance inspired by
                epoch-making architectural art, ADMIROR is an iconic design for
                fashionistas and those who crave for an individual style.
              </p>

              <h2 className={`${styles.admiror_h2} pb-5 mt-16`}>
                Stand out with colors
              </h2>
              <p className="leading-loose text-white">
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
  );
}
