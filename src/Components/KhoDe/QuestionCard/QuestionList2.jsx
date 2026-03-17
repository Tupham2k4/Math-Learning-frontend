import React from "react";
import examquestions2 from "../../../Data/ExamQuestions2";
import QuestionCard from "./QuestionCard";
import "./QuestionList.css";
const QuestionList2 = () => {
  return (
    <div className="examquestions-grid-2">
      {examquestions2.map((item) => (
        <QuestionCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default QuestionList2;
