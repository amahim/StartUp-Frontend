import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const links = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black font-bold text-black" : "text-[#262522] "
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/case-studies"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black font-bold text-black" : "text-[#262522] "
            }
          >
            Case studies
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
           Courses
          </NavLink>
          <NavLink
            to="/how-to-guides"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
            How to guides
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
            Reviews
          </NavLink>
          <NavLink
            to="/tools-resources"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
            Tools & resources
          </NavLink>
          
          
        </>
      );


  return (
    <div className="border-b shadow-md   sticky top-0 bg-[#ffffff] z-50">
      <div className="navbar md:w-4/5 md:mx-auto py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" font-bold text-xl md:text-2xl text-black">StartUp</Link>
        </div>
        <div className="navbar-end  lg:gap-3 w-full">
          <ul className="menu menu-horizontal px-1 gap-3  hidden lg:flex">
           {links}
          </ul>
          <div className="">
          <Link className="btn border-none text-white bg-black ">Subscribe</Link>
        </div> 
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
