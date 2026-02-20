import DynamicForm, { type FieldConfig } from "./DynamicForm";
import { useDispatch, useSelector } from "react-redux";
import { generateYupSchema } from "../../utils/YupSchema";
import { v4 as uuidv4 } from "uuid";
import type { WorkExperienceProps } from "../../types/Profile";
import { useEffect, useState } from "react";
import type { RootState } from "../../store";
import { addWorkExperience } from "../../store/profileSlice";

type WorkExperienceConfig = {
  showExperienceForm: boolean;
  setShowExperienceForm: React.Dispatch<React.SetStateAction<boolean>>;
};

// {}: FormGeneratorProps<T>

const WorkExperienceForm = ({
  setShowExperienceForm,
}: WorkExperienceConfig) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<WorkExperienceProps>({
    id: "",
    role: "",
    employmentType: "",
    startDate: "",
    throughDate: "",
    organisation: "",
    stillInRole: false,
    description: "",
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
      name: "startDate",
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

  const initialValues: WorkExperienceProps = {
    id: "",
    role: "",
    employmentType: "",
    startDate: "",
    throughDate: "",
    organisation: "",
    stillInRole: false,
    description: "",
  };
  const workExperience: WorkExperienceProps[] = useSelector(
    (state: RootState) => state.profile.formData.workExperience,
  );

  const validationSchema = generateYupSchema(workExperienceFields);

  const handleSubmit = (values: WorkExperienceProps) => {
    if (!values.organisation) {
      return;
    }

    const isDuplicate = workExperience.some(
      (exp) =>
        exp.organisation?.trim().toLowerCase() ===
        values.organisation!.trim().toLowerCase(),
    );

    if (isDuplicate) {
      alert("This organization already exists.");
    }

    dispatch(
      addWorkExperience({
        ...values,
        id: uuidv4(),
      }),
    );

    setShowExperienceForm(false);
  };

  useEffect(() => {
    console.log(workExperience);
  }, [workExperience]);

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
