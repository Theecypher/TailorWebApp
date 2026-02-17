import { generateYupSchema } from "../../../utils/YupSchema";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import {
  AboutMeFields,
  PersonalInformationFields,
  socialLinksFields,
  workExperienceFields,
} from "./ProfileCreationField";
const ProfileCreationQuestion = () => {
  const profileSteps = {
    personalInformation: {
      title: "Personal Information",
      subtitle:
        "Provide your personal details to help build a complete profile.",
      fields: PersonalInformationFields,
      submitText: "Continue",
    },

    aboutMe: {
      title: "About Me",
      subtitle:
        "Share a brief overview of your passion, experience, and what drives your creativity.",
      fields: AboutMeFields,
      submitText: "Continue",
    },

    socialLinks: {
      title: "Social Links",
      subtitle: "Connect your social media profiles",
      fields: socialLinksFields,
      submitText: "Continue",
    },

    workExperience: {
      title: "Previous Work Experience",
      submitText: "Submit",
      subtitle: "",
      fields: workExperienceFields,
    },
  } as const;

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  return (
    <>
      <ProfileCreationForm
        fields={}
        initialValues={}
        validationSchema={}
        onSubmit={handleSubmit}
        submitText={}
        formLayoutClassname="px-5 mb-[300px]"
        buttonClassName="text-white"
        // title={currentStep?.title}
        // handleAddClick={handleClick}
        // subTitle={currentStep?.subtitle}
      />
    </>
  );
};

export default ProfileCreationQuestion;
