import { configureStore } from "@reduxjs/toolkit";
import personalDetailsReducer from "../slice/personalDetailsSlice";
import professionalBackgroundReducer from "../slice/professionalBackgroundSlice";
import skillsReducer from "../slice/skillsSlice";
import goalsReducer from "../slice/goalsSlice";
import mentorPreferencesReducer from "../slice/mentorPreferenceSlice";
import personalityTypeReducer from "../slice/personalityTypeSlice";

export const store = configureStore({
  reducer: {
    personalDetails: personalDetailsReducer,
    professionalBackground: professionalBackgroundReducer,
    skills: skillsReducer,
    goals: goalsReducer,
    mentorPreferences: mentorPreferencesReducer,
    personalityType: personalityTypeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
