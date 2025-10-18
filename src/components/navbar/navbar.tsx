import { NavLink } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import logo from "../../assets/images/novamart-logo.png";

const Navbar = () => {
  const activeStyle =
    "text-green-700 font-semibold border-b-2 border-green-700 transition-all";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md px-6 md:px-10 py-3 border-b border-green-100">
      {/* 🛍 Left - Logo + Brand */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer select-none">
          <img
            src={logo}
            alt="NovaMart Logo"
            className="h-10 w-10 rounded-full shadow-sm border border-green-200"
          />
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-green-700 tracking-tight">
              NovaMart
            </h1>
            <p className="text-xs text-green-600 -mt-1">Shop • Save • Smile</p>
          </div>
        </div>

        {/* 🌐 Center - Navigation Links */}
        <ul className="hidden lg:flex gap-8 text-[16px] font-medium text-gray-700">
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
                  isActive
                    ? activeStyle
                    : "hover:text-green-700 transition-colors duration-200"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 🔧 Right - Icons + Auth Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="btn btn-ghost btn-circle text-gray-600 hover:text-green-700">
            <Search className="w-5 h-5" />
          </button>

          <button className="btn btn-ghost btn-circle text-gray-600 hover:text-green-700 relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>

          <NavLink
            to="/login"
            className="btn bg-green-700 text-white border-none font-medium hover:bg-green-800 transition-all duration-200"
          >
            <User className="w-4 h-4 mr-1" /> Login
          </NavLink>

          <NavLink
            to="/register"
            className="btn btn-outline border-green-700 text-green-700 font-medium hover:bg-green-700 hover:text-white transition-all duration-200"
          >
            Register
          </NavLink>
        </div>

        {/* 📱 Mobile Menu */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-gray-700"
            >
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-white rounded-box w-56 text-gray-700"
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
                      isActive
                        ? "text-green-700 font-semibold"
                        : "hover:text-green-700"
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}

              <div className="divider my-2" />

              <li>
                <NavLink
                  to="/login"
                  className="block py-2 text-center rounded-lg bg-green-700 text-white font-semibold hover:bg-green-800 transition-all duration-200"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className="block py-2 text-center rounded-lg border border-green-700 text-green-700 font-semibold hover:bg-green-700 hover:text-white transition-all duration-200"
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
