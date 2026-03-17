import React from "react";
import exercise from "../../../Data/exercise";
import Exercise from "./Exercise";
import "./ExerciseList.css";
const ExerciseList = () => {
  return (
    <div className="exercise-grid">
      {exercise.map((item) => (
        <Exercise key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ExerciseList;
