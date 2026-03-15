import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-black pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">ElectroHub</h2>
          <p>
            Your one-stop destination for the latest gadgets and electronics.
            Quality products, unbeatable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Products</a></li>
            <li><a href="#" className="hover:text-gray-400">Brands</a></li>
            <li><a href="#" className="hover:text-gray-400">Deals</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-gray-400">Warranty</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe for the latest deals and updates.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-500 transition">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-700"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-white text-sm">
        &copy; {new Date().getFullYear()} ElectroHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
