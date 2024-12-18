import { Field } from "@/data/interface/mentorPreferences/field/field";
import { Gender } from "@/data/interface/mentorPreferences/gender/gender";
import { MentorPreferences } from "@/data/interface/mentorPreferences/mentorPreferences";
import { Personality } from "@/data/interface/mentorPreferences/personality/personality";

export const MentorPreferencesInitialState: MentorPreferences = {
  gender: Gender.FEMALE,
  field: Field.SAME,
  personality: Personality.SAME,
};
