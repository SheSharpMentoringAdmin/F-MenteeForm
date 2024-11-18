import FormPropsTextFields from "@/components/textfield";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

export const ProfessionalBackground: FormSteps = {
  label: "Professional Background",
  description: (
    <div>
      <FormPropsTextFields label="What graduate programme did you come into Fonterra from?" />
      <FormPropsTextFields label="What is your current role at Fonterra?" />
      <FormPropsTextFields label="What roles have you held since the Fonterra graduate programme?" />
      <FormPropsTextFields label="What’s your BU/Division/Speciality?" />
    </div>
  ),
};
