import type { ReactNode } from "react";
import { img } from "../../constant";

interface LogoHeaderProps {
  className?: string;
  children?: ReactNode;
}

const LogoHeader = ({ className, children }: LogoHeaderProps) => {
  return (
    <div className={` ${className}`}>
      <div className="flex items-center border-b border-borderThree px-7 py-3">
        <img className="w-15 h-5 flex shrink-0 " src={img.tailora} alt="" />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default LogoHeader;
