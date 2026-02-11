import { useEffect, useMemo, useState } from "react";
import { generateYupSchema } from "../../../utils/YupSchema";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import {
  AboutMeFields,
  PersonalInformationFields,
  socialLinksFields,
  workExperienceFields,
} from "./ProfileCreationField";

type PersonalInformationProps = {
  name?: string;
  location?: string;
  tailoringSKills?: string;
  yearsOfExperience?: string;
  businessName?: string;
  descriptionAboutMe?: string;
  tiktok?: string;
  instagram?: string;
  x?: string;
  facebook?: string;

};
const profileSteps = {
  personalInformation: {
    title: "Personal Information",
    subtitle:
      "Provide your personal details to help build a complete profile.",
    fields: PersonalInformationFields,
    initialValues: {
      name: "",
      location: "",
      tailoringSKills: "",
      yearsOfExperience: "",
    },
  },

  aboutMe: {
    title: "About Me",
    subtitle:
      "Share a brief overview of your passion, experience, and what drives your creativity.",
    fields: AboutMeFields,
    initialValues: {
      businessName: "",
      descriptionAboutMe: "",
    },
  },

  socialLinks: {
    title: "Social Links",
    subtitle: "Connect your social media profiles",
    fields: socialLinksFields,
    initialValues: {
      tiktok: "",
      instagram: "",
      x: "",
      facebook: "",
    },
  },

  //  workExperience: {
  //   title: "Previous Work Experience",
  //   subtitle:
  //     "Adding your work experience helps potential clients understand your background...",
  //   fields: workExperienceFields,
  //   initialValues: { ... },
  // },
} as const;

type StepKey = keyof typeof profileSteps;

const ProfileCreationQuestion = () => {

  const profileStep = useSelector(
    (state: RootState) => state.profile.ProfileStep,
  ) as StepKey | undefined;

  // Get current step config or fallback
  const currentStep = profileStep && profileSteps[profileStep];

  // Memoize validation schema per step
  const validationSchema = useMemo(() => {
    if (!currentStep) return null;
    return generateYupSchema(currentStep.fields);
  }, [currentStep]);

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
    // Here you would usually:
    // 1. Save to redux / context / api
    // 2. Move to next step
    // dispatch(nextProfileStep())
  };


  const profileStep = useSelector(
    (state: RootState) => state.profile.ProfileStep,
  );

  console.log(profileStep);

  return (
    <>
      <ProfileCreationForm
        fields={PersonalInformationFields}
        initialValues={}
        validationSchema={personalvalidationSchema}
        onSubmit={handleSubmit}
        submitText="Continue"
        formLayoutClassname="px-5"
        buttonClassName="text-white"
        title="Personal Information"
        subTitle="Provide your personal details to help build a complete profile."
      />
    </>
  );
};

export default ProfileCreationQuestion;
