import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import {
  addToDraft,
  addToPublished,
  moveFromDraftToPublished,
} from "../../store/projectSlice";
import { v4 as uuidv4 } from "uuid";
import type { Project, NewProjectInput } from "../../types/media";

export const useProjectService = () => {
  const dispatch = useDispatch<AppDispatch>();
  const projects = useSelector((state: RootState) => state.projects);

  const saveToDraft = (project: NewProjectInput) => {
    const now = new Date().toISOString();

    const newProject: Project = {
      ...project,
      id: uuidv4(),
      status: "draft",
      createdAt: now,
      updatedAt: now,
    };

    dispatch(addToDraft(newProject));
  };

  const publishProject = (project: NewProjectInput) => {
    const now = new Date().toISOString();

    const newProject: Project = {
      ...project,
      id: uuidv4(),
      status: "published",
      createdAt: now,
      updatedAt: now,
    };

    dispatch(addToPublished(newProject));
  };

  const publishFromDraft = (id: string) => {
    dispatch(moveFromDraftToPublished(id));
  };

  const getDrafts = () => projects.draft;
  const getPublished = () => projects.published;

  return {
    saveToDraft,
    publishProject,
    publishFromDraft,
    getDrafts,
    getPublished,
  };
};
