import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitGoals = createAsyncThunk(
  "registration/submitGoals",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const goalsSlice = store.getState().goals;
      const response = await fetch("/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([personalDetailsSlice, goalsSlice]),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
