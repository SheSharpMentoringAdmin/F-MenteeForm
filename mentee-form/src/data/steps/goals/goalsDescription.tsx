import FormPropsTextFields from "@/components/textfield";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

export const GoalsDescription: FormSteps = {
  label: "Goals",
  description: (
    <div>
      <FormPropsTextFields
        multiline={true}
        label="What level of agency (?) do you feel you have with your career?"
      />
      <FormPropsTextFields
        multiline={true}
        label="What matters most to you with your career in the foreseeable future?"
      />
      <FormPropsTextFields
        multiline={true}
        label="Why would you like a mentor / what would you like to get out of mentoring?"
      />
    </div>
  ),
};
