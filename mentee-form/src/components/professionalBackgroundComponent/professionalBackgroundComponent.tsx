"use client";

import { useDispatch, useSelector } from "react-redux";
import FormPropsTextFields from "../textfield";
import { AppDispatch, RootState } from "@/redux/store/store";
import { ProfessionalBackground } from "@/data/interface/professionalBackground/professionalBackground";
import { useEffect, useState } from "react";
import { addProfessionalBackground } from "@/redux/slice/professionalBackgroundSlice";

const ProfessionalBackgroundComponent = () => {
  const professionalBackgroundState = useSelector(
    (state: RootState) => state.professionalBackground
  );
  const dispatch = useDispatch<AppDispatch>();

  const [values, setValues] = useState<ProfessionalBackground>({
    graduateProgram: professionalBackgroundState?.graduateProgram || "",
    currentRole: professionalBackgroundState?.currentRole || "",
    previousRoles: professionalBackgroundState?.previousRoles || "",
    bu_division_specialty:
      professionalBackgroundState?.bu_division_specialty || "",
  });

  const handleChange = (
    fieldName: keyof ProfessionalBackground,
    value: string
  ) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addProfessionalBackground(values));
  }, [values, dispatch]);

  return (
    <div>
      <FormPropsTextFields
        label="What graduate programme did you come into Fonterra from?"
        multiline={false}
        value={values.graduateProgram}
        onChange={(value) => handleChange("graduateProgram", value)}
      />
      <FormPropsTextFields
        label="What is your current role at Fonterra?"
        multiline={false}
        value={values.currentRole}
        onChange={(value) => handleChange("currentRole", value)}
      />
      <FormPropsTextFields
        label="What roles have you held since the Fonterra graduate programme?"
        multiline={false}
        value={values.previousRoles}
        onChange={(value) => handleChange("previousRoles", value)}
      />
      <FormPropsTextFields
        label="What’s your BU/Division/Speciality?"
        multiline={false}
        value={values.bu_division_specialty}
        onChange={(value) => handleChange("bu_division_specialty", value)}
      />
    </div>
  );
};
export default ProfessionalBackgroundComponent;
