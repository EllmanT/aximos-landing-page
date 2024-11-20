import React from "react";
import { socials } from "../constants";
import clsx from "clsx";
import { Link } from "react-scroll";

const Footer = () => {
  return (
<footer 
className=
//"bottom-0 z-50  w-full py-6 p-4  bg-red-100 shadow-lg"
" bottom-0 left-0 z-50 w-full py-6 p-4   transition-all duration-500 max-lg:py-6"

>
  <div className="flex w-full max-md:flex-col justify-between ">
    {/* Left Section: Address Details */}
    <div className="flex flex-col items-center text-center text-gray-500 gap-2 max-md:mt-10 w-full md:w-1/4">
      <div className="text-md mt-4">
        <p>14 Arundel Road</p>
        <p>Harare</p>
      </div>
    </div>
    
    {/* Middle Section: Links to Sections */}
    <div className="flex flex-col items-center text-center text-gray-500 gap-4 max-md:mt-10 w-full md:w-1/3">
      <ul className="flex flex-col items-center gap-3 cursor-pointer">
      <li><Link to="hero" smooth={true} duration={500} offset={0} className="text-gray-500 hover:text-red-700">Home</Link></li>
      <li><Link to="features" smooth={true} duration={500} offset={-150} className="text-gray-500 hover:text-red-700">Features</Link></li>
        <li><Link to="pricing" smooth={true} duration={500} offset={-10} className="text-gray-500 hover:text-red-700">Pricing</Link></li>
       
       
      </ul>
      
    </div>
    <div className="flex flex-col items-center text-center text-gray-500 gap-4 max-md:mt-10 w-full md:w-1/3">
      <ul className="flex flex-col items-center gap-3 cursor-pointer">
      <li><Link to="faq" smooth={true} duration={500} offset={-10} className="text-gray-500 hover:text-red-700">FAQ</Link></li>
        <li><Link to="testimonials" smooth={true} duration={500} offset={-50} className="text-gray-500 hover:text-red-700">Testimonials</Link></li>
        <li><Link to="contact" smooth={true} offset={-50} duration={500} className="text-gray-500 hover:text-red-700">Contact Us</Link></li>

      </ul>
      
    </div>
    
    {/* Right Section: Contact Details */}
    <div className="flex flex-col items-center text-center text-gray-500 gap-4 max-md:mt-10 w-full md:w-1/4">
      {/* Contact Details */}
      <div className="text-md">
        <p>Phone: <span className="font-semibold">+1 (800) 123-4567</span></p>
        <p>Email: <span className="font-semibold">sales@axissol.com</span></p>
      </div>
      
      {/* Social Links */}
      <ul className="flex flex-1 justify-center gap-8 max-md:mt-10 md:justify-center">
        {socials.map(({ id, url, icon, title }) => (
          <li id={id} key={id}>
            <a href={url} className="social-icon">
              <img
                src={icon}
                alt={title}
                className="size-1/3 object-contain"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  {/* Right Section: Privacy & Terms */}
  <div className="small-compact flex items-center text-center text-gray-500 gap-5 md:w-1/3">
    <p className="opacity-70">Copyright, Aximos</p>
    <div className="flex items-center justify-center sm:ml-auto">
      <p className="legal-after relative mr-9 text-gray-500 hover:text-red-700">
        Privacy Policy
      </p>
      <p className="text-gray-500 transition-all duration-500 hover:text-red-700">
        Terms of use
      </p>
    </div>
  </div>
</footer>


  
  );
};

export default Footer;
