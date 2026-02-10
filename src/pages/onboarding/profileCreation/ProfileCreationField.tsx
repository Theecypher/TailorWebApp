import type { FieldConfig } from "../../../shared/types";

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