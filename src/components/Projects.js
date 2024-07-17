import React, { useRef } from "react";
import Slider from "react-slick";
import volunteers from "../assets/images/volunteers.svg";
import volunteerLady from "../assets/images/volunteerLady.svg";
import { RxCaretRight, RxCaretLeft } from "react-icons/rx";

const ProjectSlider = () => {
  const projectData = [
    { name: "Project1", description: "description", image: volunteers },
    { name: "Project2", description: "description", image: volunteerLady },
    { name: "Project3", description: "description", image: volunteers },
    { name: "Project4", description: "description", image: volunteerLady },
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const prevArrow = () => (
    <div
      className="absolute bottom-4 left-4 cursor-pointer text-white"
      onClick={() => sliderRef.current.slickPrev()}
    >
      <RxCaretLeft size={24} />
    </div>
  );

  const nextArrow = () => (
    <div
      className="absolute bottom-4 right-4 cursor-pointer text-white"
      onClick={() => sliderRef.current.slickNext()}
    >
      <RxCaretRight size={24} />
    </div>
  );

  return (
    <section id="projects" className="py-16 mt-32 bg-darkBlue">
      <h1 className="text-4xl leading-10 text-white mb-8 text-center">
        Our <span className="text-6xl font-bold leading-12">Projects</span>
      </h1>
      <div className="relative w-11/12 mx-auto md:w-10/12">
        <Slider ref={sliderRef} {...settings}>
          {projectData.map((project, index) => (
            <div key={index} className="p-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-[70%] object-cover mb-4 lg:w-[60%] mx-auto"
              />
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">{project.name}</h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        {prevArrow()}
        {nextArrow()}
      </div>
    </section>
  );
};

export default ProjectSlider;
