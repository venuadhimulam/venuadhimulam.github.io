import React from "react";
import Announcement from "../components/Announcemnet";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import About from "../components/About";
import WaverTop from "../components/Waver";
import WaverBottom from "../components/WaverBottom";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Education from "../components/Education";
import TechStack from "./TechStack";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
        {/* <Announcement /> */}
        <Navbar />
        <Slider />
        <WaverTop/>
        <About/>
        <WaverBottom/>
        <Experience/>
        {/* <TechStack /> */}
        <Projects />
        <Education/>
        <WaverTop/>
        <Certifications/> 
        {/* <Newsletter /> */}
        <Footer />
    </div>
  );
};

export default Home;
