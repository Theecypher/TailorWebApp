// types/media.ts
// export type MediaType = "image" | "video" | "text";

// export type MediaContentProp = {
//   type: MediaType;
//   content: string; // image/video = preview URL, text = actual text
// };

export type MediaItem = {
  id: string;
  type: "image" | "video" | "text";
  content: string;
};

export interface ProjectItem {
  type: "image" | "video" | "text";
  content: string;
}

export interface CurrentProject {
  title: string;
  items: ProjectItem[];
}


export type ProjectStatus = "inProgress" | "draft" | "published";

export type Project = {
  id: string;
  title: string;
  description?: string;
  items: ProjectItem[];
  status: ProjectStatus;
  createdAt: string;
  updatedAt: string;
};


export type ProjectsState = {
  projects: Project[];
};


export type NewProjectInput = {
  title: string;
  description?: string;
  items: ProjectItem[];
};
