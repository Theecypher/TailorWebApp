import { useState } from "react";
import { img } from "../../constant";
import UploadProjectModal from "../../components/modals/UploadProjectModal";

interface UploadActionsProps {
  onHandleFile?: (files: FileList | null) => void;
  className?: string;
  onAddText: (text: string) => void;
}

const UploadProjectActions = ({
  className,
  onHandleFile,
  onAddText,
}: UploadActionsProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      {isOpenModal && (
        <UploadProjectModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          onAddText={onAddText}
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
            onChange={(e) => onHandleFile?.(e.target.files)}
            accept="video/*"
            multiple
            hidden
          />
        </label>

        <label className="cursor-pointer">
          <img className="w-10 h-10" src={img.picture} alt="" />
          <input
            type="file"
            onChange={(e) => onHandleFile?.(e.target.files)}
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
