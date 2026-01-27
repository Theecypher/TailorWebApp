import { Link, useNavigate } from "react-router";
import ShareWorkButton from "../../shared/button/ShareWorkBtn";

const UploadProject = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/upload/uploadProject");
  };

  return (
    <div className=" relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col gap-3 justify-center items-center text-center">
        <h2 className="font-bold text-20">Upload Work</h2>

        <div className="flex flex-col gap-2 items-center mt-2">
          <p className="text-14 font-normal">
            You're almost there! Share your creative project with the Tailora
            community by uploading it below.
          </p>

          <div className="flex flex-col gap-2 items-center py-5 w-full md:flex-row-reverse">
            <ShareWorkButton onClick={handleSubmit} className="w-full md:w-1/2">
              Get Started
            </ShareWorkButton>

            <Link className="md:w-1/2" to="#">
              Skip
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProject;
