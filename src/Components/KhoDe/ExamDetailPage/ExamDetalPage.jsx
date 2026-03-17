import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ExamViewer from "./ExamViewer/ExamViewer";
import examLists from "../../../Data/examLists";
import samplePdf from "../../Assets/de-kiem-tra-theo-bai-hoc-chu-de-menh-de-va-tap-hop.pdf";
import ExamDetalPageHeader from "./Header/ExamDetalPageHeader";
import RelatedExams from "./RelatedExams/RealetedExams";
const ExamDetailPage = () => {
  const { gradeId, lessonId } = useParams();
  const grade = parseInt(gradeId) || 1;
  const sections = examLists[grade] || [];

  // Find the exam by lessonId (which is the exam id)
  let currentExam = null;
  for (const section of sections) {
    const found = section.exams.find((e) => e.id === lessonId);
    if (found) {
      currentExam = found;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lessonId]);

  return (
    <div className="exam-detail-page">
      <ExamDetalPageHeader grade={grade} lessonTitle={currentExam?.title} />
      <ExamViewer
        pdfSrc={currentExam?.pdf || samplePdf}
        title={currentExam?.title || "Chi tiết đề thi"}
        isFullPage={true}
      />
      <RelatedExams />
    </div>
  );
};

export default ExamDetailPage;
