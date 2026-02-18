import { useNavigate } from "react-router";
import LogoHeader from "../../../components/viewport/LogoHeader";
import ShareWorkButton from "../../../shared/button/ShareWorkBtn";

const ProfileCreation = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(true);
    navigate("/profile-creation");
  };

  return (
    <div className="overflow-hidden">
      <LogoHeader />

      <div className="absolute top-[50%] translate-y-[-50%] lg:left-[50%] lg:translate-x-[-50%]">
        <div className="flex flex-col gap-8 justify-center items-center text-center w-full px-8 md:px-[100px] lg:px-16">
          <div className="flex items-center flex-col gap-5 w-full ">
            <h2 className="font-bold text-20 md:text-[40px]">Next,</h2>

            <p className="text-16 font-normal w-full md:w-[80%] lg:w-full">
              We would like to get to know more about you. Follow the next steps
              to create a professional profile.
            </p>
          </div>

          <div className="flex items-center flex-col gap-8 w-full">
            <ShareWorkButton
              onClick={handleSubmit}
              className="w-full text-white"
            >
              Get Started
            </ShareWorkButton>

            <p className="text-16 font-normal opacity-60 w-[99%] md:w-[55%] lg:w-full text-center">
              This will take a few minutes. Your progress will automatically be
              saved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreation;
