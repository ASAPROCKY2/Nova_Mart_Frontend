import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero-banner.jpg"; // replace with your shop banner image
import { ShoppingBag, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 sm:px-10 max-w-3xl">
        <p
          className="text-sm md:text-base uppercase tracking-[0.3em] text-teal-300 mb-3"
          data-testid="welcome-text"
        >
          Welcome to NovaMart
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Shop Smart. Save Big.  
          <span className="block text-teal-400">Your Wholesale Partner.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Explore thousands of wholesale products — from groceries to electronics — all in one trusted platform.
          <br />Get quality and unbeatable prices delivered to your doorstep.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-teal-500 hover:bg-teal-400 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <ShoppingBag className="w-5 h-5" />
            Start Shopping
          </Link>

          <Link
            to="/about"
            className="flex items-center justify-center gap-2 px-8 py-3 border border-white text-white text-lg font-semibold rounded-full hover:bg-white hover:text-teal-600 shadow-md transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce text-white opacity-80">
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
