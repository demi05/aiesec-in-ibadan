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
        <h1 className="font-bold leading-[119.23px] text-white text-[101.56px] w-[80%] mx-auto mb-10">
          Welcome To Our Entity
        </h1>
        <p className="text-black leading-[29.55px] font-light text-[37.4px] font-lato">
          we are dedicated to{" "}
          <span className="font-bold text-[64px] leading-[50.57px]">
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
