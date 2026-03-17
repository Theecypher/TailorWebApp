import About from "../../components/about";
import Header from "../../components/header/LandingPageHeader";
import HowItWorks from "../../components/howitworks";
import Navbar from "../../components/menubar";

const LandingPage = () => {
  return (
    <main className="">
      <Header />
      <About />
      <HowItWorks />
    </main>
  );
};

export default LandingPage;
