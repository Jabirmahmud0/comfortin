import { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../FirebaseProvider/FirebaseProvider";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useDarkMode } from "../../Contexts/DarkModeContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { user, logout } = authContext || {};
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleHamburgerButtonClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleMenuItemClick = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        const menuItems = document.querySelectorAll(".menu-sm .menu-item");
        menuItems.forEach((item) => {
          item.style.display = "block";
        });
      } else {
        const menuItems = document.querySelectorAll(".menu-sm .menu-item");
        menuItems.forEach((item) => {
          item.style.display = "none";
        });
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#CDE8E5] text-gray-800"
      } lg:px-24 md:px-16 sm:px-8 px-4`}
    >
      <div className="navbar-start">
        {/* Dropdown Menu */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleHamburgerButtonClick}
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
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } rounded-box w-52 ${dropdownOpen ? "block" : "hidden"}`}
          >
            {/*  dropdown menu items */}
            <li className="menu-item">
              <NavLink
                to="/"
                className={({ isActive }) => `${
                  isDarkMode
                    ? isActive 
                      ? "text-blue-400 bg-gray-700" 
                      : "text-white hover:text-gray-300"
                    : isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-800 hover:text-gray-600"
                } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
                onClick={handleMenuItemClick}
              >
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/roomlist"
                className={({ isActive }) => `${
                  isDarkMode
                    ? isActive 
                      ? "text-blue-400 bg-gray-700" 
                      : "text-white hover:text-gray-300"
                    : isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-800 hover:text-gray-600"
                } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
                onClick={handleMenuItemClick}
              >
                Rooms
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/mybookings"
                className={({ isActive }) => `${
                  isDarkMode
                    ? isActive 
                      ? "text-blue-400 bg-gray-700" 
                      : "text-white hover:text-gray-300"
                    : isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-800 hover:text-gray-600"
                } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
                onClick={handleMenuItemClick}
              >
                My Bookings
              </NavLink>
            </li>
            <li className="menu-item">
              <a
                href="#about"
                className={`${
                  isDarkMode
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600"
                } font-bold`}
                onClick={handleMenuItemClick}
              >
                About Us
              </a>
            </li>

            <li className="menu-item">
              <NavLink
                to="/contact-us"
                className={({ isActive }) => `${
                  isDarkMode
                    ? isActive 
                      ? "text-blue-400 bg-gray-700" 
                      : "text-white hover:text-gray-300"
                    : isActive 
                      ? "text-blue-600 bg-blue-50" 
                      : "text-gray-800 hover:text-gray-600"
                } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
                onClick={handleMenuItemClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Link to Home - Text Only */}
        <NavLink
          to="/"
          className={`text-xl font-bold ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`}
        >
          Comfort Inn
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `${
                isDarkMode
                  ? isActive 
                    ? "text-blue-400 bg-gray-700" 
                    : "text-white hover:text-gray-300"
                  : isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-800 hover:text-gray-600"
              } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
            >
              Home
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to="/roomlist"
              className={({ isActive }) => `${
                isDarkMode
                  ? isActive 
                    ? "text-blue-400 bg-gray-700" 
                    : "text-white hover:text-gray-300"
                  : isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-800 hover:text-gray-600"
              } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
            >
              Rooms
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to="/mybookings"
              className={({ isActive }) => `${
                isDarkMode
                  ? isActive 
                    ? "text-blue-400 bg-gray-700" 
                    : "text-white hover:text-gray-300"
                  : isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-800 hover:text-gray-600"
              } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
            >
              My Bookings
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to="/about-us"
              className={({ isActive }) => `${
                isDarkMode
                  ? isActive 
                    ? "text-blue-400 bg-gray-700" 
                    : "text-white hover:text-gray-300"
                  : isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-800 hover:text-gray-600"
              } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
            >
              About Us
            </NavLink>
          </li>

          <li className="active">
            <NavLink
              to="/contact-us"
              className={({ isActive }) => `${
                isDarkMode
                  ? isActive 
                    ? "text-blue-400 bg-gray-700" 
                    : "text-white hover:text-gray-300"
                  : isActive 
                    ? "text-blue-600 bg-blue-50" 
                    : "text-gray-800 hover:text-gray-600"
              } ${isActive ? "font-bold" : "font-bold"} px-3 py-2 rounded-lg transition-colors`}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? "bg-gray-700 hover:bg-gray-600 text-yellow-400" 
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </button>

        {/* Conditional rendering based on user authentication status */}
        {user ? (
          <div className="flex items-center gap-3">
            {/* User Info */}
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={user.photoURL || "https://i.ibb.co/QnGz7Yz/5.jpg"}
                    alt="User Avatar"
                  />
                </div>
              </div>
              <span className={`text-sm font-medium hidden md:block ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {user.displayName || "User"}
              </span>
            </div>
            {/* Logout Button */}
            <button 
              onClick={logout} 
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-red-500 hover:bg-red-600 text-white'
              }`}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {/* Register Button */}
            <Link to="/register">
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-gray-700 hover:bg-gray-600 text-white border border-gray-600'
                  : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-300'
              }`}>
                Register
              </button>
            </Link>
            {/* Login Button */}
            <Link to="/login">
              <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode
                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}>
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
