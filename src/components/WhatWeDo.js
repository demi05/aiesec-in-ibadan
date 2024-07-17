import aisecers from "../assets/images/aiesecersAtConference.svg";
import aisecers1 from "../assets/images/aiesecersAtConference1.svg";

const WhatWeDo = () => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-lightPurple pt-10 pb-24 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-deeperBlack leading-[1.2] sm:leading-[1.4] md:leading-[1.5] lg:leading-[1.2]">
          <span>What</span> We Do
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 absolute top-32 w-full px-6 md:grid-cols-2 md:px-10 lg:px-32">
        <div className="flex justify-center">
          <img
            src={aisecers}
            alt="aiesecersAtConference"
            className="w-full h-auto max-w-[50%] md:max-w-full"
          />
        </div>
        <div className="flex justify-center mt-10 md:mt-0">
          <img
            src={aisecers1}
            alt="aiesecersAtConference"
            className="w-full h-auto max-w-[50%] md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
