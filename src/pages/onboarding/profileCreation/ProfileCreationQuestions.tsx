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
  submitText: string;
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
    subtitle: "Provide your personal details to help build a complete profile.",
    fields: PersonalInformationFields,
    submitText: "Continue",
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
    submitText: "Continue",
    initialValues: {
      businessName: "",
      descriptionAboutMe: "",
    },
  },

  socialLinks: {
    title: "Social Links",
    subtitle: "Connect your social media profiles",
    fields: socialLinksFields,
    submitText: "Continue",
    initialValues: {
      tiktok: "",
      instagram: "",
      x: "",
      facebook: "",
    },
  },

  workExperience: {
    title: "Previous Work Experience",
    submitText: "Continue",
    subtitle: "",
    fields: workExperienceFields,
    initialValues: {
      workExperience: "",
    },
  },
} as const;

type StepKey = keyof typeof profileSteps;

const ProfileCreationQuestion = () => {
  const profileStep = useSelector(
    (state: RootState) => state.profile.ProfileStep,
  ) as StepKey;

  const currentStep = profileSteps[profileStep];

  // const validationSchema = useMemo(() => {
  //   if (!currentStep) return null;
  //   return generateYupSchema(currentStep.fields);
  // }, [currentStep]);

  const handleSubmit = (values: any) => {
    console.log("Submitted values:", values);
  };

  const validationSchema = generateYupSchema(currentStep.fields);

  return (
    <>
      <ProfileCreationForm
        fields={currentStep.fields}
        initialValues={currentStep?.initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        submitText={currentStep?.submitText}
        formLayoutClassname="px-5"
        buttonClassName="text-white"
        title={currentStep?.title}
        subTitle={currentStep?.subtitle}
      />
    </>
  );
};

export default ProfileCreationQuestion;
