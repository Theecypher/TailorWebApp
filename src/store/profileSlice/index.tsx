import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WorkExperienceProps } from "../../types/Profile";

export type ProfileCreationStep =
  | "personalInformation"
  | "aboutMe"
  | "socialLinks";
// | "workExperience";

interface ProfileState {
  currentStep: ProfileCreationStep;
  formData: {
    personalInformation?: {
      name?: string;
      location?: string;
      tailoringSkills?: string;
      yearsOfExperience?: string;
    };
    aboutMe?: {
      businessName?: string;
      descriptionAboutMe?: string;
    };
    socialLinks?: {
      tiktok?: string;
      instagram?: string;
      facebook?: string;
      x?: string;
    };
  };
  workExperience: WorkExperienceProps[];
  isAddingWorkExperience: boolean;
}

const stepOrder: readonly ProfileCreationStep[] = [
  "personalInformation",
  "aboutMe",
  "socialLinks",
] as const;

const initialState: ProfileState = {
  currentStep: "personalInformation",
  formData: {},
  workExperience: [],
  isAddingWorkExperience: true,
};

const profileSlice = createSlice({
  name: "profileCreation",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<ProfileCreationStep>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      const currentIndex = stepOrder.indexOf(state.currentStep);

      if (currentIndex < 0 || currentIndex >= stepOrder.length - 1) {
        return;
      }
    },
    updateStepData: (
      state,
      action: PayloadAction<{
        step: ProfileCreationStep;
        data: ProfileState["formData"][ProfileCreationStep];
      }>,
    ) => {
      const { step, data } = action.payload;
      state.formData[step] = {
        ...state.formData[step],
        ...data,
      };
    },
    addWorkExperience: (state, action: PayloadAction<WorkExperienceProps>) => {
      state.workExperience.push(action.payload);
    },
   
  },
});
