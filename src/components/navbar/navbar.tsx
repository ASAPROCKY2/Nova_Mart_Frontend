// src/components/navbar/Navbar.tsx
import { NavLink } from "react-router-dom";
import { Search, ShoppingCart, User } from "lucide-react";
import logo from "../../assets/images/novamart-logo.png";

const Navbar = () => {
  const activeStyle = "bg-white/20 rounded-md font-bold";

  return (
    <nav className="fixed top-0 left-0 w-full bg-green-700 text-white shadow-md px-4 md:px-8 py-3 z-50 backdrop-blur-md">
      {/* Left: Logo and Brand */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <img
            src={logo}
            alt="NovaMart Logo"
            className="h-12 w-12 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <h1 className="text-xl font-bold">NovaMart</h1>
            <p className="text-xs opacity-80">Wholesale & Retail Hub</p>
          </div>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="menu menu-horizontal gap-2 text-base font-medium">
            {[
              { path: "/", label: "Home" },
              { path: "/shop", label: "Shop" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 hover:bg-white/10 rounded-md transition-colors duration-200 ${
                      isActive ? activeStyle : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Icons and Buttons */}
        <div className="flex-none gap-3 hidden lg:flex items-center">
          {/* Search */}
          <button className="btn btn-ghost btn-circle text-white hover:bg-white/20 transition-all duration-200">
            <Search className="h-5 w-5" />
          </button>

          {/* Cart */}
          <button className="btn btn-ghost btn-circle text-white hover:bg-white/20 transition-all duration-200 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-white text-green-700 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
              3
            </span>
          </button>

          {/* Login */}
          <NavLink
            to="/login"
            className="px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-green-700 transition-all duration-200 font-semibold flex items-center gap-1"
          >
            <User className="w-4 h-4" /> Login
          </NavLink>

          {/* Register */}
          <NavLink
            to="/register"
            className="px-4 py-2 rounded-full bg-white text-green-700 font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Dropdown */}
        <div className="flex-none lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-green-700 rounded-box w-64 text-white"
            >
              {[
                { path: "/", label: "Home" },
                { path: "/shop", label: "Shop" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg py-3 ${
                        isActive
                          ? "bg-white/20 rounded-md font-bold"
                          : "hover:bg-white/10 transition-all"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <div className="divider my-1"></div>

              <li>
                <NavLink
                  to="/login"
                  className="block rounded-full border border-white/30 text-center py-2 mt-2 hover:bg-white hover:text-green-700 transition-all duration-200"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block rounded-full bg-white text-green-700 text-center font-semibold py-2 mt-2 hover:bg-gray-100 transition-all duration-200"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
