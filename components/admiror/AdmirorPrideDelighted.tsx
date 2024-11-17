import styles from "./Admiror.module.css";

export default function AdmirorPrideDelighted() {
  return (
    <section
      id="usage_experience"
      className="bg-white flex flex-col justify-center items-center"
    >
      {/* titles */}
      <div className="flex flex-col items-center">
        <h3 className="text-3xl font-light tracking-wide mb-5">
          Usage Experience that you can feel{" "}
        </h3>
        <h1 className="text-6xl font-light uppercase">PRIDE &amp; DELIGHTED</h1>
      </div>

      {/* rows */}
      <section className="my-24">
        {/* row 1 */}
        <div className="flex flex-row max-w-6xl h-96 bg-[#f2f2f2]">
          <img
            src="/images/admiror/bg_A1_15_e.jpg"
            alt="A1_15"
            className="basis-2/3"
          />

          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              Realistic image with stunning clarity
            </h2>

            <span className="leading-6">
              The ADMIROR series offers a 14-inch and a 15.6-inch 16:9 FHD IPS
              display, both with extra-wide 178-degree viewing angle. The
              lifelike image quality, support up to 72% NTSC color gamut, offers
              an enjoyable viewing experience browsing websites or watching
              video clips.
            </span>
          </div>
        </div>

        {/* row 2 */}
        <div className="flex flex-row max-w-6xl h-96 bg-[#f2f2f2]">
          <img
            src="/images/admiror/bg_B1.jpg"
            alt="bg_B1"
            className="basis-1/3"
          />

          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              Extra-large Touchscreen
            </h2>

            <span className="leading-6">
              Explore endless possibilities with Precision Touchpad (PTP)
              technology which supports up to four-finger smart gestures. This
              feature allows you to navigate websites and videos with greater
              ease.
            </span>
          </div>
          <img
            src="/images/admiror/bg_B3_15_e.jpg"
            alt="B3_15_e"
            className="basis-1/3"
          />
        </div>

        {/* row 3 */}
        <div className="flex flex-row max-w-6xl h-96 bg-[#f2f2f2]">
          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              Backlit keyboard for unbounded exploration
            </h2>

            <span className="leading-6">
              The backlit design of the Full Size keyboard enables you to locate
              each keycap in dimly-lit environments. Work and entertainment are
              no longer constrained by time and place. This feature makes
              uninterrupted workflow possible and helps you explore the world
              anytime anywhere.
            </span>
          </div>

          <img
            src="/images/admiror/bg_C2_15_e.jpg"
            alt="C2_15_e"
            className="basis-1/3"
          />

          <div className="flex flex-col justify-center items-center p-10 basis-1/3">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              Exceptional audio-visual ex erience
            </h2>

            <span className="leading-6">
              Music is a big part of an identity. ADMIROR's 2 full range
              speakers and 4 passive boosters are set to bring out the best
              audio-visual experience for your enjoyment.
            </span>
          </div>
        </div>
      </section>
    </section>
  );
}
