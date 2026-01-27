import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./SectionStore/SectionSlice";
import mediaReducer from "./MediaSlice/MediaSlice";
import {
  loadDrafts,
  loadInProgress,
  loadPublished,
} from "./PersistSlice/persist";

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    media: mediaReducer,
  },
  // preloadedState: {
  //   media: {
  //     items: loadMediaFromStorage(),
  //   },
  // },

  preloadedState: {
    media: {
      inProgress: loadInProgress(),
      draft: loadDrafts(),
      published: loadPublished(),
    },
  },

  // middleware: (gDM) => gDM().concat(sectionReducer.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
