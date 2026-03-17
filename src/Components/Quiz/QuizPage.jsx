import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Question from "./Question";
import Result from "./Result";
import QuizHeader from "./QuizHeader/QuizHeader";
import exerciseLessons from "../../Data/exerciseLessons";
import "./Quiz.css";

const quizData = [
  {
    id: 1,
    question: "5 + 3 = ?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 2,
  },
  {
    id: 2,
    question: "10 - 4 = ?",
    options: ["5", "6", "7", "8"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "2 × 6 = ?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "15 ÷ 3 = ?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
  },
  {
    id: 5,
    question: "7 + 9 = ?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: "20 - 7 = ?",
    options: ["11", "12", "13", "14"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "4 × 5 = ?",
    options: ["18", "19", "20", "21"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "18 ÷ 2 = ?",
    options: ["7", "8", "9", "10"],
    correctAnswer: 2,
  },
  {
    id: 9,
    question: "3 + 8 = ?",
    options: ["9", "10", "11", "12"],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "25 - 9 = ?",
    options: ["14", "15", "16", "17"],
    correctAnswer: 2,
  },
];

const QuizPage = () => {
  const { gradeId, lessonId } = useParams();
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút = 300 giây

  // Tìm tên bài học
  const getLessonTitle = () => {
    for (const chapterId in exerciseLessons) {
      const lessons = exerciseLessons[chapterId];
      const lesson = lessons.find((l) => l.id === lessonId);
      if (lesson) {
        return lesson.title;
      }
    }
    return "Bài học không tìm thấy";
  };

  const lessonTitle = getLessonTitle();

  useEffect(() => {
    if (timeLeft > 0 && !showResult) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setShowResult(true);
    }
  }, [timeLeft, showResult]);

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === quizData[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (showResult) {
    const score = calculateScore();
    return (
      <Result
        score={score}
        totalQuestions={quizData.length}
        answers={answers}
        quizData={quizData}
        gradeId={gradeId}
        lessonId={lessonId}
      />
    );
  }

  return (
    <div className="quiz-container">
      <QuizHeader
        grade={gradeId}
        subtitle="Trắc nghiệm"
        lessonTitle={lessonTitle}
        timeLeft={timeLeft}
        formatTime={formatTime}
      />
      <div className="questions-container">
        {quizData.map((q, index) => (
          <Question
            key={q.id}
            questionIndex={index}
            question={q.question}
            options={q.options}
            selectedAnswer={answers[index]}
            onAnswerSelect={handleAnswerSelect}
            correctAnswer={q.correctAnswer}
            showResult={false}
          />
        ))}
      </div>
      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={answers.includes(null)}
      >
        Nộp bài và kết thúc
      </button>
    </div>
  );
};

export default QuizPage;
