"use client";

import { PersonalDetails } from "@/data/interface/personalDetails/personalDetails";
import { RootState } from "@/redux/store/store";
import { useSelector, useDispatch } from "react-redux";
import FormPropsTextFields from "../textfield";
import { useEffect, useState } from "react";
import { addPersonalDetails } from "@/redux/slice/personalDetailsSlice";
import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

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

  const addDate = (value: Dayjs | null) => {
    if (value !== null) {
      const formattedDate = value.format("DD/MM/YYYY"); // Format the date as DD/MM/YYYY
      handleChange("dob", formattedDate);
    }
  };

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
        label="Date of birth"
        format="DD/MM/YYYY"
        value={values.dob ? dayjs(values.dob, "DD/MM/YYYY") : null}
        onChange={(newValue) => addDate(newValue)}
        sx={{ paddingBottom: 2 }}
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
