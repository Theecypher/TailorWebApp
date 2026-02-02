import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const ProjectViewContent = () => {
  const mediaItems = useSelector((state: RootState) => state.media.published);

  console.log(mediaItems);
  

  return (
    <div className="bg-white">
      <h1>Project View Content</h1>
    </div>
  );
};

export default ProjectViewContent;
