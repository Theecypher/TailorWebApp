import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProfileCreationList } from "../../pages-types/types";



type ProfileConfig = {
  ProfileStep: ProfileCreationList;
};





const initialState: ProfileConfig = {
  ProfileStep: "personalInformation",
};

const ProfileSlice = createSlice({
  name: "profile-creation",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<ProfileCreationList>) => {
      state.ProfileStep = action.payload;
    },
  },
});

export const { setValue } = ProfileSlice.actions;
export default ProfileSlice.reducer
