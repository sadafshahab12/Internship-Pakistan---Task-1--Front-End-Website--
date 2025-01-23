import React, { useEffect, useState } from "react";
import FilterSection from "../components/FilterSection";
import InternshipListCard from "../components/InternshipListCard";

const Internships = () => {
  useEffect(() => {
    document.title = "Internships | Internship Pakistan"; // Set the title here
  }, []);
  const [filters, setFilters] = useState({
    type: "",
    duration: "",
    location: "",
  });
  return (
    <div className="pt-24">
      <div className="flex justify-center items-center ">
        <img
          src="/images/explore.jpg"
          alt="explore-img"
          className="sm:w-[10rem] xs:w-[5rem] w-[4rem] sm:h-[10rem] xs:h-[5rem] h-[4rem] object-cover"
        />
        <h1 className="sm:text-4xl xs:text-3xl xxs:text-2xl text-xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-br from-navyBlue from-30% to-teal-400">
          Explore Internships
        </h1>
      </div>
      <div>
        <FilterSection onfilterChange={setFilters} />
        <InternshipListCard filters={filters} />
      </div>
    </div>
  );
};

export default Internships;
