import React from "react";
import ChapterAccordion from "../ChapterAccordion/ChapterAccordion";
import "./ChapterList.css";

const ChapterList = ({ chapters, lessons, gradeId, themeColor }) => {
  return (
    <div className="chapter-list">
      {chapters && chapters.length > 0 ? (
        chapters.map((chapter, index) => (
          <ChapterAccordion
            key={chapter.id}
            chapter={chapter}
            lessons={lessons[chapter.id] || []}
            gradeId={gradeId}
            defaultOpen={index === 0}
            themeColor={themeColor}
          />
        ))
      ) : (
        <div className="no-chapters">
          <p>Chưa có nội dung cho lớp này</p>
        </div>
      )}
    </div>
  );
};

export default ChapterList;
