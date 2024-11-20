import React, { useEffect, useState } from "react";
import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Hero = () => {

    // Define the text options
    const texts = [
      "Aximos allows your workforce to take orders, invoice and deliver in the field.",
      "Aximos gives you near real-time visibility of your field sales.",
    ];
  
    const [index, setIndex] = useState(0); // Track the current index
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Update the index to show the next text
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000); // Change text every 3 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [texts.length]);

      const text = "Turn Your Vansales into Seamless Success!";
      const text2 = "Real-time visibility of your field sales.";

      const slidesData = [
        {
          title: "Aximos allows your workforce to take orders, invoice and deliver in the field.",
          subtitle: "Turn Your Vansales into Seamless Success.",
          image: "/images/aximos-hero.png",
        },
        {
          title: "Aximos is directly integrated with the Zimra FDMS to enable compliant invoicing in the field.",
          subtitle: "Manage Inventory, Track Sales, and Stay Compliant .",
          image: "/images/aximos-hero-2.png",
        },
        {
          title: "Empower your sales team to serve clients instantly, anywhere, with our Vansales solution",
          subtitle: "Instant Invoicing, Instant Success.",
          image: "/images/aximos-hero-3.png",
        },
      ];

  return (
    <Swiper  modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={250}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    //scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
    autoplay={{ delay: 8000, disableOnInteraction: false }}
   // spaceBetween={50}
    //  slidesPerView={1} 
     
     >
    {slidesData.map((slide, index) => (
      <SwiperSlide key={index}>
    <section className="relative pt-60  pb-10 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">

          <Element name="hero">
            <div className="container">
              <div className="relative z-2 max-w-512 max-lg:max-w-388">
                <div className="caption small-2 uppercase text-p3">
                  {slide.subtitle.split("").map((char, charIndex) => (
                     <span
                        key={`${activeSlide}-${charIndex}`}
                        className="char"
                        style={{ animationDelay: `${charIndex * 0.08}s` }}
                      >
                        {char}
                      </span>
                  ))}
                </div>
                <h1
                    className={`mb-6 h5 text-gray-700 uppercase max-lg:mb-7 max-lg:h4 max-md:mb-4 max-md:text-5xl max-md:leading-12 fade-in-out ${
                      activeSlide === index ? 'active' : ''
                    }`}
                  >                  {slide.title}
                </h1>
                    
                    <div className="animate-float">
                <LinkScroll to="features" offset={-150} spy smooth>
                  <Button icon="/images/zap.svg" >Try It Now</Button>
                </LinkScroll>
                </div>
              </div>

              <div className="absolute top-20 left-[calc(50%+50px)] w-[750px] pointer-events-none hero-img_res ">
  <img src={slide.image} className="size-1960 max-lg:h-auto hero-img_res" alt="hero" />
</div>

            </div>
          </Element>
      
    </section>
    </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
