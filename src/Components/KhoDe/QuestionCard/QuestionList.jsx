import React from "react";
import examquestions from "../../../Data/ExamQuestions";
import QuestionCard from "./QuestionCard";
import "./QuestionList.css";
const QuestionList = () => {
  return (
    <div className="examquestions-grid">
      {examquestions.map((item) => (
        <QuestionCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default QuestionList;
