import ProjectViewContent from "./ProjectViewContent";
import ProjectViewHeader from "./ProjectViewHeader";

const ProjectView = () => {
  return (
    <div className="flex flex-col gap-4">
      <ProjectViewHeader />

      <ProjectViewContent />
    </div>
  );
};

export default ProjectView;
