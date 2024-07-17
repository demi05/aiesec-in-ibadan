const About = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between w-[85%] mx-auto py-32">
      <h1 className="font-raleway font-light text-[82.52px] leading-[96.88px]">
        About Us
      </h1>
      <p className="font-lato text-[37.4px] leading-[29.55px] font-light">
        AIESEC is a global platform for young people to develop their leadership
        potential through international internships and volunteer opportunities.
        We facilitate and promote cultural understanding and develop socially
        responsible, proactive agents of change with a view of making a positive
        impact in the world through our International Exchange and Membership
        Program.
      </p>
      <div className="flex flex-row items-center font-lato font-light">
        <button className="bg-grey border-t border-b border-l py-4 px-4">
          Meet the Team
        </button>
        <button className="bg-grey border-t border-b border-l py-4 px-4">
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
