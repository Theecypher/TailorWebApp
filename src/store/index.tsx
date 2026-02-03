import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectsReducer from "./projectSlice";
import sectionReducer from "./SectionStore/SectionSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects"],
};

const persistedReducer = persistReducer(persistConfig, projectsReducer);

export const store = configureStore({
  reducer: {
    section: sectionReducer,
    projects: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // If you have non-serializable data like Files
    }),
});

export const persistor = persistStore(store);

// Type exports for hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
