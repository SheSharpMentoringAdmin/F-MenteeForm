import { Field } from "./field/field";
import { Gender } from "./gender/gender";
import { Personality } from "./personality/personality";

export interface MentorPreferences {
  gender: Gender;
  field: Field;
  personality: Personality;
}
