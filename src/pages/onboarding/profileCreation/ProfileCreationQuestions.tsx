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


import type { ProfileFormValues } from "../../../types/Profile";

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

  const getInitialValues = (
    step: ProfileCreationStep,
    savedData: Partial<ProfileFormValues> = {},
  ) => {
    const defaults: Record<ProfileCreationStep, Partial<ProfileFormValues>> = {
      personalInformation: {
        name: "",
        location: "",
        tailoringSkills: "",
        yearsOfExperience: "",
      },
      aboutMe: {
        businessName: "",
        descriptionAboutMe: "",
      },
      socialLinks: {
        tiktok: "",
        instagram: "",
        x: "",
        facebook: "",
      },
      workExperience: {
        role: "",
        employmentType: "",
        startDate: "",
        throughDate: "",
        organisation: "",
        isStillInRole: false,
        desription: "",
      },
    };

    const stepDefaults = defaults[step] || {};
    const savedForThisStep = savedData || {};

    return {
      ...stepDefaults,
      ...savedForThisStep,
    } as Partial<ProfileFormValues>;
  };

 

 

  

    console.log("Submitted values:", profileStep, values);

  };

  const validationSchema = generateYupSchema(currentStep.fields);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <ProfileCreationForm
        fields={currentStep.fields}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        submitText={currentStep?.submitText}
        formLayoutClassname="px-5 mb-[300px]"
        buttonClassName="text-white"
        title={currentStep?.title}
        handleAddClick={handleClick}
        subTitle={currentStep?.subtitle}
      />
    </>
  );
};

export default ProfileCreationQuestion;
