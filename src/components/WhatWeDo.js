import aisecers from "../assets/images/aiesecersAtConference.svg";
import aisecers1 from "../assets/images/aiesecersAtConference1.svg";

const WhatWeDo = () => {
  return (
    <div className="bg-lightPurple pt-10 pb-24 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-deeperBlack leading-[1.2] sm:leading-[1.4] md:leading-[1.5] lg:leading-[1.2]">
        <span>What</span> We Do
      </h1>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2 ">
        <div className="flex justify-center">
          <img
            src={aisecers}
            alt="aiesecersAtConference"
            className="w-full h-auto max-w-[80%] mx-auto"
          />
        </div>
        <div className="flex justify-center mt-10 sm:mt-0">
          <img
            src={aisecers1}
            alt="aiesecersAtConference"
            className="w-full h-auto max-w-[80%] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
