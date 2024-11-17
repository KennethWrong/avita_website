import styles from "./Admiror.module.css";

export default function AdmirorBatteryInfo() {
  return (
    <section className="bg-[#777] text-white flex justify-center items-center h-[720px]">
      {/* rows */}
      <div className="flex flex-row max-w-6xl">
        <div className="basis-1/2 p-10 bg-[url('/images/admiror/ADMIROR05.png')] bg-contain bg-no-repeat bg-center">
          <div className="w-[80%]">
            <h2 className={`${styles.admiror_h2} mb-5`}>
              Productivity maximized by Extended battery
            </h2>

            <p className="leading-8 mb-10">
              Battery life lasts up to 10 hours. Without the need to look around
              for a power source, let your creativity flow and stay
              uninterrupted during your work or a favourite show.
            </p>

            <div className="">
              Up to <br />
              <img src="/images/admiror/10hr_e.png" alt="Battery Life Icon" />
              Battery life <br />
              <small>* Battery life up to 9 hours for 15.6-inch</small>
            </div>
          </div>
        </div>

        <div className="basis-1/2 p-10">
          <h2 className={`${styles.admiror_h2} mb-5`}>
            Connectivity that fits your needs
          </h2>

          <p className="leading-8">
            With two built-in USB-C ports, the ADMIROR is the perfect for work
            on the go. The ADMIROR comes with a USB-C to USB, HDMI and 3.5mm
            audio jack adapter, ensuring the highest connectivity. Meanwhile,
            the USB-C to 3.5mm headphone jack cable allows you to indulge in
            your favorite jam.
            <br />
            <br />
            Colour-coordinated wireless mouse and portable bluetooth speaker
            will be launched soon.
          </p>

          <div className="flex flex-row mt-5">
            <div className="mr-10">
              <img src="/images/admiror/pic_usb_adapter_15.png" alt="Adapter" />
              <p className="txt_white">
                USB-C to <br /> USB/HDMI/3.5mm audio jack adapter
              </p>
            </div>
            <img
              src="/images/admiror/pic_usb_c.png"
              alt="USB-C"
              className="w-28 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
