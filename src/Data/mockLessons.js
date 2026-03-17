import mockLessonGrade1 from "./mockLessonGrade1.json";

// Map theo lessonId để sau này mở rộng nhiều bài
export const mockLessonsById = {
  [mockLessonGrade1.lesson.id]: mockLessonGrade1.lesson,
};

