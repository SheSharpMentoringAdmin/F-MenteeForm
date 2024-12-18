import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { personalDetailsInitialState } from "../initialState/personalDetailsInitialState";

const personalDetailsSlice = createSlice({
  name: "personalDetails",
  initialState: personalDetailsInitialState,
  reducers: {
    addPersonalDetails: (state, action: PayloadAction<PersonalDetails>) => {
      state.dob = action.payload.dob;
      state.emailAddress = action.payload.emailAddress;
      state.fullName = action.payload.fullName;
    },
  },
});

export const { addPersonalDetails } = personalDetailsSlice.actions;

export default personalDetailsSlice.reducer;
