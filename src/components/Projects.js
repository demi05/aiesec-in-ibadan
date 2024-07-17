import React from "react";
import Slider from "react-slick";
import volunteers from "../assets/images/volunteers.svg";
import volunteerLady from "../assets/images/volunteerLady.svg";

const ProjectSlider = () => {
  const projectData = [
    { name: "Project1", description: "description", image: volunteers },
    { name: "Project2", description: "description", image: volunteerLady },
    { name: "Project3", description: "description", image: volunteers },
    { name: "Project4", description: "description", image: volunteerLady },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  const nextArrow = () => (
    <div
      className="slick-arrow slick-next"
      onClick={() => sliderRef.slickNext()}
      style={{
        position: "absolute",
        bottom: "-40px",
        right: "50%",
        cursor: "pointer",
        transform: "translateX(50%)",
        zIndex: 1,
      }}
    >
      <span className="text-white">Next</span>
    </div>
  );

  let sliderRef = React.createRef();

  return (
    <section id="projects" className="py-16 mt-32 bg-darkBlue">
      <h1 className="text-[40px] leading-[46.96px] text-white mb-8 text-center">
        Our{" "}
        <span className="text-[82.52px] font-bold leading-[96.88px]">
          Projects
        </span>
      </h1>
      <Slider
        ref={(c) => (sliderRef = c)}
        {...settings}
        className="w-[80%] mx-auto"
      >
        {projectData.map((project, index) => (
          <div key={index} className="p-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full object-cover mb-4"
            />
            <div className="text-center">
              <h3 className="text-white text-xl font-bold">{project.name}</h3>
              <p className="text-white">{project.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      {nextArrow()}
    </section>
  );
};

export default ProjectSlider;
