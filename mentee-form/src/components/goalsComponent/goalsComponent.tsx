import { useDispatch, useSelector } from "react-redux";
import FormPropsTextFields from "../textfield";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { Skills } from "@/data/interface/skills/skills";
import { addSkills } from "@/redux/slice/skillsSlice";
import { Goals } from "@/data/interface/goals/goals";

const GoalsComponent = () => {
  const goalsState = useSelector((state: RootState) => state.goals);
  const dispatch = useDispatch();

  const [values, setValues] = useState<Goals>({
    levelOfAgency: goalsState?.levelOfAgency || "",
    matters: goalsState?.matters || "",
    
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
              label="What level of agency (?) do you feel you have with your career?" value={""} onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
              } }      />
      <FormPropsTextFields
              multiline={true}
              label="What matters most to you with your career in the foreseeable future?" value={""} onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
              } }      />
      <FormPropsTextFields
              multiline={true}
              label="Why would you like a mentor / what would you like to get out of mentoring?" value={""} onChange={function (value: string): void {
                  throw new Error("Function not implemented.");
              } }      />
    </div>
  );
};

export default GoalsComponent;
