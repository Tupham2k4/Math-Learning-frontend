import React from "react";
import "./WatchVideo.css";
import exerciseLessons from "../../../Data/exerciseLessons";
import exerciseChapters from "../../../Data/exerciseChapters";

const SidebarVideo = () => {
  const gradeNumber = 12;
  const chapterList = exerciseChapters[gradeNumber] || [];

  const chapters = chapterList.map((chapter, chapterIndex) => {
    const lessonList = exerciseLessons[chapter.id] || [];
    return {
      id: chapter.id,
      title: chapter.title,
      lessons: lessonList.map((lesson, lessonIndex) => ({
        id: lesson.id,
        title: lesson.title,
        active: chapterIndex === 0 && lessonIndex === 0,
      })),
    };
  });

  return (
    <div className="sidebar-video">
      <div className="sidebar-video-header">
        <h2>Video bài giảng toán</h2>
        <p className="sidebar-video-subtitle">
          Khám phá video bài giảng chất lượng cao cho lớp 12.
        </p>
      </div>

      <div className="sidebar-video-search">
        <input type="text" placeholder="Tìm kiếm video..." />
      </div>

      <div className="sidebar-video-chapters">
        {chapters.map((chapter, index) => (
          <details
            key={chapter.id}
            className="sidebar-video-chapter"
            open={index === 0}
          >
            <summary className="sidebar-video-chapter-summary">
              <span>{chapter.title}</span>
              <span className="sidebar-video-chapter-count">
                {chapter.lessons.length} bài
              </span>
            </summary>
            <ul className="sidebar-video-lesson-list">
              {chapter.lessons.map((lesson) => (
                <li
                  key={lesson.id}
                  className={`sidebar-video-lesson-item ${
                    lesson.active ? "active" : ""
                  }`}
                >
                  <span className="sidebar-video-lesson-title">
                    {lesson.title}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  );
};

export default SidebarVideo;
