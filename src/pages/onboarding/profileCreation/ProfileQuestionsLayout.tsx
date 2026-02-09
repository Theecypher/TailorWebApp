import { useEffect, useMemo, useState } from "react";
import DynamicForm, {
  type FieldConfig,
} from "../../../shared/dynamicForm/DynamicForm";

const ProfileQuestionsLayout = () => {
  //   const tabs = [
  //     {
  //       value: "personalInfo",
  //     },
  //     { value: "aboutMe" },
  //     {
  //       value: "socialLinks",
  //     },
  //     {
  //       value: "workExperience",
  //     },
  //   ];

  const tab = "aboutMe";
  const [isActive, setActive] = useState("aboutMe");

  return (
    <div className="">
      <div className="flex flex-col gap-5 py-5 w-full relative md:my-10 lg:w-[80%] lg:mb-8 lg:mt-2">
        <div className="flex flex-col gap-3 px-5">
          <h2 className="text-24 font-bold">Personal Information</h2>

          <p className="text-16">
            Provide your personal details to help build a complete profile.
          </p>
        </div>

        {isActive === tab && (
          <DynamicForm
            fields={}
            initialValues={}
            validationSchema={}
            onSubmit={}
            submitText="Continue"
            formLayoutClassname="px-5"
            buttonClassName="text-white"
            topBorderClassName="border-t px-5 border-border w-full px-2 py-4 absolute bottom-[-32%] lg:bottom-[10px]"
            buttonWrapperClassName="md:w-[30%] md:justify-self-end"
            layoutClassname="grid grid-row-6 gap-4 [&>*:last-child]:row-span-2"
          />
        )}

        <div className="w-full"></div>
      </div>
    </div>
  );
};

export default ProfileQuestionsLayout;
