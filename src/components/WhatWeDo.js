import aisecers from "../assets/images/aiesecersAtConference.svg";
import aisecers1 from "../assets/images/aiesecersAtConference1.svg";
const WhatWeDo = () => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-lightPurple w-screen pt-10 pb-24">
        <h1 className="text-[40px] leading-[46.96px] text-deeperBlack">
          <span className="text-[82.52px] font-bold leading-[96.88px]">
            What
          </span>{" "}
          We Do
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10 absolute top-[10rem] pl-32">
        <div>
          <img src={aisecers} alt="aiesecersAtConference" />
        </div>
        <div>
          <img src={aisecers1} alt="aiesecersAtConference" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
