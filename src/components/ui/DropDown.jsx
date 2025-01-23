import React from "react";

const DropDown = ({ dropdowns, show, onSelect, selectedValue }) => {
  return (
    <div
      className={`bg-gray-200 p-2 space-y-2 w-full rounded-md text-center transform transition-all ease-in duration-200 absolute top-[2.5rem] left-0 z-10  ${
        show
          ? "opacity-100 scale-100 inline-block"
          : "opacity-0 scale-95 hidden"
      }`}
    >
      {dropdowns.map((dropdown, index) => ( 
        <div
          key={index}
          className={`p-2 bg-white rounded-md text-sm hover:bg-sky-300 cursor-pointer transition-all ease-in duration-300 ${
            selectedValue === dropdown ? "bg-sky-700  text-white" : ""
          }`}
          onClick={() => onSelect(dropdown)}
        >
          <p key={index}>{dropdown}</p>
        </div>
      ))}
    </div>
  );
};

export default DropDown;
