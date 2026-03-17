import React from "react";
import "./Quiz.css";

const Question = ({
  questionIndex,
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  correctAnswer,
  showResult,
}) => {
  return (
    <div className="question-container">
      <h3 className="question">
        Câu {questionIndex + 1}: {question}
      </h3>
      <ul className="options">
        {options.map((option, index) => {
          let className = "option-radio";
          if (showResult) {
            if (index === selectedAnswer) {
              className += index === correctAnswer ? " correct" : " incorrect";
            } else if (index === correctAnswer) {
              className += " correct";
            }
          } else if (selectedAnswer === index) {
            className += " selected";
          }
          return (
            <li key={index} className="option">
              <label className={className}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => onAnswerSelect(questionIndex, index)}
                  disabled={showResult}
                />
                {String.fromCharCode(65 + index)}. {option}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
