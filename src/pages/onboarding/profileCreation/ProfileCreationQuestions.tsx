import { useEffect, useMemo, useState } from "react";
import DynamicForm, {
  type FieldConfig,
} from "../../../shared/dynamicForm/DynamicForm";

import { generateYupSchema } from "../../../utils/YupSchema";
import IsMobile from "../../../utils/lib/IsMobile";

import { ProfileCreationData } from "../../../Data/ProfileCreationData";

const ProfileCreationQuestion = () => {
  const [isMobile] = IsMobile();

  type PersonalInformationProps = {
    name: string;
    location: string;
    tailoringSKills: string;
    yearsOfExperience: string;
  };

  type ViewProfileContextType = {
    selectedType?: string;
    setSelectedType?: (tab: string) => void;
  };

  const ProfileCreationFields: FieldConfig[] = [
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
    () => generateYupSchema(ProfileCreationFields),
    [ProfileCreationFields],
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

  const [selectedTab, setSelectedType] = useState("");
  const [activeTab, setActiveTab] = useState("personalInfo");

  useEffect(() => {
    setSelectedType?.(activeTab);
  }, [activeTab, setSelectedType]);

  return (
    <div className="lg:flex h-screen overflow-hidden">
      {!isMobile && (
        <div className="w-[20%] border-r flex justify-center py-6 mt-2">
          <div>
            <div className="flex flex-col gap-5">
              {ProfileCreationData.map((link) => {
                const isActive = activeTab === link.value;
                return (
                  <div
                    key={link.value}
                    onClick={() => setActiveTab(link.value)}
                    className={`flex gap-4 items-center  transition-all duration-200 p-3 text-center ${isActive ? "bg-primary_active rounded-10 font-bold text-white" : "text-black"} `}
                  >
                    <img className="" src={link.img} alt="" />
                    <h2>{link.label}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-5 py-5 w-full relative md:my-10 lg:w-[80%] lg:mb-8 lg:mt-2">
        <div className="flex flex-col gap-3 px-5">
          <h2 className="text-24 font-bold">Personal Information</h2>

          <p className="text-16">
            Provide your personal details to help build a complete profile.
          </p>
        </div>

        <div className="w-full">
          <DynamicForm
            fields={ProfileCreationFields}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitText="Continue"
            formLayoutClassname="px-5"
            buttonClassName="text-white"
            topBorderClassName="border-t px-5 border-border w-full px-2 py-4 absolute bottom-[-32%] lg:bottom-[10px]"
            buttonWrapperClassName="md:w-[30%] md:justify-self-end"
            layoutClassname="grid grid-row-6 gap-4 [&>*:last-child]:row-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCreationQuestion;
