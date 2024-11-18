import { MentorPreferencesDescription } from "./mentorPreferences/mentorPreferencesDescription";
import { PersonalDetailsDescription } from "./personalDetails/personalDetailsDescription";
import { ProfessionalBackground } from "./professionalBackground/professionalBackgroundDescription";
import { SkillsDescription } from "./skills/skillsDescription";
import { GoalsDescription } from "./goals/goalsDescription";
import { PersonalityTypeDescription } from "./personalityType/personalityTypeDescription";

export const steps = [
  {
    label: PersonalDetailsDescription.label,
    description: PersonalDetailsDescription.description,
  },
  {
    label: ProfessionalBackground.label,
    description: ProfessionalBackground.description,
  },
  {
    label: MentorPreferencesDescription.label,
    description: MentorPreferencesDescription.description,
  },
  {
    label: SkillsDescription.label,
    description: SkillsDescription.description,
  },
  {
    label: GoalsDescription.label,
    description: GoalsDescription.description,
  },
  {
    label: PersonalityTypeDescription.label,
    description: PersonalityTypeDescription.description,
  },
];
