import styles from "./Admiror.module.css";

export default function AdmirorWinHello() {
  return (
    <section className="text-white">
      <div
        className="bg-[url('/images/admiror/bg_admiror03.jpg')]
        bg-no-repeat bg-top h-[720px] flex justify-center"
      >
        <div className="flex flex-row  w-full">
          <div className=" basis-1/2 flex justify-end items-end">
            <div className=" max-w-xl p-10 mb-16">
              <div className={`${styles.admiror_h2} mb-5`}>
                One-touch access with Windows Hello
              </div>

              <p className="leading-8 mb-5">
                Gone are the days when password is used for login. ADMIROR
                incorporates fingerprint reader and works seamlessly with
                Windows Hello for both convenient log-in and strengthened
                privacy protection. You can rest assured that every piece of
                work and personal data is well protected.
              </p>

              <div className="flex flex-row">
                <img
                  src="/images/admiror/pic_window_hello.png"
                  className="mr-10"
                />
                <img src="/images/admiror/pic_fingerprint.png" />
              </div>
            </div>
          </div>

          <div className="basis-1/2"></div>
        </div>
      </div>
    </section>
  );
}
