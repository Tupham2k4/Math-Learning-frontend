import React from "react";
import grades from "../../../Data/Grade.js";
import GradeCard from "./GradeCard";
import "./GradeList.css";

const GradeList = () => {
  return (
    <div className="grade-grid">
      {grades.map((item) => (
        <GradeCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GradeList;
