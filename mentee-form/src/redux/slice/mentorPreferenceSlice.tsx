import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MentorPreferencesInitialState } from "../initialState/mentorPreferencesState";
import { MentorPreferences } from "@/data/interface/mentorPreferences/mentorPreferences";
import { submitMentorPreferences } from "../actions/submitMentorPreferences";

const mentorPreferencesSlice = createSlice({
  name: "mentor preferences",
  initialState: MentorPreferencesInitialState,
  reducers: {
    addMentorPreferences: (state, action: PayloadAction<MentorPreferences>) => {
      state.gender = action.payload.gender;
      state.field = action.payload.field;
      state.personality = action.payload.personality;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(submitMentorPreferences.fulfilled, () => {
      console.log("success");
    });
  },
});

export const { addMentorPreferences } = mentorPreferencesSlice.actions;
export default mentorPreferencesSlice.reducer;
