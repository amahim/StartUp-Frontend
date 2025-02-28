import React from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-black"
            : "text-[#262522] "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/case-studies"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black font-bold text-black"
            : "text-[#262522] "
        }
      >
        Case studies
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Courses
      </NavLink>
      {/* <NavLink
            to="/tools-resources"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
            Tools & resources
          </NavLink> */}
      {/* <NavLink
            to="/pro-payroll"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-black text-black font-bold" : "text-[#262522] "
            }
          >
            Pro payroll
          </NavLink> */}
      <NavLink
        to="/how-to-guides"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        How to guides
      </NavLink>
      <NavLink
        to="/ideas"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Ideas
      </NavLink>

      <NavLink
        to="/resources"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Resources
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Sign In
      </NavLink>
    </>
  );

  return (
    <>
      <div className="border-b shadow-md sticky top-0 bg-[#ffffff] z-50">
        <div className="navbar py-5">
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
            {/* logo-name */}
            <Link to="/" className=" font-bold text-xl md:text-2xl text-black">
              StartUp
            </Link>
            {/* search input */}
            <label className="hidden  input input-bordered lg:flex items-center gap-2 ml-4 ">
              <input type="text" className="grow " placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="navbar-end  lg:gap-3 w-full">
            <ul className="menu menu-horizontal px-1 gap-3  hidden lg:flex">
              {links}
            </ul>
            <div className="flex items-center gap-2">
              {/* <Link to="/signin" className="btn  ">Sign In
              </Link> */}
              <Link
                to="/subscribe"
                className="btn border-none text-white bg-black "
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separate search div for mobile - moved outside sticky navbar */}
      <div className="pb-5 mt-2 md:mt-0 md:pb-0 bg-[#ffffff]">
        <label className="md:hidden input input-bordered flex items-center gap-2 w-4/5 mx-auto ">
          <input type="text" className="grow " placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </>
  );
};

export default Navbar;
