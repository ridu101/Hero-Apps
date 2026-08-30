import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import heroLogo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-base-100 shadow-sm">
      <div className="navbar mx-auto max-w-300 px-4">
        {/* Navbar start */}
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

            {/* Mobile dropdown links */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
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
              </li>

              <li>
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
              </li>

              <li>
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
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="btn border-none bg-transparent px-2"
          >
            <img
              className="h-10 w-10"
              src={heroLogo}
              alt="Hero Apps"
            />

            <span className="hidden bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-xl font-bold text-transparent sm:block">
              Hero Apps
            </span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-8 px-1">
            <li>
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
            </li>

            <li>
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
            </li>

            <li>
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
            </li>
          </ul>
        </div>

        {/* Navbar end */}
        <div className="navbar-end">
          <a
            href="https://github.com/ridu101"
            target="_blank"
            rel="noreferrer"
            className="btn border-none bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
          >
            <FaGithub className="text-lg text-white" />

            <span className="hidden sm:block">
              Contribute
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;