import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import projectsReducer from "./projectSlice";
import sectionReducer from "./SectionStore/SectionSlice";
import ProileReducer from "./profileSlice/test"


const rootReducer = combineReducers({
  section: sectionReducer,
  projects: projectsReducer,
  profile: ProileReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["projects"], // Only persist projects
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
