import { Outlet } from "react-router";
import ViewPortTwo from "./ViewPortTwo";

const UploadProjectLayout = () => {
  return (
    <ViewPortTwo>
      <div className="w-full font-nonbureau ">
        <Outlet />
      </div>
    </ViewPortTwo>
  );
};

export default UploadProjectLayout;
