import styles from "./Admiror.module.css";

export default function AdmirorBatteryInfo() {
  return (
    <section className="bg-[#777] text-white flex justify-center items-center h-[720px]">
      {/* TODO: Make image work :') */}
      {/* <div className="absolute left-[66%] z-10 w-full transform -translate-x-1/2"> */}
      {/*   <img src="/images/admiror/ADMIROR05.png" alt="Laptop" className="" /> */}
      {/* </div> */}
      {/* rows */}
      <div className="flex flex-row max-w-6xl relative ">
        <div className="basis-1/2 p-10  mr-20">
          <div>
            <h2 className={`${styles.admiror_h2}`}>
              Productivity maximized by Extended battery
            </h2>

            <p>
              Battery life lasts up to 10 hours. Without the need to look around
              for a power source, let your creativity flow and stay
              uninterrupted during your work or a favourite show.
            </p>

            <div>
              Up to <br />
              <img src="/images/admiror/10hr_e.png" alt="Battery Life Icon" />
              <br />
              Battery life <br />
              <small>* Battery life up to 9 hours for 15.6-inch</small>
            </div>
          </div>
        </div>

        <div className="basis-1/2 p-10 ">
          <h2 className={`${styles.admiror_h2}`}>
            Connectivity that fits your needs
          </h2>

          <p>
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

          <div>
            <img src="/images/admiror/pic_usb_adapter_15.png" alt="Adapter" />
            width="220px"
            <p className="txt_white">
              USB-C to <br /> USB/HDMI/3.5mm audio jack adapter
            </p>
            <img
              src="/images/admiror/pic_usb_c.png"
              width="100px"
              alt="USB-C"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
