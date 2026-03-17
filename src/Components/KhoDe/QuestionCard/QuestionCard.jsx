import React from "react";
import "./QuestionCard.css";
import document from "../../Assets/document.png";
import { Link } from "react-router-dom";
const QuestionCard = ({ item }) => {
  return (
    <div className="question-card">
      <div
        className="question-card-top"
        style={{ backgroundColor: item.maunen }}
      >
        <span className="question-badge">Lớp {item.malop}</span>
        <h3>{item.tenlop}</h3>
        <p>{item.mota}</p>
      </div>
      <div className="question-bottom">
        <div className="question-lessons">
          <img src={document} alt="" className="lesson-icon"></img>
          <span>{item.sode} đề</span>
        </div>
        <div className="question-button">
          <Link
            to={`/kho-de/lop/${item.malop}`}
            className="btn-exercise color"
            style={{ backgroundColor: item.maunut }}
          >
            Bắt đầu làm bài
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
