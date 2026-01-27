import { useEffect, useRef, useState } from "react";
import Sidebar from "../../pages/messaging/Sidebar";
import ViewPort from "./ViewPort";
import { useTheme } from "../../contexts/ThemeContext";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";
import { useToast } from "../../contexts/ToastContext";

const SocialViewPort = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const previousIsMobile = useRef<boolean | null>(null);

  const { theme, toggleTheme, fontSize, changeFontSize } = useTheme();
  const { toasts, addToast, removeToast } = useToast();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (
        previousIsMobile.current === null ||
        previousIsMobile.current !== mobile
      ) {
        previousIsMobile.current = mobile;
        setSidebarOpen(!mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ViewPort>
      <div className="w-full flex">
        <Sidebar isMobile={isMobile} isOpen={SidebarOpen} />

        <div className="p-5 w-1/3 flex flex-col gap-2">
          <h1 className="">React Context with Typescript</h1>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <ShareWorkButton onClick={() => changeFontSize("small")}>
            Small
          </ShareWorkButton>
          <ShareWorkButton
            onClick={() => addToast("operation Successful", "error", "top-left")}
          >
            Click
          </ShareWorkButton>
        </div>
      </div>
    </ViewPort>
  );
};

export default SocialViewPort;
