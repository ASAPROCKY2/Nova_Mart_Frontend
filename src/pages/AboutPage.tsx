// src/pages/AboutPage.tsx
import  About  from "../components/about/about";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutPage;
