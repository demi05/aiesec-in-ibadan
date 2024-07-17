import laptopPeople from "../assets/images/laptopPeople.svg";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col items-center justify-between pb-20">
      <div className="bg-lightPurple w-screen py-10">
        <h1 className="text-[30px] leading-[46.96px] text-deeperBlack md:text-[40px]">
          Who{" "}
          <span className="text-[70px] font-bold leading-[96.88px] md:text-[82.52px]">
            We Are
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            src={laptopPeople}
            alt="people around a laptop"
            className="max-w-full"
          />
        </div>
        <div className="flex flex-col items-center md:items-start gap-6">
          <p className="font-light leading-[34.68px] text-center w-[80%] md:text-left md:w-[60%]">
            Our entity is committed to providing the best services and
            solutions. Our members are passionate about striving for excellence.
          </p>
          <button className="bg-grey font-bold leading-[24.15px] py-2 px-4">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
