import LogoHeader from "../../../components/viewport/LogoHeader";
import ProfileCreationQuestion from "./ProfileCreationQuestions";

const ProfileCreationWrapper = () => {
  // cos
  return (
    <div className="w-full overflow-hidden">
      <LogoHeader />

      <ProfileCreationQuestion />
    </div>
  );
};

export default ProfileCreationWrapper;
