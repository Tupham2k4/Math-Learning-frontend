import React, { useState } from "react";
import LessonItem from "../LessonItem/LessonItem";
import clock1 from "../../../Assets/clock1.png";
import "./ChapterAccordion.css";

const ChapterAccordion = ({
  chapter,
  lessons,
  gradeId,
  defaultOpen = false,
  themeColor,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chapter-accordion ${isOpen ? "active" : ""}`}>
      <button
        className="chapter-header"
        onClick={toggleAccordion}
        style={{ "--header-bg": themeColor || "#eaf8ed" }}
      >
        <div className="chapter-header-content">
          <div className="chapter-icon">
            <img src={clock1} alt="Chapter" className="chapter-clock-icon" />
          </div>
          <span className="chapter-title">{chapter.title}</span>
        </div>

        <div className={`chapter-arrow ${isOpen ? "rotated" : ""}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      <div className={`chapter-content ${isOpen ? "expanded" : ""}`}>
        <div className="chapter-lessons">
          {lessons && lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonItem
                key={lesson.id}
                lesson={lesson}
                gradeId={gradeId}
                chapterId={chapter.id}
              />
            ))
          ) : (
            <div className="no-lessons">Chưa có bài học trong chương này</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterAccordion;
