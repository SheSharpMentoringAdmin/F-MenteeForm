import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitPersonalityType = createAsyncThunk(
  "registration/submitPersonalityType",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const personalityTypeSlice = store.getState().personalityType;
      const response = await fetch("/api/personalityType", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([personalDetailsSlice, personalityTypeSlice]),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
