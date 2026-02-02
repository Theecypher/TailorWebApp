// store/mediaSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { MediaContentProp, MediaItem } from "../../types/media";

export type MediaStatus = "inProgress" | "draft" | "published";

type MediaState = {
  inProgress: MediaItem[];
  draft: MediaItem[];
  published: MediaItem[];
};

const initialState: MediaState = {
  inProgress: [],
  draft: [],
  published: [],
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    addMedia: (
      state,
      action: PayloadAction<{ status: MediaStatus; item: MediaItem }>,
    ) => {
      state[action.payload.status].push(action.payload.item);
    },

    removeMedia: (
      state,
      action: PayloadAction<{ status: MediaStatus; id: string }>,
    ) => {
      state[action.payload.status] = state[action.payload.status].filter(
        (item) => item.id !== action.payload.id,
      );
    },

    moveMedia: (
      state,
      action: PayloadAction<{ from: MediaStatus; to: MediaStatus; id: string }>,
    ) => {
      const fromList = state[action.payload.from];
      const index = fromList.findIndex((item) => item.id === action.payload.id);
      if (index === -1) return;

      const [item] = fromList.splice(index, 1);
      state[action.payload.to].push(item);
    },

    moveAllMedia: (
      state,
      action: PayloadAction<{ from: MediaStatus; to: MediaStatus }>,
    ) => {
      const items = state[action.payload.from];
      state[action.payload.to].push(...items);
      state[action.payload.from] = [];
    },

    clearMediaStatus: (state, action: PayloadAction<MediaStatus>) => {
      state[action.payload] = [];
    },

    hydrateMedia: (state, action: PayloadAction<MediaState>) => {
      return action.payload;
    },

    updateProject: (
      state,
      action: PayloadAction<{
        status: MediaStatus;
        id: string;
        data: Partial<Pick<MediaItem, "name" | "item">>;
      }>,
    ) => {
      const project = state[action.payload.status].find(
        (p) => p.id === action.payload.id,
      );
      if (!project) return;

      if (action.payload.data.name !== undefined) {
        project.name = action.payload.data.name;
      }

      if (action.payload.data.item !== undefined) {
        project.item = action.payload.data.item;
      }
    },

    addProjectContent: (
      state,
      action: PayloadAction<{
        status: MediaStatus;
        id: string;
        name: string
        content: MediaContentProp[];
      }>,
    ) => {
      const project = state[action.payload.status].find(
        (p) => p.id === action.payload.id,
      );
      if (!project) return;

      project.item.push(...action.payload.content);
    },
  },
});

export const {
  addMedia,
  removeMedia,
  moveMedia,
  clearMediaStatus,
  hydrateMedia,
  moveAllMedia,
  updateProject,
  addProjectContent,
} = mediaSlice.actions;

export default mediaSlice.reducer;
