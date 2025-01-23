import React, { useEffect, useState } from "react";
import CardButton from "./CardButton"

const FeaturedInternShipCard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/json/Internship.json")
      .then((response) => response.json()) // Corrected here
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="px-10">
      <h1 className="text-3xl text-center font-bold py-10">
        Featured Internship
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-5 pb-10">
        {data.map((internship, index) => (
          <div key={index} className="sm:space-y-4 space-y-0 shadow-lg">
            <div className="w-full sm:h-[15rem] h-[10rem]">
              <img
                src={internship.image}
                alt={internship.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="sm:space-y-4 space-y-2 sm:p-5 p-3">
              <h1 className="sm:text-2xl text-lg font-bold leading-7">
                {internship.title}
              </h1>
              <p className="sm:text-sm text-[11px] text-slate-500 text-justify sm:leading-7 leading-5">
                {internship.description}
              </p>
              <CardButton btnText={"Apply Now"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInternShipCard;
