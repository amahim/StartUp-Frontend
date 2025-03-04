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
            ? "border-b-2 border-black font-bold text-black whitespace-nowrap"
            : "text-[#262522] whitespace-nowrap"
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
      <NavLink
        to="/guides"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Guides
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
        to="/authors"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Authors
      </NavLink>
      <NavLink
        to="/contributors"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold"
            : "text-[#262522] "
        }
      >
        Contributors
      </NavLink>

      <NavLink
        to="/signin"
        className={({ isActive }) =>
          isActive
            ? "border-b-2 border-black text-black font-bold lg:hidden"
            : "text-[#262522] lg:hidden"
        }
      >
        Sign In
      </NavLink>
    </>
  );

  return (
    <div className="border-b shadow-md sticky top-0 bg-[#ffffff] z-50">
      <div className="navbar py-5">
        {/* Left section with logo and nav items */}
        <div className="navbar-start flex-1">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost"
            >
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
          
          {/* Logo */}
          <Link to="/" className="font-bold text-xl md:text-2xl text-black">
            StartUp
          </Link>

          {/* Desktop nav items (excluding Sign In) */}
          <ul className=" hidden lg:flex items-center gap-3 ml-4 text-sm">
            {links}
          </ul>
        </div>

        {/* Right section with search, sign in and subscribe */}
        <div className="navbar-end gap-2 md:gap-4">
          {/* Search input for all screen sizes */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search" 
              className="input input-bordered w-28 sm:w-36 md:w-48 lg:w-64" 
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-black font-bold text-black hidden lg:block"
                : "text-[#262522] hidden lg:block"
            }
          >
            Sign In
          </NavLink>
          <Link
            to="/packages"
            className="btn border-none text-white bg-black"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
