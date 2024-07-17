import laptopLady from "../assets/images/laptopLady.svg";

const Hero = () => {
  return (
    <div className="relative text-center min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(31, 22, 22, 0.7), rgba(255, 255, 255, 0.69)), url(${laptopLady})`,
        }}
      />
      <div className="relative z-10">
        <h1 className="font-bold leading-[60px] text-white text-[55px] w-[95%] mx-auto mb-10 sm:text-[60px] sm:leading-[80px] md:text-[80px] md:leading-[100px] lg:text-[101.56px] lg:leading-[119.23px] md:w-[95%] lg:w-[80%]">
          Welcome To Our Entity
        </h1>
        <p className="text-black leading-[20px] font-light text-[20px] font-lato sm:text-[25px] sm:leading-[30px] md:text-[30px] md:leading-[35px] lg:text-[37.4px] lg:leading-[29.55px]">
          we are dedicated to{" "}
          <span className="font-bold text-[40px] leading-[40px] sm:text-[50px] sm:leading-[45px] md:text-[55px] md:leading-[50px] lg:text-[64px] lg:leading-[50.57px]">
            {" "}
            excellence
          </span>{" "}
          and innovation in our space{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
