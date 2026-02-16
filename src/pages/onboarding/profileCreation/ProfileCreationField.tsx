import type { FieldConfig } from "../../../shared/types";
import tiktok from "../../../assets/png/TikTok.png";
import facebook from "../../../assets/svg/facebook.svg";
import x from "../../../assets/png/x.png";
import instagram from "../../../assets/png/Instagram.png";

export const PersonalInformationFields: FieldConfig[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "location",
    type: "text",
    required: true,
    label: "location",
  },
  {
    name: "tailoringSkills",
    label: "Tailoring Skills",
    type: "text",
  },
  {
    name: "yearsOfExperience",
    label: "Years Of Experience",
    type: "select",
    options: [
      {
        label: "1-3 years",
        value: "1-3",
      },
      {
        label: "4-6 years",
        value: "4-6",
      },
      {
        label: "7-10 years",
        value: "7-10",
      },
      {
        label: "More than 10 years",
        value: ">10",
      },
    ],
  },
];

export const AboutMeFields: FieldConfig[] = [
  {
    name: "businessName",
    label: "Business Name(optional)",
    type: "text",
  },
  {
    name: "descriptionAboutMe",
    label: "Description About Me",
    type: "textarea",
  },
];

export const socialLinksFields: FieldConfig[] = [
  {
    name: "instagram",
    label: "Instagram",
    hasLogo: true,
    logo: instagram,
    placeholder: "Enter your Instagram url",
    type: "text",
  },
  {
    name: "x",
    label: "X (Twitter)",
    hasLogo: true,
    logo: x,
    placeholder: "Enter your x url",
    type: "text",
  },
  {
    name: "facebook",
    label: "Facebook",
    hasLogo: true,
    logo: facebook,
    placeholder: "Enter your facebook url",
    type: "text",
  },
  {
    name: "tiktok",
    label: "Tiktok",
    logo: tiktok,
    hasLogo: true,
    placeholder: "Enter your tiktok url",
    type: "text",
  },
];

export interface WorkExperience {
  role: string;
  employmentType: "partTime" | "fullTime" | "contract" | "freelance";
  organisation: string;
  startdate: string;         
  throughDate: string | null; 
  stillInRole: boolean;
  description: string;
}




export const workExperienceDataFields: FieldConfig[] = [
  {
    name: "role",
    label: "Role",
    placeholder: "e.g Tailor",
    type: "text",
  },
  {
    name: "employmentType",
    label: "Employment Type",
    placeholder: "",
    type: "select",
    options: [
      {
        label: "Part Time",
        value: "partTime",
      },
      {
        label: "Full Time",
        value: "fullTime",
      },
      {
        label: "Contract",
        value: "contract",
      },
      {
        label: "Freelance",
        value: "freelance",
      },
    ],
  },
  {
    name: "organisation",
    label: "Organization",
    placeholder: "Name of Organization",
    type: "text",
  },
  {
    name: "startdate",
    label: "Start Date",
    placeholder: "",
    type: "date",
  },
  {
    name: "throughDate",
    label: "Through Date",
    placeholder: "",
    type: "date",
  },
  {
    name: "stillInRole",
    label: "I am currently still in this role",
    placeholder: "",
    type: "checkbox",
  },
  {
    name: "description",
    label: "A brief description about your role",
    placeholder: "",
    type: "textarea",
  },
];

export type WorkExperienceFormData = WorkExperience;

export const workExperienceFields: FieldConfig[] = [
  {
    name: "role",
    label: "Role",
    placeholder: "e.g Tailor",
    type: "text",
  },
  {
    name: "employmentType",
    label: "Employment Type",
    placeholder: "",
    type: "select",
    options: [
      {
        label: "Part Time",
        value: "partTime",
      },
      {
        label: "Full Time",
        value: "fullTime",
      },
      {
        label: "Contract",
        value: "contract",
      },
      {
        label: "Freelance",
        value: "freelance",
      },
    ],
  },
  {
    name: "organisation",
    label: "Organization",
    placeholder: "Name of Organization",
    type: "text",
  },
  {
    name: "startdate",
    label: "Start Date",
    placeholder: "",
    type: "date",
  },
  {
    name: "throughDate",
    label: "Through Date",
    placeholder: "",
    type: "date",
  },
  {
    name: "stillInRole",
    label: "I am currently still in this role",
    placeholder: "",
    type: "checkbox",
  },
  {
    name: "description",
    label: "A brief description about your role",
    placeholder: "",
    type: "textarea",
  },
];
