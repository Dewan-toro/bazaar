import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { logoLight, paymentLogo } from "../assets";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] p-10 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logolight" />
          <p className="text-white text-sm tracking-wide">© Bazaar.com</p>
          <img className="w-56" src={paymentLogo} alt="PaymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Jakarta, Indonesia</p>
            <p>Mobile: +62 123 456 789</p>
            <p>Phone: +62 123 456 789</p>
            <p>Mail: hallo@bazaar.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-white">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <BsPersonFill />
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <BsPaypal className="text-lg" />
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <FaHome className="text-lg" />
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <MdLocationOn className="text-lg" />
              Help & Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm mb-2"
            placeholder="Enter your email"
            type="text"
          />
          <button className="text-sm border border-t-0 hover:bg-gray-900 text-white active:bg-white active:text-black duration-300 cursor-pointer px-4 py-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
