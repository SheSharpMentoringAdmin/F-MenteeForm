import SelectLabels from "@/components/select";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

const elements = [
  {
    item: "INFJ",
  },
];
export const PersonalityTypeDescription: FormSteps = {
  label: "Personality Type",
  description: (
    <div>
      {" "}
      <SelectLabels label="Personality Type" element={elements} />
    </div>
  ),
};
