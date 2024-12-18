import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfessionalBackground } from "@/data/interface/professionalBackground/professionalBackground";
import { professionalBackgroundInitialState } from "../initialState/professionalBackgroundInitialState";

const professionalBackgroundSlice = createSlice({
  name: "professionalBackground",
  initialState: professionalBackgroundInitialState,
  reducers: {
    addProfessionalBackground: (
      state,
      action: PayloadAction<ProfessionalBackground>
    ) => {
      state.currentRole = action.payload.currentRole;
      state.graduateProgram = action.payload.graduateProgram;
      state.previousRoles = action.payload.previousRoles;
      state.bu_division_specialty = action.payload.bu_division_specialty;
    },
  },
});

export const { addProfessionalBackground } =
  professionalBackgroundSlice.actions;

export default professionalBackgroundSlice.reducer;
