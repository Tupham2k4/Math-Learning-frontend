import React from "react";
import { useParams } from "react-router-dom";
import GradePageHeader from "./GradePageHeader/GradePageHeader";
import exerciseChapters from "../../../Data/exerciseChapters";
import exerciseLessons from "../../../Data/exerciseLessons";
import grades from "../../../Data/Grade";
import ChapterList from "./ChapterList/ChapterList";
import "./GradeDetailPage.css";

const GradeDetailPage = () => {
  const { gradeId } = useParams();

  // URL dạng /bai-giang/lop-1 → gradeId = "1"
  const gradeNumber = parseInt(gradeId, 10) || 1;

  const gradeConfig = grades.find((item) => item.malop === gradeNumber);
  const themeColor = gradeConfig ? gradeConfig.maunen : "#cde8ce";

  const chapters =
    exerciseChapters && exerciseChapters[gradeNumber]
      ? exerciseChapters[gradeNumber]
      : [];

  const getLessonsForGrade = () => {
    const lessonsData = {};
    if (!chapters || chapters.length === 0) return lessonsData;

    chapters.forEach((chapter) => {
      if (exerciseLessons) {
        lessonsData[chapter.id] = exerciseLessons[chapter.id] || [];
      } else {
        lessonsData[chapter.id] = [];
      }
    });

    return lessonsData;
  };

  const lessons = getLessonsForGrade();

  if (!exerciseChapters || !chapters.length) {
    return (
      <div className="grade-detail-page">
        <div className="grade-detail-container">
          <GradePageHeader
            grade={gradeNumber}
            subtitle="Đang cập nhật nội dung bài giảng..."
          />
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              fontSize: "18px",
              color: "#666",
            }}
          >
            Đang cập nhật nội dung bài giảng cho lớp {gradeNumber}...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grade-detail-page">
      <div className="grade-detail-container">
        <GradePageHeader
          grade={gradeNumber}
          subtitle="Chọn bài giảng và bắt đầu học ngay hôm nay"
        />
        <ChapterList
          chapters={chapters}
          lessons={lessons}
          gradeId={gradeNumber}
          themeColor={themeColor}
        />
      </div>
    </div>
  );
};

export default GradeDetailPage;
