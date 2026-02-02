import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const UploadProjectDisplay = () => {
  const mediaItems = useSelector((state: RootState) => state.media.inProgress);

  return (
    <div className=" pr-2">
      {/* <div className="max-h-[65vh] overflow-y-auto space-y-3 pr-2"> */}
      {mediaItems.map((item) => (
        <div key={item.id} className="relative rounded p-2">
          {/* {item.type === "image" && (
            <img
              src={item.content}
              className="w-full h-full object-cover rounded"
              alt=""
            />
          )}

          {item.type === "video" && (
            <video
              src={item.content}
              controls
              className="w-full h-32 rounded"
            />
          )}

          {item.type === "text" && (
            <p className="text-sm whitespace-pre-wrap">{item.content}</p>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default UploadProjectDisplay;
