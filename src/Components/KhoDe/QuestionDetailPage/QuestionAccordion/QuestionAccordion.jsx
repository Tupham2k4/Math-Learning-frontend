import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./QuestionAccordion.css";
import documentIcon from "../../../Assets/document1.png";

const QuestionAccordion = ({ section, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const { gradeId } = useParams();
  const navigate = useNavigate();

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const openViewer = (examId) => {
    navigate(`/kho-de/lop/${gradeId}/${examId}`);
  };

  return (
    <div className={`question-accordion ${isOpen ? "active" : ""}`}>
      <button className="question-accordion-header" onClick={toggleAccordion}>
        <div className="question-header-content">
          <img src={documentIcon} alt="Document" className="question-icon" />
          <span className="question-title">{section.title}</span>
        </div>
        <div className={`question-arrow ${isOpen ? "rotated" : ""}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="20"
            height="20"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div className={`question-content ${isOpen ? "expanded" : ""}`}>
        <div className="question-list-items">
          {section.exams.map((exam) => (
            <div key={exam.id} className="question-item">
              <span className="question-item-title">{exam.title}</span>
              <button className="view-now-btn" onClick={() => openViewer(exam.id)}>
                Xem ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
