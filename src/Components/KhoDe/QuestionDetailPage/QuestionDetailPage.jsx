import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import QuestionPageHeader from "./ExercisePageHeader/QuestionPageHeader";
import QuestionList from "./QuestionList/QuestionList";
import examLists from "../../../Data/examLists";
import "./QuestionDetailPage.css";

const QuestionDetailPage = () => {
  const { gradeId } = useParams();
  const grade = parseInt(gradeId) || 1;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gradeId]);

  const questionSections = examLists[grade] || [];

  return (
    <div className="question-detail-page">
      <div className="question-detail-container">
        <QuestionPageHeader
          grade={grade}
          subtitle="Chọn đề thi phù hợp với chủ đề để bắt đầu luyện tập ngay hôm nay"
        />
        <QuestionList questionSections={questionSections} />
      </div>
    </div>
  );
};

export default QuestionDetailPage;
