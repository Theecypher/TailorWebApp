import { useState } from "react";

type MediaFile = {
  file: File;
  preview: string;
  type: "image" | "video";
};

type Props = {
  img: {
    picture: string;
    video: string;
  };
};

const MediaUpload: React.FC<Props> = ({ img }) => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: MediaFile[] = Array.from(selectedFiles).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
    }));

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div>
      {/* Upload Icons */}
      <div className="flex gap-4 mb-4">
        {/* Image Upload */}
        <label className="cursor-pointer">
          <img src={img.picture} className="w-10 h-10" />
          <input
            type="file"
            accept="image/*"
            multiple
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>

        {/* Video Upload */}
        <label className="cursor-pointer">
          <img src={img.video} className="w-10 h-10" />
          <input
            type="file"
            accept="video/*"
            multiple
            hidden
            onChange={(e) => handleFiles(e.target.files)}
          />
        </label>
      </div>

      {/* Drag & Drop */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-md p-6 text-center transition ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
      >
        Drag & drop images or videos here
      </div>

      {/* Preview */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {files.map((item, index) =>
          item.type === "image" ? (
            <img
              key={index}
              src={item.preview}
              className="w-full h-32 object-cover rounded"
            />
          ) : (
            <video
              key={index}
              src={item.preview}
              controls
              className="w-full h-32 rounded"
            />
          )
        )}
      </div>
    </div>
  );
};

export default MediaUpload;
