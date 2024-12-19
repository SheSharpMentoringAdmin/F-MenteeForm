import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { personalityTypeInitialState } from "../initialState/personalityTypeInitialState";
import { PersonalityType } from "@/data/interface/personalityType/personalityType";
import { submitPersonalityType } from "../actions/submitPersonalityType";

const personalityTypeSlice = createSlice({
  name: "personality type",
  initialState: personalityTypeInitialState,
  reducers: {
    addPersonalityType: (state, action: PayloadAction<PersonalityType>) => {
      state.personalityType = action.payload.personalityType;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitPersonalityType.fulfilled, () => {
      console.log("success");
    });
  },
});

export const { addPersonalityType } = personalityTypeSlice.actions;
export default personalityTypeSlice.reducer;
