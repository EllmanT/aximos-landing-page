import React from "react";
import { Marker } from "../components/Marker";
import { links, logos } from "../constants";
import { Element } from "react-scroll";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g-7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/aximos-full.png"
                  width={160}
                  height={155}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-10 max-w-md">
              Trusted by many...
              </p>
              <ul className="flex flex-wrap items-center gap-6">
              {logos.map(({id,url,width, height,title})=>(
                        <li key={id} className="mx-10 mt-0">
                            <img
                            src={url}
                            width={width}
                            height={height}
                            alt={title}
                            />
                            
                        </li>
                    ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
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
