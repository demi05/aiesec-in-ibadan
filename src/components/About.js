const About = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between w-[85%] mx-auto py-16 sm:py-24 md:py-32">
      <h1 className="font-raleway font-light text-[40px] leading-[48px] sm:text-[60px] sm:leading-[72px] md:text-[82.52px] md:leading-[96.88px]">
        About Us
      </h1>
      <p className="font-lato text-[20px] leading-[24px] sm:text-[30px] sm:leading-[36px] md:text-[37.4px] md:leading-[44px] font-light text-center md:text-left">
        AIESEC is a global platform for young people to develop their leadership
        potential through international internships and volunteer opportunities.
        We facilitate and promote cultural understanding and develop socially
        responsible, proactive agents of change with a view of making a positive
        impact in the world through our International Exchange and Membership
        Program.
      </p>
      <div className="flex flex-col md:flex-row items-center font-lato font-light space-y-4 md:space-y-0 md:space-x-4 mt-4">
        <button className="bg-grey border-t border-b border-l border-r py-4 px-4 lg:border-r-0">
          Meet the Team
        </button>
        <button className="bg-grey border-t border-b border-l border-r py-4 px-4 lg:border-r-0">
          Learn More
        </button>
        <button className="bg-grey border-t border-b border-l border-r py-4 px-8">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default About;
