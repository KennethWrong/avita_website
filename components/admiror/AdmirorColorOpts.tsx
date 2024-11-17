import styles from "./Admiror.module.css";

export default function AdmirorColorOpts() {
  return (
    <section id="offer" className="bg-[#777] text-white h-[720px]">
      <div
        className="bg-[url('/images/admiror/bg_admiror06_15.jpg')] bg-no-repeat 
        bg-contain bg-[70%] h-full flex justify-center"
      >
        <div className="flex flex-row h-full w-3/4">
          <div className="basis-1/2 pl-[15%]">
            <div>
              <h2 className={`${styles.admiror_h2} mb-5`}>
                VARIOUS COLOURS AVAILABLE NOW
              </h2>

              <p className="leading-8">
                14-inch: Flaming Copper, Delight Pink, Blazing Brown
                <br />
                15.6-inch: Flaming Copper, Delight Pink, Passionate Red
              </p>
            </div>

            <img
              src="/images/admiror/pic_offer_hk_15_en.png"
              className="w-[60%] mb-5 mt-10"
            />
            <div className="">
              <a href="" className="text-[#7accc8] mr-3 hover:underline">
                Buy now &gt;
              </a>
              <a
                href="/hk/product/admiror/where_to_buy"
                className="hover:underline"
              >
                Where to buy &gt;
              </a>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </div>
    </section>
  );
}
