import Image from "next/image";
import { FaMap, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center mb-10 text-gray-600 leading-relaxed">
      <img
        className="lg:w-4/6 my-10 w-full"
        src="/images/support/avita_support_center_feature_img2.jpg"
      />
      <div className="lg:w-4/6 w-full px-4 text-lg">
        <p className=" text-3xl text-center">
          [Notice]Upgraded Technical Support and Maintenance Services
        </p>
        <br />
        <p>
          In order to enhance our service quality, starting from 9 Aug 2022, the
          technical support and maintenance service of AVITA laptops will be
          handled by our in-house Chief Product Design Engineer and customer
          service team. For technical inquiries and maintenance service
          arrangements, please kindly contact:
        </p>
        <br />
        <p>AVITA: hk_support@avita.com</p>
        <br />
        <p className="mb-10">
          Our professional team will provide you with the most intimate service
          to your satisfaction!
        </p>
        <br />
        <p className="text-3xl mb-2">Service Center</p>
        <div className="flex flex-col ml-3">
          <div className="flex flex-row items-center">
            <FaMap className="h-5 w-5" />
            <span className="ml-3">Customer Service (HK & Macau)</span>
          </div>
          <div className="flex flex-row items-center">
            <FaClock className="h-5 w-5" />
            <span className="ml-3">-</span>
          </div>
          <div className="flex flex-row items-center">
            <FaPhone className="h-5 w-5" />
            <span className="ml-3">Repair Enquiry & Appointment</span>
          </div>
          <div className="flex flex-row items-center">
            <FaEnvelope className="h-5 w-5" />
            <span className="ml-3">hk_support@avita-tech.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
