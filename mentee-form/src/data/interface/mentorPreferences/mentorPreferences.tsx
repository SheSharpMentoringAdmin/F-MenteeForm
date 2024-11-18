import { Field } from "./field/field";
import { Personality } from "./personality/personality";

export interface MentorPreferences {
  gender: string;
  field: Field;
  personality: Personality;
}
