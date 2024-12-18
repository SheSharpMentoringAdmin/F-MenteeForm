import { useDispatch, useSelector } from "react-redux";
import FormPropsTextFields from "../textfield";
import { RootState } from "@/redux/store/store";
import { useEffect, useState } from "react";
import { Goals } from "@/data/interface/goals/goals";
import { addGoals } from "@/redux/slice/goalsSlice";

const GoalsComponent = () => {
  const goalsState = useSelector((state: RootState) => state.goals);
  const dispatch = useDispatch();

  const [values, setValues] = useState<Goals>({
    levelOfAgency: goalsState?.levelOfAgency || "",
    matters: goalsState?.matters || "",
    mentoringGoal: goalsState?.mentoringGoal || "",
  });

  const handleChange = (fieldName: keyof Goals, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    dispatch(addGoals(values));
  }, [values, dispatch]);

  return (
    <div>
      <FormPropsTextFields
        multiline={true}
        label="What level of agency (?) do you feel you have with your career?"
        value={values.levelOfAgency}
        onChange={(value) => handleChange("levelOfAgency", value)}
      />
      <FormPropsTextFields
        multiline={true}
        label="What matters most to you with your career in the foreseeable future?"
        value={values.matters}
        onChange={(value) => handleChange("matters", value)}
      />
      <FormPropsTextFields
        multiline={true}
        label="Why would you like a mentor / what would you like to get out of mentoring?"
        value={values.mentoringGoal}
        onChange={(value) => handleChange("mentoringGoal", value)}
      />
    </div>
  );
};

export default GoalsComponent;
