import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitMentorPreferences = createAsyncThunk(
  "registration/submitMentorPreferences",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const mentorPreferencesSlice = store.getState().mentorPreferences;
      const response = await fetch("/api/mentorPreferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([personalDetailsSlice, mentorPreferencesSlice]),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
