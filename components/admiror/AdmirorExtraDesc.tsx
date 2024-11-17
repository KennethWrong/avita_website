import styles from "./Admiror.module.css";
export default function AdmirorExtraDesc() {
  return (
    <section className="bg-white flex flex-col justify-center items-center p-36 min-h-96">
      <img className="mb-5" src="/images/admiror/ADMIROR02_red.png" />
      <div className="flex flex-row max-w-6xl">
        <div className="mr-24">
          <h2 className={styles.admiror_h2}>
            Ultra-compact body for unsurpassed portability
          </h2>

          <span className="leading-8">
            The ultra-portable ADMIROR is housed in a light metallic chassis. At
            merely 9mm at its thinnest part, 14” and 15.6” weighs from just
            1.32kg and 1.79kg respectively, making it extremely handy to carry
            around as your favourite gadget to roam the world over.
          </span>
        </div>

        <div>
          <h2 className={styles.admiror_h2}>
            Push your limits with a wider view
          </h2>

          <span className="leading-8">
            Push the limits by garnering a wider view. The 7mm narrow bezel on
            the ADMIROR gives your maximised screen areas and eliminates
            distraction for an immersive viewing experience, whether you are at
            work or just want to sit back and chill.
          </span>
        </div>
      </div>
    </section>
  );
}
