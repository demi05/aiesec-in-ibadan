import About from "../components/About";
import Events from "../components/Events";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhoWeAre />
      <WhatWeDo />
      <Projects />
      <Events />
    </div>
  );
};

export default Home;
