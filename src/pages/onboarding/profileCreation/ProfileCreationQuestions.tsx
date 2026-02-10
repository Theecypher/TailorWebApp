import { useEffect, useMemo, useState } from "react";
import { type FieldConfig } from "../../../shared/dynamicForm/DynamicForm";
import { generateYupSchema } from "../../../utils/YupSchema";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import { PersonalInformationFields } from "./ProfileCreationField";

const ProfileCreationQuestion = () => {
  type PersonalInformationProps = {
    name: string;
    location: string;
    tailoringSKills: string;
    yearsOfExperience: string;
  };

  const initialValues = useMemo<PersonalInformationProps>(
    () => ({
      name: "",
      location: "",
      tailoringSKills: "",
      yearsOfExperience: "",
    }),
    [],
  );
  const validationSchema = useMemo(
    () => generateYupSchema(PersonalInformationFields),
    [PersonalInformationFields],
  );
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  interface ProfileCreationStepsProp {
    personalInfo: string;
    aboutMe: string;
    socialMedia: string;
    experience: string;
  }

  const profileStep = useSelector(
    (state: RootState) => state.profile.ProfileStep,
  );

  console.log(profileStep);

  return (
    <>
      {profileStep === "personalInformation" && (
        <ProfileCreationForm
          fields={PersonalInformationFields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          submitText="Continue"
          formLayoutClassname="px-5"
          buttonClassName="text-white"
          title="Personal Information"
          subTitle="Provide your personal details to help build a complete profile."
        />
      )}
      {profileStep === "aboutMe" && (
        <ProfileCreationForm
          fields={PersonalInformationFields}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          submitText="Continue"
          formLayoutClassname="px-5"
          buttonClassName="text-white"
          title="Personal Information"
          subTitle="Provide your personal details to help build a complete profile."
        />
      )}
    </>
  );
};

export default ProfileCreationQuestion;
