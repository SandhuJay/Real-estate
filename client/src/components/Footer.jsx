import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:text-gray-400">About Us</a></li>
             
              <li className="mb-2"><a href="/contactus" className="hover:text-gray-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Properties</h2>
            <ul>
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Residential</a></li>
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Commercial</a></li>
              <li className="mb-2"><a href="/" className="hover:text-gray-400">Industrial</a></li>
             
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
            <li className="mb-2"><a href="/about" className="hover:text-gray-400">Testimonials</a></li>
            <li className="mb-2"><a href="https://www.nar.realtor/magazine/real-estate-news" className="hover:text-gray-400">News</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-400">FAQ</a></li>
            
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="grid grid-cols-1 gap-2">
             
        <div className="flex items-center">
          <a href="https://twitter.com/JaySand86366118">
            <div className="flex items-center">
            <FaXTwitter  size={20} className="icon hover:text-black"/>
              <span className="ml-2  hover:text-black">Twitter</span>
            </div>
          </a>
        </div>
        <div className="flex items-center">
          <a href="https://www.instagram.com/jaysandhu7774/">
            <div className="flex items-center">
              <FaInstagram size={20} className='icon hover:text-red-400' />
              <span className="ml-2  hover:text-red-400">Instagram</span>
            </div>
          </a>
              </div>
              <div className="flex items-center">
              <a href="https://www.facebook.com">
            <div className="flex items-center">
              <FaFacebookF size={20} className="icon hover:text-blue-500"/>
              <span className="ml-2 hover:text-blue-500">Facebook</span>
            </div>
          </a>
        </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-5 pt-6 text-center">
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Real Estate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
