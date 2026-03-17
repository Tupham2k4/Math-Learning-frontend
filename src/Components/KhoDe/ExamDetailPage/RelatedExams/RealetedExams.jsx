import React from "react";
import "./RelatedExams.css";
import de1 from "../../../Assets/de1.png";
import dePdf from "../../../Assets/de-kiem-tra-theo-bai-hoc-chu-de-menh-de-va-tap-hop.pdf";
const relatedDocs = [
  {
    id: 2,
    title: "Đề ôn tập chương I: Mệnh đề và tập hợp số 2",
    date: "10/02/2026",
    thumbnail: de1,
    link: dePdf,
  },
  {
    id: 3,
    title: "Đề ôn tập chương I: Mệnh đề và tập hợp số 3",
    date: "10/02/2026",
    thumbnail: de1,
    link: dePdf,
  },
  {
    id: 4,
    title: "Đề ôn tập chương I: Mệnh đề và tập hợp số 4",
    date: "10/02/2026",
    thumbnail: de1,
    link: dePdf,
  },
  {
    id: 5,
    title: "Đề ôn tập chương I: Mệnh đề và tập hợp số 5",
    date: "10/02/2026",
    thumbnail: de1,
    link: dePdf,
  },
];

export default function RelatedDocuments() {
  return (
    <div className="related-wrapper">
      <div className="related-header">
        <div className="related-bar"></div>
        <h2>Tài liệu liên quan</h2>
      </div>

      <div className="related-grid">
        {relatedDocs.map((doc) => (
          <a href={doc.link} key={doc.id} className="related-card">
            <img
              src={doc.thumbnail}
              alt={doc.title}
              className="related-thumb"
            />

            <div className="related-content">
              <h3>{doc.title}</h3>

              <div className="related-date">
                <span className="clock">🕒</span>
                {doc.date}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
