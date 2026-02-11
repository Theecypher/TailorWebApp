import { useEffect, useMemo, useState } from "react";
import { generateYupSchema } from "../../../utils/YupSchema";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import {
  AboutMeFields,
  PersonalInformationFields,
  socialLinksFields,
} from "./ProfileCreationField";

const ProfileCreationQuestion = () => {
  type PersonalInformationProps = {
    name?: string;
    location?: string;
    tailoringSKills?: string;
    yearsOfExperience?: string;
    businessName?: string;
    descriptionAboutMe?: string; 
    tiktok?: string,
    instagram?: string,
    x?: string,
    facebook?: string,

  };

  const PersonalInfoinitialValues = useMemo<PersonalInformationProps>(
    () => ({
      name: "",
      location: "",
      tailoringSKills: "",
      yearsOfExperience: "",
    }),
    [],
  );
  const aboutMeInitialValues = {
    businessName: "",
    descriptionAboutMe: "",
  };

  const socialLinksInitialValues = {
    tiktok: "",
    instagram: "",
    x: "",
    facebook: "",
  };
  const personalvalidationSchema = useMemo(
    () => generateYupSchema(PersonalInformationFields),
    [PersonalInformationFields],
  );

  const aboutMeValidationSchema = useMemo(
    () => generateYupSchema(AboutMeFields),
    [AboutMeFields],
  );
  const socialLinksValidationSchema = useMemo(
    () => generateYupSchema(socialLinksFields),
    [socialLinksFields],
  );

  const handleSubmit = (values: typeof PersonalInfoinitialValues) => {
    console.log(values);
  };
  const profileStep = useSelector(
    (state: RootState) => state.profile.ProfileStep,
  );

  console.log(profileStep);

  return (
    <>
      {profileStep === "personalInformation" && (
        <ProfileCreationForm
          fields={PersonalInformationFields}
          initialValues={PersonalInfoinitialValues}
          validationSchema={personalvalidationSchema}
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
          fields={AboutMeFields}
          initialValues={aboutMeInitialValues}
          validationSchema={aboutMeValidationSchema}
          onSubmit={handleSubmit}
          submitText="Continue"
          formLayoutClassname="px-5"
          buttonClassName="text-white"
          title="About Me"
          subTitle="Share a brief overview of your passion, experience, and what drives your creativity. "
        />
      )}

      {profileStep === "socialLinks" && (
        <ProfileCreationForm
          fields={socialLinksFields}
          initialValues={socialLinksInitialValues}
          validationSchema={socialLinksValidationSchema}
          onSubmit={handleSubmit}
          submitText="Continue"
          formLayoutClassname="px-5"
          buttonClassName="text-white"
          title="Personal Information"
          subTitle="Provide your personal details to help build a complete profile."
        />
      )}
      {/* {profileStep === "workExperience" && (
        <ProfileCreationForm
          fields={socialLinksFields}
          initialValues={socialLinksInitialValues}
          validationSchema={socialLinksValidationSchema}
          onSubmit={handleSubmit}
          submitText="Continue"
          formLayoutClassname="px-5"
          buttonClassName="text-white"
          title="Previous Work "
          subTitle="Adding your work experience helps potential clients and collaborators understand your background and the unique skills you bring to every project"
        />
      )} */}
    </>
  );
};

export default ProfileCreationQuestion;
