import { Link, NavLink } from "react-router";
import heroLogo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar fixed left-0 top-0 z-50 w-full bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
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
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[#632EE3] text-[#632EE3]"
                  : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[#632EE3] text-[#632EE3]"
                  : ""
              }
            >
              App
            </NavLink>

            <NavLink
              to="/installation"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-[#632EE3] text-[#632EE3]"
                  : ""
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex">
          <Link
            to="/"
            className="btn border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-xl text-transparent"
          >
            <img
              className="h-10 w-10"
              src={heroLogo}
              alt="Hero Apps"
            />
            Hero Apps
          </Link>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8 px-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#632EE3] pb-1 text-[#632EE3]"
                : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/apps"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#632EE3] pb-1 text-[#632EE3]"
                : ""
            }
          >
            App
          </NavLink>

          <NavLink
            to="/installation"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#632EE3] pb-1 text-[#632EE3]"
                : ""
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>

      {/* Contribute button */}
      <div className="navbar-end">
        <a href="">
          <button className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <FaGithub className="text-white" />
            Contribute
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;