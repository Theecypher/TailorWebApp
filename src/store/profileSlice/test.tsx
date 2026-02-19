import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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

export interface WorkExperienceItem {
  id: string; // unique ID for edits/removal
  companyName: string;
  role: string;
  startDate: string;
  endDate?: string;
  description?: string;
}

export interface ProfileFormData {
  personalInformation?: PersonalInformation;
  aboutMe?: AboutMe;
  socialLinks?: SocialLinks;
  workExperience: WorkExperienceItem[];
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
  name: "profileSteps",
  initialState,
  reducers: {
    updateStepData: <T extends keyof Omit<ProfileFormData, "workExperience">>(
      state,
      action: PayloadAction<{ step: T; data: ProfileFormData[T] }>,
    ) => {
      const { step, data } = action.payload;
      state.formData[step] = {
        ...state.formData[step],
        ...data,
      };
    },
    addWorkExperience: (state, action: PayloadAction<WorkExperienceItem>) => {
      state.formData.workExperience.push(action.payload);
    },
    editWorkExperience: (state, action: PayloadAction<WorkExperienceItem>) => {
      const index = state.formData.workExperience.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.formData.workExperience[index] = action.payload;
      }
    },
    removeWorkExperience: (state, action: PayloadAction<string>) => {
      state.formData.workExperience = state.formData.workExperience.filter(
        (item) => item.id !== action.payload,
      );
    },
    setStep: (state, action: PayloadAction<ProfileCreationStep>) => {
      state.currentStep = action.payload;
    },

    nextStep: (state) => {
      const currentIndex = stepOrder.indexOf(state.currentStep);
      if (currentIndex < stepOrder.length - 1) {
        state.currentStep = stepOrder[currentIndex + 1];
      }
    },
    setIsAddingWorkExperience: (state, action: PayloadAction<boolean>) => {
      state.isAddingWorkExperience = action.payload;
    },
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
