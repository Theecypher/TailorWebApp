import { Outlet } from "react-router";
import ViewPort from "../components/viewport/ViewPort";

const ViewPortLayout = () => {
  return (
    <ViewPort >
      <div className="w-full font-nonbureau">
        <Outlet />
      </div>
    </ViewPort>
  );
};

export default ViewPortLayout;
