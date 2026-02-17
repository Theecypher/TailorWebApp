import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import type { RootState } from "..";
export type ProfileCreationStep =
  | "personalInformation"
  | "aboutMe"
  | "socialLinks"
  | "workExperience";

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
    workExperience?: Record<string, any>;
  };
  isAddingWorkExperience: boolean;
}

interface ProfileState {
  currentStep: ProfileCreationStep;
}

const stepOrder: readonly ProfileCreationStep[] = [
  "personalInformation",
  "aboutMe",
  "socialLinks",
  "workExperience",
] as const;

const initialState: ProfileState = {
  currentStep: "personalInformation",
  formData: {},
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
      state.currentStep = stepOrder[currentIndex + 1];
    },
    setIsAddingWorkExperience: (state, action: PayloadAction<boolean>) => {
      state.isAddingWorkExperience = action.payload;
    },
    updateStepData: (
      state,
      action: PayloadAction<{
        step: ProfileCreationStep;
        data: Record<string, any>;
      }>,
    ) => {
      const { step, data } = action.payload;
      state.formData[step] = { ...state.formData[step], ...data };
    },

    resetProfile: () => initialState,
  },
});

export const { setStep, nextStep, updateStepData, setIsAddingWorkExperience } =
  profileSlice.actions;

// This is what you will import into the store
export default profileSlice.reducer;
