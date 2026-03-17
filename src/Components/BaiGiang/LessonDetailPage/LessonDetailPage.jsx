import React, { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import LessonPageHeader from "./LessonPageHeader";
import LessonObjective from "./LessonObjective";
import QuizQuestion from "./QuizQuestion";
import LessonSidebar from "./LessonSidebar";
import { mockLessonsById } from "../../../Data/mockLessons";
import placeholderImg from "../../Assets/image.png";
import "./LessonDetailPage.css";

const LessonDetailPage = () => {
  const { gradeId, lessonId } = useParams();
  const grade = parseInt(gradeId, 10) || 1;

  const lesson = mockLessonsById[lessonId] || mockLessonsById["lop1_ch1_l3"];

  const next = lesson?.nextLessons || [];
  const prev = useMemo(() => {
    // Mock đơn giản: lấy bài đầu tiên trong nextLessons làm "bài trước" giả lập khi chưa có backend
    return null;
  }, []);

  if (!lesson) return null;

  return (
    <div className="lesson-detail-page">
      <LessonPageHeader grade={grade} lessonTitle={lesson.title} />

      <div className="lesson-banner">
        <div className="lesson-banner-inner">
          <h2 className="lesson-banner-title">{lesson.title}</h2>
          <p className="lesson-banner-desc">{lesson.description}</p>
        </div>
      </div>

      <div className="lesson-container">
        <div className="lesson-grid">
          <main className="lesson-main">
            <section className="lesson-card">
              <h2 className="lesson-title">{lesson.title}</h2>
              <LessonObjective objectives={lesson.objectives} />
            </section>

            <section className="lesson-card" id="concept">
              <h3 className="lesson-section-title">1. Khái niệm</h3>
              <p className="lesson-text">{lesson.concept?.content}</p>
            </section>

            <section className="lesson-card" id="examples">
              <h3 className="lesson-section-title">2. Ví dụ minh hoạ</h3>
              <div className="lesson-examples">
                {lesson.examples?.map((ex) => (
                  <div key={ex.id} className="lesson-example">
                    <div className="lesson-example-text">{ex.text}</div>
                    <img
                      className="lesson-example-img"
                      src={placeholderImg}
                      alt="example"
                    />
                  </div>
                ))}
              </div>
            </section>

            <section className="lesson-card" id="note">
              <h3 className="lesson-section-title">3. Ghi nhớ</h3>
              <ul className="lesson-bullets">
                <li>Mỗi đồ vật chỉ được đếm 1 lần.</li>
                <li>Số đọc cuối cùng cho biết tổng số đồ vật.</li>
              </ul>
            </section>

            <section className="lesson-card" id="practice">
              <h3 className="lesson-section-title">4. Bài tập vận dụng</h3>
              <p className="lesson-text">
                Em hãy đếm số đồ vật trong hình và chọn số đúng (phần này có thể
                mở rộng sau khi có backend).
              </p>
            </section>

            <section className="lesson-card">
              <QuizQuestion quiz={lesson.quiz} />
            </section>

            <div className="lesson-nav">
              <div className="lesson-nav-left">
                {prev ? (
                  <Link className="lesson-nav-btn" to={prev}>
                    ← Bài trước
                  </Link>
                ) : (
                  <button className="lesson-nav-btn disabled" type="button">
                    ← Bài trước
                  </button>
                )}
              </div>
              <div className="lesson-nav-right">
                {next?.[0]?.id ? (
                  <Link
                    className="lesson-nav-btn primary"
                    to={`/bai-giang/lop/${grade}/bai/${next[0].id}`}
                  >
                    Bài tiếp theo →
                  </Link>
                ) : (
                  <button className="lesson-nav-btn disabled" type="button">
                    Bài tiếp theo →
                  </button>
                )}
              </div>
            </div>
          </main>

          <LessonSidebar
            grade={grade}
            outline={lesson.lessonOutline}
            nextLessons={lesson.nextLessons}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonDetailPage;

