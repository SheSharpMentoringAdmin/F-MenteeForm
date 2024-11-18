import FormPropsTextFields from "@/components/textfield";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

export const SkillsDescription: FormSteps = {
  label: "Skills",
  description: (
    <div>
      <FormPropsTextFields
        multiline={true}
        label="What ‘soft’ skills would you like to work on?"
      />
      <FormPropsTextFields
        multiline={true}
        label="What ‘hard’ skills would you like to work on?"
      />
    </div>
  ),
};
