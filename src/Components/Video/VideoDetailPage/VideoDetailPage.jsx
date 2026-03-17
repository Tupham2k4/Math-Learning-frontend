import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VideoDetailPage.css";
import exerciseLessons from "../../../Data/exerciseLessons";
import exerciseChapters from "../../../Data/exerciseChapters";
import videoLessons12 from "../../../Data/videoLessons12";

const VideoDetailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state || {};
  const videos = videoLessons12.slice(0, 5);

  const gradeNumber = Number(state.grade || 12);

  // Lấy chương từ JSON exerciseChapters theo lớp
  const chapterList = exerciseChapters[gradeNumber] || [];

  // Dùng dữ liệu từ JSON exerciseLessons cho sidebar
  const chapters = chapterList.map((chapter, chapterIndex) => {
    const lessonList = exerciseLessons[chapter.id] || [];
    return {
      id: chapter.id,
      title: chapter.title,
      description: chapter.description,
      lessons: lessonList.map((lesson, lessonIndex) => ({
        id: lesson.id,
        title: lesson.title,
        // Tạm thời mock thời lượng, có thể cập nhật sau
        duration: "20:00",
        // Đánh dấu bài đầu tiên của chương đầu tiên là active
        active: chapterIndex === 0 && lessonIndex === 0,
      })),
    };
  });

  const totalLessons = chapters.reduce(
    (sum, chapter) => sum + chapter.lessons.length,
    0,
  );

  const activeChapter = chapters[0];
  const chapterTitleParts = activeChapter?.title?.split(":") || [];
  const chapterLabel = chapterTitleParts[0] || "Chương I";
  const chapterHeading =
    chapterTitleParts.slice(1).join(":").trim() ||
    activeChapter?.title ||
    "Ứng dụng của đạo hàm";

  return (
    <div className="video-page-wrapper">
      {/* Main 2-column layout under existing global header / hero */}
      <div className="video-page-inner">
        {/* Left sidebar */}
        <aside className="video-sidebar">
          <div className="video-sidebar-header">
            <h2>
              Video bài giảng {state.grade ? `lớp ${state.grade}` : "lớp 12"}
            </h2>
            <p className="video-sidebar-subtitle">
              Lộ trình học theo chương, được thiết kế cho kì thi THPT QG.
            </p>
          </div>

          <div className="video-sidebar-search">
            <input type="text" placeholder="Tìm kiếm bài giảng, chủ đề..." />
          </div>

          <div className="video-sidebar-chapters">
            {chapters.map((chapter) => (
              <details
                key={chapter.id}
                className="video-chapter"
                open={chapter.id === "chuong1"}
              >
                <summary className="video-chapter-summary">
                  <span>{chapter.title}</span>
                  <span className="video-chapter-count">
                    {chapter.lessons.length} bài
                  </span>
                </summary>
                <ul className="video-lesson-list">
                  {chapter.lessons.map((lesson) => (
                    <li
                      key={lesson.id}
                      className={`video-lesson-item ${
                        lesson.active ? "active" : ""
                      }`}
                    >
                      <div className="video-lesson-main">
                        <span className="video-lesson-title">
                          {lesson.title}
                        </span>
                        <span className="video-lesson-duration">
                          {lesson.duration}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </aside>

        {/* Right content area */}
        <section className="video-content">
          {/* Chapter header */}
          <header className="video-chapter-header">
            <div>
              <p className="video-chapter-label">{chapterLabel}</p>
              <h1>{chapterHeading}</h1>
              {activeChapter?.description && (
                <p className="video-chapter-description">
                  {activeChapter.description}
                </p>
              )}
            </div>
            <div className="video-chapter-meta">
              <span>{totalLessons} bài giảng</span>
              <span>•</span>
              <span>Tổng thời lượng ~{Math.round(totalLessons * 0.3)} giờ</span>
            </div>
          </header>

          {/* Filter bar */}
          <div className="video-filter-bar">
            <div className="video-filter-search">
              <input type="text" placeholder="Tìm video trong chương này..." />
            </div>
            <div className="video-filter-controls">
              <label className="video-filter-label">
                Sắp xếp theo
                <select>
                  <option>Mới nhất</option>
                  <option>Xem nhiều nhất</option>
                  <option>Đánh giá cao nhất</option>
                </select>
              </label>
            </div>
          </div>

          {/* Video grid (riêng cho trang chi tiết, tránh ảnh hưởng VideoCard cũ) */}
          <div className="video-detail-grid">
            {videos.map((video) => (
              <article key={video.id} className="video-detail-card">
                <div className="video-detail-thumbnail">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="video-detail-thumbnail-img"
                  />
                  <div className="video-detail-thumbnail-overlay" />
                  <div className="video-detail-thumbnail-play">
                    <span className="play-icon">▶</span>
                  </div>
                  <span className="video-duration-badge">{video.duration}</span>
                  <span className="video-chapter-badge">{video.chapter}</span>
                </div>

                <div className="video-detail-card-body">
                  <h3 className="video-detail-card-title">{video.title}</h3>
                  <div className="video-detail-card-meta">
                    <div className="video-meta-item">
                      <span className="video-meta-icon" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 5C7.5 5 3.7 7.9 2 12C3.7 16.1 7.5 19 12 19C16.5 19 20.3 16.1 22 12C20.3 7.9 16.5 5 12 5Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="12"
                            cy="12"
                            r="3"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <span>{video.views} lượt xem</span>
                    </div>
                    <div className="video-meta-item">
                      <span className="video-meta-icon" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 3L14.4721 8.00527L20 8.8541L16 12.7082L16.9443 18.2223L12 15.5L7.05573 18.2223L8 12.7082L4 8.8541L9.52786 8.00527L12 3Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>4.8/5.0</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="video-primary-btn"
                    onClick={() =>
                      navigate("/video-bai-giang/xem", { state: { video } })
                    }
                  >
                    Xem ngay
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideoDetailPage;
