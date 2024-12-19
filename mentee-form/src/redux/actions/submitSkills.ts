import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const submitSkills = createAsyncThunk(
  "registration/submitSkills",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const skillsSlice = store.getState().skills;
      const response = await fetch("/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([personalDetailsSlice, skillsSlice]),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
