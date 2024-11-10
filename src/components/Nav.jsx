import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgMenu } from "react-icons/cg";
import { TiDelete } from "react-icons/ti";
import Modal from '@mui/material/Modal';

function Nav() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-between items-center p-4 w-[700px] h-10 ">
      {/* Navbar Links (Visible on larger screens) */}
      <ul className=" w-[90%] h-8  flex gap-5 justify-around xs:hidden sm:hidden md:hidden">
        <li>
          <NavLink to="/" className="text-gray-700 hover:text-blue-600 text-lg">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-gray-700 hover:text-blue-600">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="text-gray-700 hover:text-blue-600">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/products" className="text-gray-700 hover:text-blue-600">Products</NavLink>
        </li>
        <li>
          <NavLink to="/newcart" className="flex items-center text-gray-700 hover:text-blue-600">
            <MdOutlineShoppingCart size={24} />
            <span className="bg-blue-500 rounded-full h-4 w-4 flex items-center justify-center text-[8px] text-white -ml-1">
              10
            </span>
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon (Visible on smaller screens) */}
      <div className=" lg:hidden xl:hidden 2xl:hidden xs:ml-[300px] sm:ml-[440px] md:ml-[555px] w-[50px]">
        <CgMenu className="text-2xl cursor-pointer text-gray-700" onClick={handleOpen} />
      </div>

      {/* Modal for Mobile Menu */}
      <Modal open={open} onClose={handleClose}>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-72 p-6 shadow-lg rounded-lg">
          {/* Close Icon */}
          <TiDelete
            onClick={handleClose}
            className="text-red-500 cursor-pointer absolute top-3 right-3 text-xl"
          />
          {/* Mobile Menu Links */}
          <ul className="flex flex-col gap-4 text-sm text-gray-700 mt-4">
            <li>
              <NavLink to="/" onClick={handleClose} className="hover:text-blue-600">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleClose} className="hover:text-blue-600">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleClose} className="hover:text-blue-600">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={handleClose} className="hover:text-blue-600">Products</NavLink>
            </li>
            <li>
              <NavLink to="/cart" onClick={handleClose} className="flex items-center hover:text-blue-600">
                <MdOutlineShoppingCart size={20} />
                <span className="bg-blue-500 rounded-full h-4 w-4 flex items-center justify-center text-[8px] text-white -ml-1">
                  10
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
}

export default Nav;

