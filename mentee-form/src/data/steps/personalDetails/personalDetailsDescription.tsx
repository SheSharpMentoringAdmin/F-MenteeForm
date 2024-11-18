import FormPropsTextFields from "@/components/textfield";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

export const PersonalDetailsDescription: FormSteps = {
  label: "Personal Details",
  description: (
    <div>
      <FormPropsTextFields label="Full Name" multiline={false} />
      <FormPropsTextFields label="Date of Birth" multiline={false} />
      <FormPropsTextFields label="Email Address" multiline={false} />
    </div>
  ),
};
