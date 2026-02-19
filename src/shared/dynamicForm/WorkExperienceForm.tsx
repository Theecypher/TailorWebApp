import { validateYupSchema } from "formik";

import DynamicForm, { type FieldConfig } from "./DynamicForm";
import { useDispatch } from "react-redux";
import { generateYupSchema } from "../../utils/YupSchema";
import type { workExperience } from "../types";
import { setIsAddingWorkExperience } from "../../store/profileSlice";
import { useState } from "react";
import type { WorkExperienceProps } from "../../types/Profile";

// {}: FormGeneratorProps<T>



const WorkExperienceForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<WorkExperienceProps>({
    id: "",
    role: "",
    startDate: "",
    throughDate: "",
    organisation: "",
    isStillInRole: false,
    desription: "",
  });

  const workExperienceFields: FieldConfig[] = [
    {
      name: "role",
      label: "Role",
      placeholder: "e.g Tailor",
      type: "text",
      required: true,
    },
    {
      name: "employmentType",
      label: "Employment Type",
      placeholder: "",
      type: "select",
      required: true,
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

  const initialValues: workExperience = {
    role: "",
    employmentType: "",
    startDate: "",
    throughDate: "",
    organisation: "",
    isStillInRole: false,
    desription: "",
  };

  const validationSchema = generateYupSchema(workExperienceFields);

  const handleSubmit = async (values: workExperience) => {
    dispatch(setIsAddingWorkExperience(false));
  };

  return (
    <div className="h-screen px-5 py-5 w-full">
      <div className="flex flex-col gap-5 py-5 w-full ">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-20">Work Experience</h2>
        </div>

        <div>
          <DynamicForm
            fields={workExperienceFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitText="Save"
            cancelLink="Skip"
            buttonWrapperClassName="lg:w-[30%]"
            buttonClassName="text-white"
            formLayoutClassname="grid grid-cols-2 gap-5 &>*:nth-child(n+3)]:col-span-2"
            topBorderClassName="flex gap-5 w-full lg:w-[70%] flex-row-reverse gap-10 items-center place-self-end pt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceForm;
