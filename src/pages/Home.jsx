import React, { useEffect } from "react";
import Hero from "../components/Hero";
import FeaturedInternShip from "../components/FeaturedInternShip";
const Home = () => {
  useEffect(() => {
    document.title = "Home | Internship Pakistan"; // Set the title here
  }, []);
  return (
    <div>
      <Hero />
      <FeaturedInternShip />
    </div>
  );
};

export default Home;
