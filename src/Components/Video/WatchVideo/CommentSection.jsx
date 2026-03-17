import React from "react";
import "./WatchVideo.css";
import userAvatar from "../../Assets/group.png";

const mockComments = [
  {
    id: 1,
    name: "PhamTu",
    timeAgo: "1 ngày trước",
    content: "Bài giảng rất hữu ích!",
  },
  {
    id: 2,
    name: "DucManh",
    timeAgo: "1 ngày trước",
    content: "Bài giảng hay và dễ hiểu lắm ạ!",
  },
];

const CommentSection = () => {
  return (
    <div className="comment-section-card">
      <h2 className="comment-section-title">Bình luận</h2>

      <div className="comment-input-row">
        <img
          src={userAvatar}
          alt="Avatar người dùng"
          className="comment-avatar"
        />
        <input
          type="text"
          className="comment-input"
          placeholder="Viết bình luận..."
        />
      </div>

      <div className="comment-list">
        {mockComments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <img
              src={userAvatar}
              alt={`Avatar của ${comment.name}`}
              className="comment-avatar"
            />
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-name">{comment.name}</span>
                <span className="comment-time">{comment.timeAgo}</span>
              </div>
              <p className="comment-text">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
