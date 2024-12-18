import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MentorPreferencesInitialState } from "../initialState/mentorPreferencesState";
import { MentorPreferences } from "@/data/interface/mentorPreferences/mentorPreferences";

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
});

export const { addMentorPreferences } = mentorPreferencesSlice.actions;
export default mentorPreferencesSlice.reducer;
