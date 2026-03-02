import { img } from "../../constant";
import Logo from "../logo";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center ">
      <Logo />

      <img className="w-5 h-5" src={img.hammenu} alt="" />
    </div>
  );
};

export default Navbar;
