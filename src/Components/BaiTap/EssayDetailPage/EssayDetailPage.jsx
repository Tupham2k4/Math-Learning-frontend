import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./EssayDetailPage.css";
import "./MathEditors.css";
import EssayHeader from "./EssayHeader";
import MathToolbar from "./MathToolbar";
import EquationEditor from "./EquationEditor";
import GraphEditor from "./GraphEditor";
import GeometryEditor from "./GeometryEditor";
import "mathlive";
import exerciseLessons from "../../../Data/exerciseLessons";
// giả lập data – lát nữa sẽ chuyển sang file JSON
const essayData = [
  {
    id: "essay_1",
    question: "Giải phương trình: 2x + 3 = 7",
    solution: ["2x + 3 = 7", "2x = 7 - 3", "2x = 4", "x = 2"],
  },
  {
    id: "essay_2",
    question: "Tính: 15 + 27 = ?",
    solution: ["15 + 27 = 42"],
  },
];

const EssayDetailPage = () => {
  const { gradeId, lessonId } = useParams();

  const storageKey = `essay_${lessonId}`;

  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [activeModal, setActiveModal] = useState({ type: null, qId: null });

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

  // Load local storage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      setAnswers(parsed.answers || {});
      setIsSubmitted(parsed.submitted || false);
    }
  }, [storageKey]);

  // Lưu dữ liệu vào localStorage
  const saveToLocal = (newAnswers, submitted = isSubmitted) => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        submitted,
        answers: newAnswers,
      }),
    );
  };

  // Autosave khi nhập
  const handleChange = (id, value) => {
    const current = answers[id] || { text: "", graphs: [], geometries: [] };
    const normalized = typeof current === "string" ? { text: current, graphs: [], geometries: [] } : current;
    
    let updatedValue;
    if (typeof value === "string") {
      updatedValue = { ...normalized, text: value };
    } else {
      updatedValue = { ...normalized, ...value };
    }

    const updated = { ...answers, [id]: updatedValue };
    setAnswers(updated);
    saveToLocal(updated);
  };

  const handleInsertSymbol = (qId, latex) => {
    const container = document.querySelector(`[data-q-id="${qId}"]`);
    const mf = container ? container.querySelector("math-field") : null;
    if (mf) {
      mf.focus();
      mf.insert(latex);
    }
  };

  const openModal = (type, qId) => {
    setActiveModal({ type, qId });
  };

  const closeModal = () => {
    setActiveModal({ type: null, qId: null });
  };

  const handleSaveDrawing = (data) => {
    const { qId, type } = activeModal;
    const current = answers[qId] || { text: "", graphs: [], geometries: [] };
    const normalized = typeof current === "string" ? { text: current, graphs: [], geometries: [] } : current;

    const listKey = type === "graph" ? "graphs" : "geometries";
    const newList = [...(normalized[listKey] || []), data];

    handleChange(qId, { [listKey]: newList });
    closeModal();
  };

  const removeDrawing = (qId, type, index) => {
    const current = answers[qId];
    if (!current) return;
    const normalized = typeof current === "string" ? { text: current, graphs: [], geometries: [] } : current;
    
    const listKey = type === "graph" ? "graphs" : "geometries";
    const newList = normalized[listKey].filter((_, i) => i !== index);
    
    handleChange(qId, { [listKey]: newList });
  };

  // Chặn thoát trang
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (!isSubmitted) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isSubmitted]);

  // Nút hoàn thành bài làm
  const handleSubmit = () => {
    setIsSubmitted(true);
    saveToLocal(answers, true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    saveToLocal(answers, false);
  };

  // Hiện đáp án
  const toggleSolution = (id) => {
    setShowSolution((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <EssayHeader
        grade={gradeId}
        subtitle="Tự luận"
        lessonTitle={lessonTitle}
      />
      <div className="essay-container">
        {/* Thanh tiến trình */}
        <div className="progress-section">
          <div className="progress-text">
            Câu {essayData.length > 0 ? Object.keys(answers).length : 0}/
            {essayData.length}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${essayData.length > 0 ? (Object.keys(answers).length / essayData.length) * 100 : 0}%`,
              }}
            ></div>
          </div>
        </div>

        {essayData.map((q, index) => (
          <div key={q.id} className="essay-card">
            {/* Header / Câu hỏi giữ nguyên */}
            <h3>Câu {index + 1}</h3>
            <p className="question">{q.question}</p>

            {/* Công cụ nhập nâng cấp */}
            {!isSubmitted && (
              <>
                <MathToolbar onInsert={(latex) => handleInsertSymbol(q.id, latex)} />
                <div data-q-id={q.id}>
                  <EquationEditor
                    value={(typeof answers[q.id] === 'object' ? answers[q.id].text : answers[q.id]) || ""}
                    onChange={(val) => handleChange(q.id, val)}
                  />
                </div>
                <div className="editor-actions">
                  <button className="action-btn" onClick={() => openModal("graph", q.id)}>
                    📊 Vẽ đồ thị
                  </button>
                  <button className="action-btn" onClick={() => openModal("geometry", q.id)}>
                    📐 Vẽ hình
                  </button>
                </div>
              </>
            )}

            {/* Hiển thị kết quả khi đã submit (chế độ readonly) */}
            {isSubmitted && (
              <div className="readonly-answer">
                <math-field read-only style={{ 
                  border: 'none', 
                  background: 'transparent',
                  width: '100%',
                  fontSize: '1.2rem',
                  display: 'block'
                }}>
                  {(typeof answers[q.id] === 'object' ? answers[q.id].text : answers[q.id]) || ""}
                </math-field>
              </div>
            )}

            {/* Hiển thị các hình đã vẽ */}
            <div className="drawings-preview">
              {typeof answers[q.id] === 'object' && (
                <>
                  {answers[q.id].graphs?.map((g, i) => (
                    <div key={`graph-${i}`} className="drawing-item">
                      <img src={g.image} alt={`Graph ${i}`} />
                      {!isSubmitted && (
                        <button className="remove-drawing" onClick={() => removeDrawing(q.id, "graph", i)}>&times;</button>
                      )}
                    </div>
                  ))}
                  {answers[q.id].geometries?.map((g, i) => (
                    <div key={`geom-${i}`} className="drawing-item">
                      <img src={g.image} alt={`Geometry ${i}`} />
                      {!isSubmitted && (
                        <button className="remove-drawing" onClick={() => removeDrawing(q.id, "geometry", i)}>&times;</button>
                      )}
                    </div>
                  ))}
                </>
              )}
            </div>

            {isSubmitted && (
              <div className="submitted-actions">
                <button
                  className="solution-btn"
                  onClick={() => toggleSolution(q.id)}
                >
                  Xem đáp án chi tiết
                </button>
                <button
                  className="edit-back-btn"
                  onClick={handleEdit}
                >
                  Sửa lại bài làm
                </button>

                {showSolution[q.id] && (
                  <div className="solution-box">
                    {q.solution.map((step, i) => (
                      <p key={i}>
                        Bước {i + 1}: {step}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {!isSubmitted && (
          <div className="button-container">
            <button className="save-btn" onClick={() => setShowToast(true)}>
              Lưu nháp
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
              Nộp bài
            </button>
          </div>
        )}

        {showToast && (
          <div className="toast">
            Bài làm đã được lưu. Bạn có thể xem đáp án chi tiết.
          </div>
        )}
      </div>

      {/* Modals cho đồ thị và hình học */}
      <GraphEditor
        isOpen={activeModal.type === "graph"}
        onClose={closeModal}
        onSave={handleSaveDrawing}
      />
      <GeometryEditor
        isOpen={activeModal.type === "geometry"}
        onClose={closeModal}
        onSave={handleSaveDrawing}
      />
    </div>
  );
};

export default EssayDetailPage;
