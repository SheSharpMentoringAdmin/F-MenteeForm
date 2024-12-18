import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { personalityTypeInitialState } from "../initialState/personalityTypeInitialState";
import { PersonalityType } from "@/data/interface/personalityType/personalityType";

const personalityTypeSlice = createSlice({
  name: "personality type",
  initialState: personalityTypeInitialState,
  reducers: {
    addPersonalityType: (state, action: PayloadAction<PersonalityType>) => {
      state.personalityType = action.payload.personalityType;
    },
  },
});

export const { addPersonalityType } = personalityTypeSlice.actions;
export default personalityTypeSlice.reducer;
