import Navbar from "../components/navbar/navbar";
import Hero from "../components/home/hero";
import Footer from "../components/footer/footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
 