import { img } from "../../constant";
import { ToastContainer } from "../../containers/ToastContainer";
import { useToast } from "../../hooks/ToasterHook";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";
import SearchInput from "../../shared/input/SearchInput";

const Navbar = () => {
  const { toasts, addToast, removeToast } = useToast();

  return (
    <div className="p-3 lg:px-[50px]">
      <div className="flex justify-between lg:justify-between items-center">
        <div className="flex items-center gap-3 lg:gap-8">
          <img
            className="w-6 h-6 lg:hidden"
            src={img.menu}
            alt="hamburger icon"
          />

          <img
            className="flex flex-shrink-0 items-center w-[100px] h-[20px] "
            src={img.logo}
            alt="Tailora logo"
          />

          <div className="hidden lg:flex gap-8 items-center">
            <p className="text-epilogue text-16 font-medium text-grey500">
              Jobs
            </p>
            <p className="text-epilogue text-16 font-medium text-grey500">
              Community
            </p>
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-8">
          <ShareWorkButton
            className="hidden lg:flex"
          >
            Share Work
          </ShareWorkButton>

          <ToastContainer toasts={toasts} onRemove={removeToast} />

          <img className="w-6 h-6 lg:hidden" src={img.search} alt="" />

          <div className="hidden lg:flex gap-3">
            <img
              className=" w-7 h-7 bg-[#F7F7F7] p-2 rounded-100"
              src={img.mail}
              alt=""
            />
            <img
              className=" w-7 h-7 bg-[#F7F7F7] p-2 rounded-100"
              src={img.notification}
              alt=""
            />
          </div>

          <img className="w-8 h-8" src={img.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
