import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-300 py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between md:items-start mb-8 gap-6">
          
          {/* Logo / App Name */}
          <div>
            <h1 className="text-2xl font-bold text-green-500">Super Tech</h1>
            <p className="text-gray-400 mt-2">
              Your one-stop shop for the latest tech gadgets and accessories.
            </p>
          </div>

          {/* Navigation Links */}
          {/* <div className="flex flex-col md:flex-row gap-6"> */}
            <div>
              <h3 className="text-white font-semibold mb-2">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/items" className="hover:text-white transition">
                    Items
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/add-items" className="hover:text-white transition">
                    Add Item
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Social</h3>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:text-white transition">
                    🌐
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    📧
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    📱
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    📸
                  </a>
                </li>
              </ul>
            </div>
          </div>
        {/* </div> */}

        {/* Divider */}
        <div className="border-t border-gray-700 mb-4"></div>

        {/* Bottom Section */}
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Super Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
