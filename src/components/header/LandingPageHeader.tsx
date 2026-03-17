import Hero from "../hero";
import Navbar from "../menubar";

const Header = () => {
  return (
    <div className="bg-primary_active flex flex-col gap-10">
      <Navbar />

      <Hero />
    </div>
  );
};

export default Header;
