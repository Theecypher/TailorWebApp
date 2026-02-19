import {
  AboutMeFields,
  PersonalInformationFields,
  socialLinksFields,
  workExperienceFields,
  WorkExperienceFormData,
} from "../pages/onboarding/profileCreation/ProfileCreationField";
import type { FieldConfig } from "../shared/types";

export type ProfileStep =
  | "personalInformation"
  | "aboutMe"
  | "socialLinks"
  | "workExperience";

export const STEP_CONFIG: Record<
  ProfileStep,
  {
    title: string;
    subtitle: string;
    fields: FieldConfig[];
    submitText: string;
    layoutClassName?: string;
    addIcon?: boolean;
  }
> = {
  personalInformation: {
    title: "Personal Infromation",
    subtitle: "Provide your personal details",
    fields: PersonalInformationFields,
    submitText: "Continue",
  },
  aboutMe: {
    title: "About Me",
    subtitle: "Share your story.",
    fields: AboutMeFields,
    submitText: "Continue",
  },
  socialLinks: {
    title: "Social Links",
    subtitle: "Connect your socials.",
    fields: socialLinksFields,
    submitText: "Continue",
  },
  workExperience: {
    title: "Work Experience",
    subtitle:
      "Adding your work experience helps potential clients and collaborators understand your background and the unique skills you bring to every projectt",
    fields: WorkExperienceFormData,
    submitText: "Submit",
    addIcon: true,
    layoutClassName: "grid grid-cols-2 gap-5 &>*:nth-child(n+3)]:col-span-2",
  },
};

export const STEP_DEFAULTS: Record<ProfileStep, any> = {
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
    facebook: "",
    instagram: "",
    x: "",
  },
  workExperience: {
    experience: [],
  },
  // workExperience: {
  //   role: "",
  //   employmentType: "",
  //   startDate: "",
  //   throughDate: "",
  //   organisation: "",
  //   isStillInRole: false,
  //   description: "",
  // },
};

export type WorkExperienceProps = {
  id: string;
  role: string | null;
  employmentType: "" | "Part-Time" | "Full-Time" | "Contract" | "Freelance";
  organisation: string | null;
  startDate: string | null;
  throughDate: string | null;
  isStillInRole: boolean;
  desription: string | null;
};
