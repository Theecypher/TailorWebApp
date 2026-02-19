import ProjectViewContent from "./ProjectViewContent";
import ProjectViewHeader from "./ProjectViewHeader";

const ProjectView = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <ProjectViewHeader />

      <ProjectViewContent />
    </div>
  );
};

export default ProjectView;
