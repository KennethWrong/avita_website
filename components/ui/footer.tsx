import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 px-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="container mx-auto">
          {/* Top section with logo and social icons */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-3xl font-bold text-purple-700">AVITA</div>
            <div className="flex space-x-4">
              {/* Placeholder for social icons */}
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                {/* Placeholder for Facebook icon */}
                FB
              </div>
              <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center">
                {/* Placeholder for Instagram icon */}
                IG
              </div>
            </div>
          </div>

          {/* Links and language/copyright section */}
          <div className="flex justify-between items-start text-sm">
            {/* Links section in three columns, aligned to the left */}
            <div className="flex flex-col sm:flex-row sm:space-x-12">
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:underline">
                  Products
                </Link>
                <Link href="#" className="hover:underline">
                  What's New
                </Link>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:underline">
                  Where To Buy
                </Link>
                <Link href="#" className="hover:underline">
                  AVITA Store
                </Link>
                <Link href="#" className="hover:underline">
                  Contact AVITA
                </Link>
              </div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className="hover:underline">
                  Support
                </Link>
                <Link href="#" className="hover:underline">
                  Repair Terms & Conditions
                </Link>
                <Link href="#" className="hover:underline">
                  Terms of Use Notice
                </Link>
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Language and copyright section aligned to the right */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right mt-6 sm:mt-0">
              <div className="flex items-center mb-2">
                {/* Placeholder for globe icon */}
                <div className="bg-gray-300 w-4 h-4 rounded-full mr-2"></div>
                <span>HONG KONG</span>
              </div>
              <p className="text-xs text-gray-600">
                © AVITA TECHNOLOGIES INTERNATIONAL CO., LTD. ALL RIGHTS
                RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
