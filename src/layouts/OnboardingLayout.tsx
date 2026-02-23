import { useState, type ReactNode } from "react";
import facebook from "../assets/png/Facebook-Neg.png";
import google from "../assets/png/Google-Original.png";
import clientWallpaper from "../assets/png/ClientWallpaper.png";
import designerBgImage from "../assets/png/DesignerWallpaper.png";
import { twMerge } from "tailwind-merge";
import ShareWorkButton from "../shared/button/ShareWorkBtn";

type OnboardingLayoutProps = {
  children: ReactNode;
  header?: string;
  subHeader?: string;
  icon?: boolean;
  bgImage?: string;
  className?: string;
  otpEmail?: string;
  title?: string;
};

const OnboardingLayout = ({
  children,
  icon,
  className,
  title,
  bgImage = clientWallpaper,
}: OnboardingLayoutProps) => {
  const [role, setRole] = useState("designer");
  let backgroundImage = "";

  if (role === "client") {
    backgroundImage = clientWallpaper;
  } else {
    backgroundImage = designerBgImage;
  }

  return (
    <div
      className="
     flex min-h-screen"
    >
      <div
        className="hidden w-full lg:w-1/2 lg:block bg-auto rounded-12 bg-left  "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "cover",
          backgroundSize: "cover",
        }}
      ></div>

      {/* right side */}
      <div
        className={twMerge(
          "w-full lg:w-1/2 bg-white flex flex-col gap-5 items-center py-8 px-4 lg:px-[60px] lg:my-auto",
          className,
        )}
      >
        <div className=" ">
          <p>{title}</p>

          <div>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-4">
                <ShareWorkButton className="flex border border-grey100 justify-between bg-white py-3 items-center text-black gap-3">
                  <img className="w-6 h-6" src={google} alt="" />
                  <p className="hidden md:block">Login in With Google</p>
                </ShareWorkButton>
              </div>

              <div className="flex flex-col gap-4">
                <ShareWorkButton className="flex bg-inputBlue justify-between  py-3 items-center text-white gap-3">
                  <img className="w-6 h-6" src={facebook} alt="" />
                  <p className="hidden md:block"> Login in With Facebook</p>
                </ShareWorkButton>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default OnboardingLayout;
