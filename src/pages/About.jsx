import React from "react";
import Team from "../sections/home/AboutUs/Team";
import WeOffer from "../sections/home/AboutUs/weOffer";
import Vision from "../sections/home/AboutUs/Vision";

function About() {
  return (
    <div>
      <div
      className="relative w-full h-64 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/igdtuw.jpg')" }} // replace with your image path
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-green-900/50"></div>

      {/* Heading text */}
      <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
        About Us
      </h1>
    </div>
      <Vision />
      <WeOffer />
      <Team />
    </div>
  );
}

export default About;
