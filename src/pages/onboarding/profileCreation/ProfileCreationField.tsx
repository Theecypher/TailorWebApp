import type { FieldConfig } from "../../../shared/types";
import tiktok from "../../../assets/png/TikTok.png";

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
        label: "",
        value: "",
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
    name: "Instagram",
    label: "instagram",
    logo: tiktok,
    placeholder: "Enter your Instagram url",
    type: "text",
  },
  {
    name: "X (Twitter)",
    label: "Twitter",
    logo: tiktok,
    placeholder: "Enter your x url",
    type: "text",
  },
  {
    name: "facebook",
    label: "Facebook",
    logo: tiktok,
    placeholder: "Enter your facebook url",
    type: "text",
  },
  {
    name: "Tiktok",
    label: "Tiktok",
    logo: tiktok,
    placeholder: "Enter your tiktok url",
    type: "text",
  },
];

export const workExperienceFields: FieldConfig[] = [
  {
    name: "role",
    label: "",
    placeholder: "",
    type: "text",
  },
  {
    name: "employmentType",
    label: "",
    placeholder: "",
    type: "select",
  },
  {
    name: "organisation",
    label: "",
    placeholder: "",
    type: "text",
  },
  {
    name: "startdate",
    label: "",
    placeholder: "",
    type: "text",
  },
  {
    name: "throughDate",
    label: "",
    placeholder: "",
    type: "text",
  },
  {
    name: "description",
    label: "",
    placeholder: "",
    type: "textarea",
  },
];
