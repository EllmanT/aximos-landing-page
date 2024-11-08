import React from "react";
import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="flex w-full max-md:flex-col">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
            <p className="opacity-70"> Copyright, Vision</p>
            <div className="flex items-center justify-center sm:ml-auto">
              <p className="legal-after relative mr-9 text-gray-800 transition-all duration-500 hover:text-red-700">
                Privacy Policy
              </p>
              <p className="text-gray-800 transition-all duration-500 hover:text-red-700">
                Terms of use
              </p>
            </div>
          </div>
          <ul className="flex flex-1 justify-center gap-8 max-md:mt-10 md:justify-end ">
            {socials.map(({ id, url, icon, title }) => (
              <li id={id}>
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
    </footer>
  );
};

export default Footer;
