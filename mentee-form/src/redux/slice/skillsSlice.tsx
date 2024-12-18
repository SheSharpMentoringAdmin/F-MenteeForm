import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { skillsInitialState } from "../initialState/skillsInitialState";
import { Skills } from "@/data/interface/skills/skills";

const skillsSlice = createSlice({
  name: "skills",
  initialState: skillsInitialState,
  reducers: {
    addSkills: (state, action: PayloadAction<Skills>) => {
      state.softSkills = action.payload.softSkills;
      state.hardSkills = action.payload.hardSkills;
    },
  },
});

export const { addSkills } = skillsSlice.actions;
export default skillsSlice.reducer;
