import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitProfessionalBackground = createAsyncThunk(
  "registration/submitProfessionalBackground",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const professionalBackgroundSlice =
        store.getState().professionalBackground;
      const response = await fetch("/api/professionalBackground", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          personalDetailsSlice,
          professionalBackgroundSlice,
        ]),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
