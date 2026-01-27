import { useDispatch } from "react-redux";
import type { ProfileItem, SidebarProps } from "../../pages-types/types";
import ProfileList from "../../helpers/AccountList";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle, isMobile }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;

    const activeProfile = ProfileList.find((item) => {
      if (item.path) return currentPath.startsWith(item.path);
    });

    if (activeProfile) {
      setOpenDropDown(activeProfile.name);
    }
  }, [location.pathname, ProfileList]);

  if (isMobile) {
    return (
      <>
        <nav className="w-full mx-auto px-[25px] py-5 border ">
          <div className="flex flex-col justify-center mx-2 gap-5  ">
            {ProfileList.map((item) => (
              <div className="flex items-center gap-4">
                <div>
                  <img className="w-[50px]" src={item.avatar} alt="" />
                </div>
                <div>
                  <div className="flex items-center gap-10">
                    <p className="text-14 text-black font-medium">
                      {item.name}
                    </p>
                    <p className="text-grayOne text-12 font-medium">
                      {item.time}
                    </p>
                  </div>
                  <div className="flex items-center gap-10">
                    <p className="text-borderTwo font-normal text-12">
                      {item.text}
                    </p>
                    <p>{item.unreadText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </nav>
      </>
    );
  }

  return (
    <motion.aside
      initial={false}
      animate={{ width: isOpen ? 260 : 75 }}
      transition={{ duration: 0.1 }}
      // className="border border-borderThree fixed  top-0 left-0 h-full z-30 bg-white text-black border-red-700 flex flex-col"
    >
      <nav className="flex flex-col gap-5 ">
        {ProfileList.map((item) => (
          <div className="flex gap-4">
            <div>
              <img className="w-[50px]" src={item.avatar} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-justify">
              <div className="flex items-center gap-10 justify-between">
                <p className="text-14 text-black font-medium">{item.name}</p>
                <p className="text-grayOne text-12 font-medium">{item.time}</p>
              </div>
              <div className="flex items-center gap-10">
                <p className="text-borderTwo font-normal text-12">
                  {item.text}
                </p>
                <p>{item.unreadText}</p>
              </div>
            </div>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
