import type { MediaItem } from "../../types/media";

export type MediaStatus = "inProgress" | "draft" | "published";

type StoredProjects = {
  draft: MediaItem[];
  published: MediaItem[];
  inProgress: MediaItem[];
};

const STORAGE_KEY = "projects";

const defaultData: StoredProjects = {
  draft: [],
  published: [],
  inProgress: [],
};

export const loadProjects = (): StoredProjects => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...defaultData, ...JSON.parse(stored) } : defaultData;
  } catch {
    return defaultData;
  }
};

export const saveProjects = (data: StoredProjects) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.error("Failed to save projects");
  }
};

export const saveInProgressProject = (items: MediaItem[]) => {
  const data = loadProjects();
  saveProjects({ ...data, inProgress: items });
};

export const saveDraftProject = (project: MediaItem) => {
  const data = loadProjects();
  saveProjects({
    ...data,
    draft: [...data.draft, project],
    inProgress: [],
  });
};

export const publishProject = (project: MediaItem) => {
  const data = loadProjects();
  saveProjects({
    ...data,
    published: [...data.published, project],
    inProgress: [],
  });
};

export const loadDrafts = () => loadProjects().draft;
export const loadPublished = () => loadProjects().published;
export const loadInProgress = () => loadProjects().inProgress;

// export const loadMediaFromStorage = (): MediaItem[] => {
//   try {
//     const stored = localStorage.getItem(STORAGE_KEY);
//     if (!stored) return [];

//     const parsed = JSON.parse(stored);
//     return Array.isArray(parsed) ? parsed : [];
//   } catch {
//     return [];
//   }
// };

// export const saveMediaToStorage = (items: MediaItem[]) => {
//   try {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
//   } catch {
//     console.error("cannot save to local storage");
//   }
// };
