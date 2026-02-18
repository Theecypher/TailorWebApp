import { useState } from "react";
import ProfileCreationForm from "../../../shared/dynamicForm/ProfileCreationForm";
import {
  STEP_CONFIG,
  STEP_DEFAULTS,
  type ProfileStep,
} from "../../../types/Profile";
import { generateYupSchema } from "../../../utils/YupSchema";
import IsMobile from "../../../utils/lib/IsMobile";

const ProfileCreationQuestion = () => {
  const [isMobile] = IsMobile();
  const [currentStep, setCurrentStep] = useState<ProfileStep>(
    "personalInformation",
  );

  const [formData, setFormData] =
    useState<Record<ProfileStep, any>>(STEP_DEFAULTS);

  const stepConfig = STEP_CONFIG[currentStep];

  const handleSubmit = (values: any) => {
    setFormData((prev) => ({
      ...prev,
      [currentStep]: values,
    }));

    if (currentStep != "workExperience") {
      const steps: ProfileStep[] = [
        "personalInformation",
        "aboutMe",
        "socialLinks",
        "workExperience",
      ];

      const nextIndex = steps.indexOf(currentStep) + 1;

      setCurrentStep(steps[nextIndex]);
    } else {
      console.log("Final Data:", {
        ...formData,
        [currentStep]: values,
      });
    }
  };

  const handleClick = () => {
    console.log(true);
  };

  const validationSchema = generateYupSchema(stepConfig.fields);

  return (
    <>
      <div className="lg:flex">
        {!isMobile && (
          <div className="w-[20%] border-r flex justify-center py-6">
            <div>
              <div className="flex flex-col gap-5 h-full">
                {Object.keys(STEP_CONFIG).map((stepkey) => {
                  const step = stepkey as ProfileStep;
                  const isActive = currentStep === step;
                  return (
                    <div
                      key={step}
                      onClick={() => setCurrentStep(step)}
                      className={`cursor-pointer p-3 rounded-10 transition ${isActive ? "bg-primary_active font-bold text-white" : "text-black hover:bg-gray-100"}`}
                    >
                      {STEP_CONFIG[step].title}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        <div className="w-full lg:w-[80%]">
          <ProfileCreationForm
            fields={stepConfig.fields}
            initialValues={formData[currentStep]}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            submitText={stepConfig.submitText}
            buttonClassName="text-white"
            title={stepConfig?.title}
            formLayoutClassname={stepConfig.layoutClassName}
            handleAddClick={handleClick}
            addIcon={stepConfig.addIcon}
            subTitle={stepConfig?.subtitle}
          />
        </div>
      </div>
    </>
  );
};

export default ProfileCreationQuestion;
