import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Heroicons v2

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              TuniFarm
            </Link>
          </div>

         
          <div className="hidden md:flex space-x-6">
            <Link
              to="/about"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Register
            </Link>
          </div>

       
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-green-500">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/shop"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
