"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { steps } from "@/data/steps/steps";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store/store";
import { useEffect } from "react";
import { submitPersonalDetails } from "@/redux/actions/submitPersonalDetails";
import { submitProfessionalBackground } from "@/redux/actions/submitProfessionalBackground";
import { submitMentorPreferences } from "@/redux/actions/submitMentorPreferences";
import { submitGoals } from "@/redux/actions/submitGoals";
import { submitSkills } from "@/redux/actions/submitSkills";
import { submitPersonalityType } from "@/redux/actions/submitPersonalityType";

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    const submitData = async () => {
      Promise.all([
        dispatch(submitPersonalDetails()),
        dispatch(submitProfessionalBackground()),
        dispatch(submitMentorPreferences()),
        dispatch(submitGoals()),
        dispatch(submitSkills()),
        dispatch(submitPersonalityType()),
      ]).then(() => {
        console.log("success");
      });
    };
    if (activeStep == 6) {
      submitData();
    }
  }, [activeStep, dispatch]);

  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <div>{step.description}</div>
              <Box sx={{ mb: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
