import { Link } from "react-router";
import { img } from "../../constant";

const ProjectViewHeader = () => {
  return (
    <div className="bg-white p-2">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold text-20 lg:text-2xl">Project Name</h1>

        <div className="flex gap-2 items-center">
          <img src={img.avatar1} alt="" />
          <p className="text-16 font-medium">Helen Obiora</p>
          <p>.</p>
          <Link to="#" className="text-14 font-medium text-primary">
            follow
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewHeader;
