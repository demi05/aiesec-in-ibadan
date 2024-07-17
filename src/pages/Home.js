import About from "../components/About";
import Events from "../components/Events";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import WhoWeAre from "../components/WhoWeAre";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <WhoWeAre />
      <WhatWeDo />
      <Projects />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
