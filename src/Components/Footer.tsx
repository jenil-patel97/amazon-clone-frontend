import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="bg-[#232f3e] text-white p-10 mt-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-5">
              <h4 className="font-semibold">Connect with Us</h4>
              <p className="hover:underline cursor-pointer mt-3">Facebook</p>
              <p className="hover:underline cursor-pointer mt-2">Twitter</p>
              <p className="hover:underline cursor-pointer mt-2">Instagram</p>
            </div>
            <div className="mb-5">
              <h4 className="font-semibold">Make Money with Us</h4>
              <p className="hover:underline cursor-pointer mt-3">
                Sell on Amazon
              </p>
              <p className="hover:underline cursor-pointer mt-2">
                Advertise Your Products
              </p>
              <p className="hover:underline cursor-pointer mt-2">
                Amazon Global Selling
              </p>
              <p className="hover:underline cursor-pointer mt-2">
                Amazon Pay on Merchants
              </p>
            </div>
            <div className="mb-5">
              <h4 className="font-semibold">Let Us Help You</h4>
              <p className="hover:underline cursor-pointer mt-3">
                Your Account
              </p>
              <p className="hover:underline cursor-pointer mt-2">
                Returns Centre
              </p>
              <p className="hover:underline cursor-pointer mt-2">
                Amazon App Download
              </p>
              <p className="hover:underline cursor-pointer mt-2">Help</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#232f3e] text-white px-10">
        <div className="text-center">Copyright © 2022 All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
