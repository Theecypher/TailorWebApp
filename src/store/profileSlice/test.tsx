import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { WorkExperienceProps } from "../../types/Profile";

export type ProfileCreationStep =
  | "personalInformation"
  | "aboutMe"
  | "socialLinks"
  | "workExperience";

export interface PersonalInformation {
  name?: string;
  location?: string;
  tailoringSkills?: string;
  yearsOfExperience?: string;
}

export interface AboutMe {
  businessName?: string;
  descriptionAboutMe?: string;
}

export interface SocialLinks {
  tiktok?: string;
  instagram?: string;
  facebook?: string;
  x?: string;
}

export interface ProfileFormData {
  personalInformation?: PersonalInformation;
  aboutMe?: AboutMe;
  socialLinks?: SocialLinks;
  workExperience: WorkExperienceProps[];
}

export interface ProfileState {
  currentStep: ProfileCreationStep;
  formData: ProfileFormData;
  isAddingWorkExperience: boolean;
}

const initialState: ProfileState = {
  currentStep: "personalInformation",
  formData: {
    workExperience: [],
  },
  isAddingWorkExperience: false,
};

const stepOrder: readonly ProfileCreationStep[] = [
  "personalInformation",
  "aboutMe",
  "socialLinks",
  "workExperience",
] as const;

const profileSlice = createSlice({
  name: "profileCreation",
  initialState,
  reducers: {
    setStep: (
      state: ProfileState,
      action: PayloadAction<ProfileCreationStep>,
    ) => {
      state.currentStep = action.payload;
    },

    nextStep: (state: ProfileState) => {
      const currentIndex = stepOrder.indexOf(state.currentStep);
      if (currentIndex < stepOrder.length - 1) {
        state.currentStep = stepOrder[currentIndex + 1];
      }
    },

    setIsAddingWorkExperience: (
      state: ProfileState,
      action: PayloadAction<boolean>,
    ) => {
      state.isAddingWorkExperience = action.payload;
    },

    updateStepData: <T extends keyof Omit<ProfileFormData, "workExperience">>(
      state: ProfileState,
      action: PayloadAction<{ step: T; data: ProfileFormData[T] }>,
    ) => {
      const { step, data } = action.payload;
      state.formData[step] = {
        ...state.formData[step],
        ...data,
      };
    },

    addWorkExperience: (
      state: ProfileState,
      action: PayloadAction<WorkExperienceProps>,
    ) => {
      state.formData.workExperience.push(action.payload);
    },

    editWorkExperience: (
      state: ProfileState,
      action: PayloadAction<WorkExperienceProps>,
    ) => {
      const index = state.formData.workExperience.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) state.formData.workExperience[index] = action.payload;
    },

    removeWorkExperience: (
      state: ProfileState,
      action: PayloadAction<string>,
    ) => {
      state.formData.workExperience = state.formData.workExperience.filter(
        (item) => item.id !== action.payload,
      );
    },

    resetProfile: () => initialState,
  },
});

export const {
  setStep,
  nextStep,
  setIsAddingWorkExperience,
  updateStepData,
  addWorkExperience,
  editWorkExperience,
  removeWorkExperience,
} = profileSlice.actions;

export default profileSlice.reducer;
