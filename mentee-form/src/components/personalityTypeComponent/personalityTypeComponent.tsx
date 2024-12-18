"use client";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import SelectLabels from "../select";
import { PersonalityType } from "@/data/interface/personalityType/personalityType";
import { addPersonalityType } from "@/redux/slice/personalityTypeSlice";

const elements = [
  { item: "INTJ" }, // Architect
  { item: "INTP" }, // Thinker
  { item: "ENTJ" }, // Commander
  { item: "ENTP" }, // Debater
  { item: "INFJ" }, // Advocate
  { item: "INFP" }, // Mediator
  { item: "ENFJ" }, // Protagonist
  { item: "ENFP" }, // Campaigner
  { item: "ISTJ" }, // Logistician
  { item: "ISFJ" }, // Defender
  { item: "ESTJ" }, // Executive
  { item: "ESFJ" }, // Consul
  { item: "ISTP" }, // Virtuoso
  { item: "ISFP" }, // Adventurer
  { item: "ESTP" }, // Entrepreneur
  { item: "ESFP" }, // Entertainer
];

const PersonalityTypeComponent = () => {
  const personalityTypeState = useSelector(
    (state: RootState) => state.personalityType
  );
  const dispatch = useDispatch();

  const [values, setValues] = useState<PersonalityType>({
    personalityType: personalityTypeState?.personalityType || "",
  });

  const handleChange = (fieldName: keyof PersonalityType, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addPersonalityType(values));
  }, [values, dispatch]);

  return (
    <div>
      <SelectLabels
        label="Personality Type"
        element={elements}
        chosenValue={values?.personalityType}
        onSelectChange={(value) => handleChange("personalityType", value)}
      />
    </div>
  );
};

export default PersonalityTypeComponent;
