import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { goalsInitialState } from "../initialState/goalsInitialState";
import { Goals } from "@/data/interface/goals/goals";

const goalsSlice = createSlice({
  name: "goals",
  initialState: goalsInitialState,
  reducers: {
    addGoals: (state, action: PayloadAction<Goals>) => {
      state.levelOfAgency = action.payload.levelOfAgency;
      state.matters = action.payload.matters;
      state.mentoringGoal = action.payload.mentoringGoal;
    },
  },
});

export const { addGoals } = goalsSlice.actions;
export default goalsSlice.reducer;
