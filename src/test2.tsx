import { useState } from "react";
import { useDispatch } from "react-redux";
import { img } from "../../constant";
import UploadProjectModal from "../../components/modals/UploadProjectModal";
import { AppDispatch } from "../../store";
import { addMedia } from "../../store/mediaSlice";
import { MediaItem } from "../../types/media";
import { v4 as uuidv4 } from "uuid";

interface UploadActionsProps {
  className?: string;
}

const UploadProjectActions = ({ className }: UploadActionsProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      const type = file.type.startsWith("video") ? "video" : "image";

      const mediaItem: MediaItem = {
        id: uuidv4(),
        type,
        content: URL.createObjectURL(file),
      };

      dispatch(addMedia(mediaItem));
    });
  };

  return (
    <div>
      {isOpenModal && (
        <UploadProjectModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}

      <div
        className={`flex gap-2 
        ease-in duration-75 
        ${className}
        `}
      >
        <img className="w-10 h-10" src={img.html} alt="" />
        <img className="w-10 h-10" src={img.grid} alt="" />

        {/* Video Upload */}
        <label className="cursor-pointer">
          <img className="w-10 h-10" src={img.video} alt="" />
          <input
            type="file"
            onChange={(e) => handleFiles(e.target.files)}
            accept="video/*"
            multiple
            hidden
          />
        </label>

        {/* Image Upload */}
        <label className="cursor-pointer">
          <img className="w-10 h-10" src={img.picture} alt="" />
          <input
            type="file"
            onChange={(e) => handleFiles(e.target.files)}
            accept="image/*"
            multiple
            hidden
          />
        </label>

        {/* Text Upload */}
        <label className="cursor-pointer">
          <img
            className="w-10 h-10"
            onClick={() => setIsOpenModal(true)}
            src={img.textIcon}
            alt=""
          />
        </label>
      </div>
    </div>
  );
};

export default UploadProjectActions;









Step 1
// store/persist.ts
import type { MediaItem } from "../types/media";

const STORAGE_KEY = "media-items";

export const loadMediaFromStorage = (): MediaItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

export const saveMediaToStorage = (items: MediaItem[]) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore write errors
  }
};



STEP 2
// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import mediaReducer from "./mediaSlice";
import { loadMediaFromStorage } from "./persist";

export const store = configureStore({
  reducer: {
    media: mediaReducer,
  },
  preloadedState: {
    media: {
      items: loadMediaFromStorage(),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


STEP 3
import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import { saveMediaToStorage } from "./store/persist";

const StorePersistence = () => {
  const mediaItems = useSelector((state: RootState) => state.media.items);

  useEffect(() => {
    saveMediaToStorage(mediaItems);
  }, [mediaItems]);

  return null;
};

export default StorePersistence;


STEP 4
<Provider store={store}>
  <StorePersistence />
  <App />
</Provider>















































          <div className="flex items-center justify-center flex-col">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-5 border border-red-600">
                <input
                  type="text"
                  placeholder="Name your Project"
                  className="border-b w-full h-full p-2 border-borderButton bg-transparent outline-none"
                />

                <div>
                  <div className="flex gap-3 border-borderButton border p-5 rounded-12 w-[550px]  h-[550px] items-center justify-center">
                    <img className="w-10 h-10" src={img.html} alt="" />
                    <img className="w-10 h-10" src={img.grid} alt="" />
                    <img className="w-10 h-10" src={img.picture} alt="" />
                    <img className="w-10 h-10" src={img.textIcon} alt="" />
                  </div>
                </div>
              </div>
            </Formik>
          </div>
