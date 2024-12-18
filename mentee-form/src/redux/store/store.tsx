import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "../slice/personalDetailsSlice";
import professionalBackgroundReducer from "../slice/professionalBackgroundSlice";
import skillsReducer from "../slice/skillsSlice";
import goalsReducer from "../slice/goalsSlice";
import mentorPreferencesReducer from "../slice/mentorPreferenceSlice";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    professionalBackground: professionalBackgroundReducer,
    skills: skillsReducer,
    goals: goalsReducer,
    mentorPreferences: mentorPreferencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
