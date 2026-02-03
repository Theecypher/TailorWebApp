import { createSlice,  type PayloadAction } from '@reduxjs/toolkit';

interface ProjectItem {
  type: "image" | "video" | "text";
  content: string; 
}

interface Project {
  id: string;
  title: string;
  items: ProjectItem[];
  // Optional: createdAt: string, etc
}

interface ProjectsState {
  draft: Project[];
  published: Project[];
}

const initialState: ProjectsState = {
  draft: [],
  published: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addToDraft: (state, action: PayloadAction<Project>) => {
      state.draft.push(action.payload);
    },
    addToPublished: (state, action: PayloadAction<Project>) => {
      state.published.push(action.payload);
    },
    moveFromDraftToPublished: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const projectIndex = state.draft.findIndex(p => p.id === id);
      if (projectIndex !== -1) {
        const [project] = state.draft.splice(projectIndex, 1);
        state.published.push(project);
      }
    },
    // Add more if needed, e.g., removeFromDraft, editProject
  },
});

export const { addToDraft, addToPublished, moveFromDraftToPublished } = projectsSlice.actions;
export default projectsSlice.reducer;