import { useDispatch, useSelector } from "react-redux";
import FormPropsTextFields from "../textfield";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { Skills } from "@/data/interface/skills/skills";
import { addSkills } from "@/redux/slice/skillsSlice";

const SkillsComponent = () => {
  const skillsState = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  const [values, setValues] = useState<Skills>({
    softSkills: skillsState?.softSkills || "",
    hardSkills: skillsState?.hardSkills || "",
  });

  const handleChange = (fieldName: keyof Skills, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addSkills(values));
  }, [values, dispatch]);

  return (
    <div>
      <FormPropsTextFields
        multiline={true}
        label="What ‘soft’ skills would you like to work on?"
        value={skillsState.softSkills}
        onChange={(value) => handleChange("softSkills", value)}
      />
      <FormPropsTextFields
        multiline={true}
        label="What ‘hard’ skills would you like to work on?"
        value={skillsState.hardSkills}
        onChange={(value) => handleChange("hardSkills", value)}
      />
    </div>
  );
};

export default SkillsComponent;
