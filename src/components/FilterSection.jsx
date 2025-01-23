import React, { useState } from "react";
import DropDown from "./ui/DropDown";
import { GoChevronDown } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";

const FilterSection = ({ onfilterChange, internshipList }) => {
  const [activeDropDown, setActiveDropDown] = useState(null);
  const [filters, setFilters] = useState({
    type: "",
    duration: "",
    location: "",
    search: "",
  });

  const toggleDropDown = (dropdown) => {
    setActiveDropDown((prevDropDown) =>
      prevDropDown === dropdown ? null : dropdown
    );
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilter) => {
      const newFilter = { ...prevFilter, [filterType]: value };
      onfilterChange(newFilter);
      return newFilter;
    });
    setActiveDropDown(null);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, search: searchValue };
      onfilterChange(newFilters);
      return newFilters;
    });
  };

  const typeDropDowns = ["All", "Remote", "On-site", "Hybrid"];
  const durationDropDowns = [
    "All",
    "3 months",
    "Less than 3 months",
    "3–6 months",
    "6+ months",
  ];
  const citiesDropdown = [
    "All",
    "Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Peshawar",
  ];

  return (
    <div className="lg:p-10 p-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-3 items-center ">
        <div className="grid md:grid-cols-4 xs:grid-cols-3 grid-cols-1 lg:order-none order-2 md:col-span-2 col-span-1 gap-3">
        <h1 className="text-2xl font-bold md:block hidden">Categories</h1>
          <div className="space-y-4 relative">
            <h3
              onClick={() => toggleDropDown("type")}
              className="border border-slate-800 rounded-md p-3   flex justify-between items-center gap-5 cursor-pointer text-sm"
            >
              {filters.type === "" ? "Type" : filters.type} <GoChevronDown />
            </h3>
            <DropDown
              dropdowns={typeDropDowns}
              show={activeDropDown === "type"}
              selectedValue={filters.type}
              onSelect={(value) => handleFilterChange("type", value)}
            />
          </div>
          <div className="space-y-4 relative">
            <h3
              onClick={() => toggleDropDown("duration")}
              className="border border-slate-800 rounded-md p-3  flex justify-between items-center gap-5 cursor-pointer text-sm"
            >
              {filters.duration === "" ? "Duration" : filters.duration}{" "}
              <GoChevronDown />
            </h3>
            <DropDown
              dropdowns={durationDropDowns}
              show={activeDropDown === "duration"}
              selectedValue={filters.duration}
              onSelect={(value) => handleFilterChange("duration", value)}
            />
          </div>
          <div className="space-y-4 relative">
            <h3
              onClick={() => toggleDropDown("location")}
              className="border border-slate-800 rounded-md p-3 flex justify-between items-center gap-5 cursor-pointer text-sm"
            >
              {filters.location === "" ? "Location" : filters.location}{" "}
              <GoChevronDown />
            </h3>
            <DropDown
              dropdowns={citiesDropdown}
              show={activeDropDown === "location"}
              selectedValue={filters.location}
              onSelect={(value) => handleFilterChange("location", value)}
            />
          </div>
        </div>
        <div className="search-bar relative  lg:justify-self-end lg:w-auto w-full lg:order-none  order-1">
          <input
            type="text"
            placeholder="Search"
            className="border border-slate-800 py-2 px-4 rounded-md outline-none lg:w-auto w-full"
            onChange={handleSearchChange}
          />
          <IoIosSearch className="absolute top-2 right-4 w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
