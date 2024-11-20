import { Element } from "react-scroll";
import Button from "../components/Button";
import { details, features } from "../constants";


const Features = () => {
  return (
    <section >
      <Element name="features" >
        <div className="container ">
        <div className="h-[72vh] mt-10 relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g14 max-md:border-none max-md:rounded-none max-md:gap-2">
  {features.map(({ id, icon, caption, title, text, button }) => (
    <div
      key={id}
      className="relative z-2 md:px-5 px-3 md:pb-5 pb-3 flex-[45%] max-md:flex-100 max-md:gap-2 max-md:border-2 max-md:border-s3 max-md:rounded-2xl"
    >
      <div className="w-full flex justify-start items-start">
        <div className="-ml-2 mb-8 flex items-center justify-center flex-col">
          <div className="w-0.5 h-6 bg-s3" />
          <img src={icon} className=" size-12 object-contain" alt={title} />
        </div>
      </div>

      <p className="caption mb-4 max-md:mb-5 text-xs md:text-sm">{caption}</p>
      <h2 className="max-w-400 mb-4 h3 text-p4 text-sm md:text-base">
        {title}
      </h2>
      <p className="mb-6 body-1 text-xs max-md:mb-4 max-md:body-3 text-p5">
        {text}
      </p>
      {/* <Button icon={button.icon} className="text-xs md:text-sm">
        {button.title}
      </Button> */}
    </div>
  ))}

  <ul className="relative flex justify-around flex-grow px-[2%] border-2 border-s3 rounded-7xl max-md:hidden">
    <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
    {details.map(({ id, icon, title }) => (
      <li key={id} className="relative pt-8 px-2 pb-10">
        <div className="absolute top-6 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
        <div className="flex items-center justify-center mx-auto mb-2 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-12">
          <img
            src={icon}
            alt={title}
            className="size-17/20 object-contain z-20 animate-pulse"
            />
        </div>
        <h3 className="relative z-2 max-w-36 mx-auto my-0 base-small text-center text-p5 uppercase text-xs">
          {title}
        </h3>
      </li>
    ))}
  </ul>
</div>

        </div>
      </Element>
    </section>
  );
};
export default Features;