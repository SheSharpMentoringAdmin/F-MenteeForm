import SelectLabels from "@/components/select";
import { FormSteps } from "@/data/interface/formSteps/formSteps";

const elements = [
  { item: "Male" },
  { item: "Female" },
  { item: "No Preference" },
];

const fields = [{ item: "Same field" }, { item: "Different field" }];
const personality = [
  { item: "Similar personality" },
  { item: "Different personality" },
];

export const MentorPreferencesDescription: FormSteps = {
  label: "Mentor Preferences",
  description: (
    <div>
      <SelectLabels label="Gender" element={elements} />
      <SelectLabels label="Someone in the" element={fields} />
      <SelectLabels label="Someone with" element={personality} />
    </div>
  ),
};
