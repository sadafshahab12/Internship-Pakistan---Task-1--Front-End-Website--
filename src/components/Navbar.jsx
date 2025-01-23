import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
const Navbar = () => {
  const [rightToggle, setRightToggle] = useState(true);
  const handleToggle = () => {
    setRightToggle(!rightToggle);
  };
  const closeMenu = ()=>{
    setRightToggle(!rightToggle)
  }
  return (
    <nav className="bg-navyBlue text-white fixed w-full z-50 flex justify-between items-center py-4 md:px-10 sm:px-6 px-3">
      <div className="logo flex items-center gap-3">
        <img src="/images/logo2.png" alt="logo"  className="md:w-12 sm:w-10 w-8 md:h-12 sm:h-10 h-8 rounded-full"/>
        <h1 className="lg:text-2xl xs:text-xl text-lg  font-bold">Internship Pakistan</h1>
      </div>
      <div className="navlist lg:text-sm text-[0.8rem]">
        <ul
          className={`flex sm:flex-row flex-col items-center lg:gap-8 md:gap-6 sm:gap-4 gap-10 sm:static absolute ${
            rightToggle ? "-right-full" : "right-0"
          } top-14 sm:bg-none bg-navyBlue sm:w-auto w-full sm:py-0 py-10 sm:h-auto h-screen transition-all ease-in duration-300`}
        >
          <li onClick={closeMenu}>
            <Link to="/">Home</Link>{" "}
          </li>
          <li onClick={closeMenu}>
            <Link to="/internships">Internships</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/aboutus">About us</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="">Apply Now</Link>
          </li>
        </ul>
      </div>
      <div className="sm:hidden block" onClick={handleToggle}>
        {rightToggle ? (
          <HiMenuAlt3 className="h-7 w-7 cursor-pointer" />
        ) : (
          <IoIosClose className="h-7 w-7 cursor-pointer" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
