import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import ProfileList from "../../helpers/AccountList";
import type { ProfileItem } from "../../pages-types/types";



type SectionState = {
  ProfileList: ProfileItem[];
};

const initialState: SectionState = {
  ProfileList: ProfileList,
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setPathList(state, action: PayloadAction<ProfileItem[]>) {
      state.ProfileList = action.payload;
    },
  },
});

export const { setPathList } = sectionSlice.actions
export default sectionSlice.reducer