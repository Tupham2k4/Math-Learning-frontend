import React from "react";
import { useNavigate } from "react-router-dom";
import "./Quiz.css";
import Question from "./Question";

const Result = ({
  score,
  totalQuestions,
  answers,
  quizData,
  gradeId,
  lessonId,
}) => {
  const navigate = useNavigate();
  const percentage = Math.round((score / totalQuestions) * 100);
  let comment = "";
  if (percentage >= 80) {
    comment = "Xuất sắc! Bạn đã làm rất tốt.";
  } else if (percentage >= 60) {
    comment = "Khá tốt! Hãy cố gắng hơn nữa.";
  } else if (percentage >= 40) {
    comment = "Cần cải thiện. Hãy ôn tập lại.";
  } else {
    comment = "Bạn cần ôn tập nhiều hơn.";
  }

  return (
    <div className="result-container">
      <h2>Kết quả bài thi</h2>
      <p className="result-score">
        Điểm số: {score}/{totalQuestions} ({percentage}%)
      </p>
      <p className="result-comment">{comment}</p>
      <div className="review-container">
        <h3>Đáp án chi tiết:</h3>
        {quizData.map((q, index) => (
          <Question
            key={q.id}
            questionIndex={index}
            question={q.question}
            options={q.options}
            selectedAnswer={answers[index]}
            onAnswerSelect={() => {}}
            correctAnswer={q.correctAnswer}
            showResult={true}
          />
        ))}
      </div>
      <button
        className="back-button"
        onClick={() => navigate(`/bai-tap/lop/${gradeId}`)}
      >
        Quay lại bài làm
      </button>
    </div>
  );
};

export default Result;
