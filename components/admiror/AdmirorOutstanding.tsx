import styles from "./Admiror.module.css";

export default function AdmirorOutstanding() {
  return (
    <section id="outstanding">
      <div
        className="bg-[url('/images/admiror/bg_admiror02.jpg')]
        bg-no-repeat bg-top h-[720px] flex justify-center"
      >
        <div className="basis-2/5"></div>
        <div className="text-white h-full basis-3/5 flex justify-center">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <h1 className="text-6xl font-light uppercase mb-5">OUTSTANDING</h1>
            <h3 className="text-3xl font-light tracking-wide mb-16">
              Performance that you can count on
            </h3>

            <div className={`${styles.admiror_h2} mb-6`}>
              Incredible performance that brings superb productivity
            </div>

            <p className="leading-8">
              ADMIROR is so much more than its look. Thanks to the new 10th
              generation Intel<sup>TM</sup> Core i5-10210U/i7-10510U processor
              and up to 16GB RAM, the processing speed is greatly enhanced.
              Supporting SSD of up to 1TB, the ADMIROR is your ideal storage
              solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
