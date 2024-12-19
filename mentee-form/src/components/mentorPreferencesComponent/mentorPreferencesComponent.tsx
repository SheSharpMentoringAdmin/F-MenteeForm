"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { MentorPreferences } from "@/data/interface/mentorPreferences/mentorPreferences";
import { addMentorPreferences } from "@/redux/slice/mentorPreferenceSlice";
import SelectLabels from "../select";

const elements = [
  { item: "MALE" },
  { item: "FEMALE" },
  { item: "NO PREFERENCE" },
];

const fields = [{ item: "SAME FIELD" }, { item: "DIFFERENT FIELD" }];
const personality = [
  { item: "SAME PERSONALITY" },
  { item: "DIFFERENT PERSONALITY" },
];

const MentorPreferencesComponent = () => {
  const mentorPreferencesState = useSelector(
    (state: RootState) => state.mentorPreferences
  );
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<MentorPreferences>({
    gender: mentorPreferencesState?.gender || "",
    field: mentorPreferencesState?.field || "",
    personality: mentorPreferencesState?.personality || "",
  });

  const handleChange = (fieldName: keyof MentorPreferences, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addMentorPreferences(values));
  }, [values, dispatch]);

  return (
    <div>
      <SelectLabels
        label="Gender"
        element={elements}
        chosenValue={values?.gender}
        onSelectChange={(value) => handleChange("gender", value)}
      />
      <SelectLabels
        label="Someone in the"
        element={fields}
        chosenValue={values?.field}
        onSelectChange={(value) => handleChange("field", value)}
      />
      <SelectLabels
        label="Someone with"
        element={personality}
        chosenValue={values?.personality}
        onSelectChange={(value) => handleChange("personality", value)}
      />
    </div>
  );
};

export default MentorPreferencesComponent;
