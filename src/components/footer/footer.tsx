import { Link } from "react-router-dom";
import logo from "../../assets/images/novamart-logo.png";

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-12 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="NovaMart Logo"
              className="h-12 w-12 object-contain rounded-lg mr-3"
            />
            <span className="text-3xl font-extrabold tracking-wide">
              NovaMart
            </span>
          </div>
          <p className="text-emerald-100 leading-relaxed mb-4">
            Your trusted wholesale partner — delivering quality goods at unbeatable prices.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775 4.93 4.93 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.949 13.949 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574A4.897 4.897 0 0 1 .96 9.1v.061a4.92 4.92 0 0 0 3.946 4.827 4.934 4.934 0 0 1-2.212.084 4.924 4.924 0 0 0 4.6 3.419A9.867 9.867 0 0 1 0 21.54 13.934 13.934 0 0 0 7.548 23.7c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.851s-.012 3.585-.07 4.851c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.585-.012-4.851-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.585 2.163 15.205 2.163 12s.012-3.585.07-4.851c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308C8.415 2.175 8.795 2.163 12 2.163zm0 1.837c-3.155 0-3.518.011-4.75.069-1.032.05-1.597.216-1.97.39-.496.228-.848.5-1.222.874-.374.374-.646.726-.874 1.222-.174.373-.34.938-.39 1.97-.058 1.232-.069 1.595-.069 4.75s.011 3.518.069 4.75c.05 1.032.216 1.597.39 1.97.228.496.5.848.874 1.222.374.374.726.646 1.222.874.373.174.938.34 1.97.39 1.232.058 1.595.069 4.75.069s3.518-.011 4.75-.069c1.032-.05 1.597-.216 1.97-.39.496-.228.848-.5 1.222-.874.374-.374.646-.726.874-1.222.174-.373.34-.938.39-1.97.058-1.232.069-1.595.069-4.75s-.011-3.518-.069-4.75c-.05-1.032-.216-1.597-.39-1.97a3.768 3.768 0 0 0-.874-1.222 3.768 3.768 0 0 0-1.222-.874c-.373-.174-.938-.34-1.97-.39-1.232-.058-1.595-.069-4.75-.069zM12 5.838a6.162 6.162 0 1 1 0 12.324 6.162 6.162 0 0 1 0-12.324zm0 10.2a4.038 4.038 0 1 0 0-8.076 4.038 4.038 0 0 0 0 8.076zm6.406-11.845a1.44 1.44 0 1 1 0 2.881 1.44 1.44 0 0 1 0-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              className="hover:text-emerald-300 transition-colors"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-emerald-100 hover:text-white">Home</Link></li>
            <li><Link to="/shop" className="text-emerald-100 hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="text-emerald-100 hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="text-emerald-100 hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/category/electronics" className="text-emerald-100 hover:text-white">Electronics</Link></li>
            <li><Link to="/category/groceries" className="text-emerald-100 hover:text-white">Groceries</Link></li>
            <li><Link to="/category/fashion" className="text-emerald-100 hover:text-white">Fashion</Link></li>
            <li><Link to="/category/home" className="text-emerald-100 hover:text-white">Home & Living</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-2 text-emerald-100">
            <li>NovaMart HQ, Industrial Area, Nairobi</li>
            <li>Phone: +254 712 345 678</li>
            <li>Email: support@novamart.co.ke</li>
            <li>Open: Mon - Sat, 8:00am - 6:00pm</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-emerald-600 mt-10 pt-6 text-center text-emerald-100">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">NovaMart</span>. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
