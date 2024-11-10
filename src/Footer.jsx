import React from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[45vh] ">
      <div className="w-3/4 h-20 mx-auto flex items-center justify-around bg-gray-300 translate-y-1/2 shadow-lg">
        <div>
          <p className="text-lg font-semibold">Ready to Get Started?</p>
          <p className="text-sm text-gray-700">Talk to us today</p>
        </div>
        <div>
          <NavLink to="/">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">GET STARTED</button>
          </NavLink>
        </div>
      </div>

      <footer className="grid grid-cols-4 bg-[#0a1435] text-white py-10 xs:grid-cols-1 xs:grid-rows-4 xs:h-[70vh] sm:grid-cols-1 sm:grid-rows-4 sm:h-[70vh] md:grid-cols-2 md:grid-rows-2 md:h-[50vh] ">
        <div className="col-span-1 text-center flex flex-col items-center space-y-2 mt-6">
          <h3 className="text-base">Tanvir Azim</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="col-span-1 flex flex-col items-center space-y-3 mt-6">
          <p className="text-sm">Subscribe to get important updates</p>
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded w-3/4 text-gray-800 outline-none"
          />
          <Button className="btn bg-blue-500 text-xs px-4 py-2 text-white rounded mt-2">SUBSCRIBE</Button>
        </div>

        <div className="col-span-1 flex flex-col items-center space-y-3 mt-6 xs:mt-20 sm:mt-20">
          <h4 className="text-base font-semibold">Follow Us</h4>
          <div className="flex space-x-3 mt-2">
            <FaDiscord className="p-1 rounded-full bg-white text-black cursor-pointer" />
            <FaInstagram className="p-1 rounded-full bg-white text-black cursor-pointer" />
            <FaFacebookF className="p-1 rounded-full bg-white text-black cursor-pointer" />
          </div>
        </div>

        <div className="col-span-1 flex flex-col items-center space-y-2 mt-6 xs:mt-[60px] sm:mt-[60px]">
          <p className="text-sm">Call Us</p>
          <h5 className="text-base font-semibold">+8801857165115</h5>
        </div>
      </footer>

      <hr className="border-white" />

      <div className="w-full h-16 bg-[#0a1435] flex justify-around items-center text-white text-sm">
        <p>&copy;2024 Tanvir Azim. All Rights Reserved</p>
        <div>
          <p className="inline-block mr-4">Privacy Policy</p>
          <p className="inline-block">TERMS AND CONDITIONS</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
