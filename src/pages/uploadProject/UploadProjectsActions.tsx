import { useState } from "react";
import { img } from "../../constant";
import UploadProjectModal from "../../components/modals/UploadProjectModal";
import { useDispatch, } from "react-redux";
import { type AppDispatch, } from "../../store";
import type { MediaItem } from "../../types/media";
import { addMedia } from "../../store/MediaSlice/MediaSlice";
import { fileToBase64 } from "../../utils/FileToBase64";


interface UploadActionsProps {
  className?: string;
}

const UploadProjectActions = ({ className }: UploadActionsProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleFiles = async (files: FileList | null) => {
    if (!files) return;

    for (const file of Array.from(files)) {
      const base64 = await fileToBase64(file);
      const type = file.type.startsWith("video") ? "video" : "image";

      const mediaItem: MediaItem = {
        id: Date.now().toString(6),
        type,
        content: base64,
      };

      // dispatch(addMedia(mediaItem));
      dispatch(addMedia({ status: "inProgress", item: mediaItem }));
    }
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
