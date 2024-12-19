import { store } from "../store/store";
import { createAsyncThunk } from "@reduxjs/toolkit";

export enum Status {
  Completed = "COMPLETED",
  Incomplete = "INCOMPLETE",
  InProgress = "IN PROGRESS",
}
export const submitPersonalDetails = createAsyncThunk(
  "registration/submitPersonalDetails",
  async () => {
    try {
      const personalDetailsSlice = store.getState().personalDetails;
      const response = await fetch("/api/personalDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalDetailsSlice),
      });
      return response.json(); // Parses JSON response into native JavaScript object
    } catch (error) {
      throw error;
    }
  }
);
