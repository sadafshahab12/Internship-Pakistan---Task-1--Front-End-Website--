import React from "react";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="hero-bg sm:min-h-[37rem] xs:min-h-[30rem] xxs:min-h-[30rem] min-h-[28rem] flex flex-col justify-center md:gap-10 gap-5 sm:px-10 xs:px-8 px-6 pt-10 ">
      <h1 className="text-navyBlue sm:text-5xl xs:text-4xl xxs:text-3xl text-2xl font-bold sm:leading-[4rem] xs:leading-[3rem]  xxs:leading-[2.5rem] leading-[2rem] ">
        Shape Your Future in Tech with Internship Pakistan
      </h1>
      <p className="sm:text-lg xxs:text-sm text-[0.8rem] sm:leading-8 xxs:leading-6 leading-5 xxs:text-left text-justify text-slate-800e md:w-[80%] w-full">
        <span className="text-navyBlue font-bold">Internship Pakistan</span>{" "}
        empowers students to bridge the gap between academics and the tech
        industry. With exclusive internships designed to provide real-world
        experience, essential skills, and professional networking, we prepare
        future tech leaders to excel in their careers.
      </p>
      <Button btnText="Explore Internships" />
    </div>
  );
};

export default Hero;
