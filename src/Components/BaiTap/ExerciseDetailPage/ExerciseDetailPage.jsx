import React from "react";
import { useParams } from "react-router-dom";
import ExercisePageHeader from "./ExercisePageHeader/ExercisePageHeader";
import ChapterList from "./ChapterList/ChapterList";
import exercise from "../../../Data/exercise";
import exerciseChapters from "../../../Data/exerciseChapters";
import exerciseLessons from "../../../Data/exerciseLessons";
import "./ExerciseDetailPage.css";

const ExerciseDetailPage = () => {
  // Lấy gradeId từ URL params
  const { gradeId } = useParams();
  const grade = parseInt(gradeId) || 1;

  console.log("Loading ExerciseDetailPage for grade:", grade);
  const gradeConfig = exercise.find((item) => item.malop === grade);
  const themeColor = gradeConfig ? gradeConfig.maunen : "#eaf8ed";

  // Lấy dữ liệu chapters và lessons theo lớp
  // Thêm kiểm tra an toàn cho exerciseChapters
  const chapters =
    exerciseChapters && exerciseChapters[grade] ? exerciseChapters[grade] : [];

  // Tạo object lessons cho lớp hiện tại
  const getLessonsForGrade = () => {
    const lessonsData = {};
    if (!chapters || chapters.length === 0) return lessonsData;

    chapters.forEach((chapter) => {
      // Thêm kiểm tra an toàn cho exerciseLessons
      if (exerciseLessons) {
        lessonsData[chapter.id] = exerciseLessons[chapter.id] || [];
      } else {
        lessonsData[chapter.id] = [];
      }
    });
    return lessonsData;
  };

  const lessons = getLessonsForGrade();

  console.log("Chapters loaded:", chapters.length);
  console.log("Lessons loaded:", Object.keys(lessons).length);

  if (!exerciseChapters || !chapters.length) {
    return (
      <div className="exercise-detail-page">
        <div className="exercise-detail-container">
          <ExercisePageHeader
            grade={grade}
            subtitle="Đang cập nhật nội dung..."
            backgroundColor={themeColor}
          />
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              fontSize: "18px",
              color: "#666",
            }}
          >
            Đang cập nhật nội dung cho lớp {grade}...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="exercise-detail-page">
      <div className="exercise-detail-container">
        <ExercisePageHeader
          grade={grade}
          subtitle="Chọn bài học và bắt đầu luyện tập ngay hôm nay"
          backgroundColor={themeColor}
        />
        <ChapterList
          chapters={chapters}
          lessons={lessons}
          gradeId={grade}
          themeColor={themeColor}
        />
      </div>
    </div>
  );
};

export default ExerciseDetailPage;
