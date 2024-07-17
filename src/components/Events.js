import nothing from "../assets/images/probNothing.svg";
const Events = () => {
  return (
    <section id="events" className="mb-16">
      <div className="py-10">
        <h1 className="text-[40px] leading-[46.96px] text-black mb-8 text-center">
          Past{" "}
          <span className="text-[82.52px] font-bold leading-[96.88px]">
            Events
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <img src={nothing} alt="probably nothing" />
      </div>
    </section>
  );
};

export default Events;
