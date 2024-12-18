"use client";

import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import FormPropsTextFields from "../textfield";
import { useEffect, useState } from "react";
import { addPersonalDetails } from "@/redux/slice/personalDetailsSlice";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

const PersonalDetailsComponent = () => {
  const personalDetailsState = useSelector(
    (state: RootState) => state.personalDetails
  );
  const dispatch = useDispatch();
  const [val, setVal] = useState<Dayjs | null>(null); // State to store the selected date

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
    <Box paddingTop={2}>
      <FormPropsTextFields
        label="Full Name"
        multiline={false}
        value={values.fullName}
        onChange={(value) => handleChange("fullName", value)}
      />
      <DatePicker
        label="Uncontrolled picker"
        format="DD/MM/YYYY"
        value={val}
        onChange={(newValue) => setVal(newValue)}
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
    </Box>
  );
};

export default PersonalDetailsComponent;
