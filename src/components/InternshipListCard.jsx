import React, { useEffect, useState } from "react";
import CardButton from "./ui/CardButton";

const InternshipListCard = ({ filters }) => {
  const [lists, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch("/json/internshiplist.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
        setFilteredList(data);
      })
      .catch((err) => {
        console.error("Error fetching internship data:", err);
      });
  }, []);

  useEffect(() => {
    let tempList = [...lists];

    if (filters.search) {
      tempList = tempList.filter(
        (list) =>
          list.title.toLowerCase().includes(filters.search.toLowerCase()) ||
          list.company.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.type && filters.type !== "All") {
      tempList = tempList.filter((list) =>
        list.type.toLowerCase().includes(filters.type.toLowerCase())
      );
    }

    if (filters.duration && filters.duration !== "All") {
      tempList = tempList.filter((list) =>
        list.duration.toLowerCase().includes(filters.duration.toLowerCase())
      );
    }

    if (filters.location && filters.location !== "All") {
      tempList = tempList.filter((list) =>
        list.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredList(tempList);
  }, [filters, lists]);

  return (
    <div className="md:space-y-5 space-y-0 grid sm:justify-self-center md:grid-cols-1 xs:grid-cols-2 grid-cols-1 sm:py-8 py-4 px-4 gap-5">
      {filteredList.length === 0 ? (
        <p>No internships found matching the selected filters.</p>
      ) : (
        filteredList.map((list, index) => (
          <div key={index} className="flex md:flex-row flex-col md:items-center items-start ">
            <div className="lg:w-[15rem] md:w-[20rem] w-full h-[10rem] md:rounded-md rounded-none">
              <img
                src={list.image}
                alt={list.title}
                className="w-full h-full object-cover md:rounded-md rounded-none"
              />
            </div>
            <div className="space-y-3 md:shadow-none shadow-lg p-5">
              <h1 className="md:text-2xl sm:text-xl text-lg font-bold">{list.title}</h1>
              <div className="flex items-center lg:flex-nowrap flex-wrap lg:gap-14 md:gap-5 sm:gap-3 xs:gap-1 gap-3">
                <p className="sm:text-sm text-[0.7rem] text-gray-600">
                  {" "}
                  Company: <span className="font-semibold">
                    {list.company}
                  </span>{" "}
                </p>
                <p className="sm:text-sm text-[0.7rem] text-gray-600">
                  {" "}
                  Location:{" "}
                  <span className="font-semibold">{list.location}</span>{" "}
                </p>
                <p className="sm:text-sm text-[0.7rem] text-gray-600">
                  {" "}
                  Type: <span className="font-semibold">{list.type}</span>{" "}
                </p>
                <p className="sm:text-sm text-[0.7rem] text-gray-600">
                  {" "}
                  Duration:{" "}
                  <span className="font-semibold">{list.duration}</span>{" "}
                </p>
              </div>
              <CardButton btnText={"Apply Now"} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default InternshipListCard;
