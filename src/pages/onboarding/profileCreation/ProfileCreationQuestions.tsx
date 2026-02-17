import { generateYupSchema } from "../../../utils/YupSchema";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store";
import {
  AboutMeFields,
  PersonalInformationFields,
  socialLinksFields,
  workExperienceFields,
} from "./ProfileCreationField";
import {
  nextStep,
  setIsAddingWorkExperience,
  updateStepData,
} from "../../../store/profileSlice";

const ProfileCreationQuestion = () => {
  const dispatch = useDispatch();
  const profileStep = useSelector(
    (state: RootState) => state.profile.currentStep,
  ) as StepKey;

 

  const allData = useSelector((state: RootState) => state.profile.formData);

  const profileSteps = {
    personalInformation: {
      title: "Personal Information",
      subtitle:
        "Provide your personal details to help build a complete profile.",
      fields: PersonalInformationFields,
      submitText: "Continue",
      initialValues: allData.personalInformation,
    },

    aboutMe: {
      title: "About Me",
      subtitle:
        "Share a brief overview of your passion, experience, and what drives your creativity.",
      fields: AboutMeFields,
      submitText: "Continue",
      initialValues: allData.aboutMe,
    },

    socialLinks: {
      title: "Social Links",
      subtitle: "Connect your social media profiles",
      fields: socialLinksFields,
      submitText: "Continue",
      initialValues: allData.socialLinks,
    },

    workExperience: {
      title: "Previous Work Experience",
      submitText: "Submit",
      subtitle: "",
      fields: workExperienceFields,
      initialValues: allData.workExperience,
      // {
      //   role: "",
      //   employmentType: "",
      //   organisation: "",
      //   startDate: "",
      //   throughDate: "",
      //   stillInRole: false,
      //   description: "",
      // },
    },
  } as const;

  type StepKey = keyof typeof profileSteps;

  const currentStep = profileSteps[profileStep];

  const handleSubmit = (values: any) => {
    dispatch(
      updateStepData({
        step: profileStep,
        data: values,
      }),
    );

    if (profileStep !== "workExperience") {
      dispatch(nextStep());
    } else {
      dispatch(setIsAddingWorkExperience(true));
      console.log("Complete Profile:", allData);
      return;
    }

    console.log("Submitted values:", profileStep, values);
  };

  const validationSchema = generateYupSchema(currentStep.fields);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <>
      <ProfileCreationForm
        fields={currentStep.fields}
        initialValues={currentStep?.initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        submitText={currentStep?.submitText}
        formLayoutClassname="px-5 mb-[300px]"
        buttonClassName="text-white"
        title={currentStep?.title}
        handleAddClick={handleClick}
        subTitle={currentStep?.subtitle}
      />
    </>
  );
};

export default ProfileCreationQuestion;
