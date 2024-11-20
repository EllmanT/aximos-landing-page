import React from "react";
import { Marker } from "../components/Marker";
import { links, logos } from "../constants";
import { Element } from "react-scroll";

const Download = () => {
  return (
    <section className=" max-width: 1280px">
      <Element
        name="testimonials"
        className="g-7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10 ">
                <img
                  src="/images/aximos-full.png"
                  width={160}
                  height={155}
                  alt="xora"
                />
              </div>
              <h3 className='h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-gray-700 '>
            Testimonials
        </h3>
              <ul className="flex flex-wrap items-center gap-6">
              {logos.map(({ id, url, width, height, title }) => (
  <li key={id} className="mx-10 mt-0">
    <img
      src={url}
      width={width}
      height={height}
      alt={title}
      className="rounded-half shadow-2xl" // Apply rounded-full for a circular shape and shadow-xl for a shadow effect
    />
  </li>
))}

              </ul>
            </div>
            <div className="mb-10 max-md:hidden shadow-2xl  rounded-40">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[935px] border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="donwload_preview-dot left-6 bg-p2"/>
                  <span className="donwload_preview-dot left-11 bg-s3"/>
                  <span className="donwload_preview-dot left-6 bg-p1/15"/>
                  <img
                  src="/images/preview.jpeg"
                  width={855}
                  height={655}
                  alt="screen"
                  className="rounded-xl"
                  />
                </div>
              </div>
              
            </div>
            
          </div>
           
         
        </div>
      </Element>
    </section>
  );
};

export default Download;
