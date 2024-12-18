"use client";

import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import FormPropsTextFields from "../textfield";
import { useEffect, useState } from "react";
import { addPersonalDetails } from "@/redux/slice/personalDetailsSlice";

const PersonalDetailsComponent = () => {
  const personalDetailsState = useSelector(
    (state: RootState) => state.personalDetails
  );
  const dispatch = useDispatch();

  const [values, setValues] = useState<PersonalDetails>({
    fullName: personalDetailsState?.fullName || "",
    dob: personalDetailsState?.dob || "",
    emailAddress: personalDetailsState?.emailAddress || "",
  });

  const handleChange = (fieldName: keyof PersonalDetails, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addPersonalDetails(values));
  }, [values, dispatch]);

  return (
    <div>
      <FormPropsTextFields
        label="Full Name"
        multiline={false}
        value={values.fullName}
        onChange={(value) => handleChange("fullName", value)}
      />
      <FormPropsTextFields
        label="Date of Birth"
        multiline={false}
        value={values.dob}
        onChange={(value) => handleChange("dob", value)}
      />
      <FormPropsTextFields
        label="Email Address"
        multiline={false}
        value={values.emailAddress}
        onChange={(value) => handleChange("emailAddress", value)}
      />
    </div>
  );
};

export default PersonalDetailsComponent;
