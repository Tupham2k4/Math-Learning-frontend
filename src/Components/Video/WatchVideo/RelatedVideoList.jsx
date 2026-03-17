import React from "react";
import "./WatchVideo.css";
import playIcon from "../../Assets/play.png";

const RelatedVideoList = ({ videos, onSelectVideo }) => {
  if (!videos || videos.length === 0) return null;

  return (
    <div className="related-video-card">
      <h2 className="related-video-title">
        Chương I: Ứng dụng của đạo hàm để khảo sát hàm số
      </h2>

      <div className="related-video-grid">
        {videos.map((video) => (
          <div
            key={video.id}
            className="related-video-item"
            role="button"
            tabIndex={0}
            onClick={() => onSelectVideo?.(video)}
            onKeyDown={(e) => e.key === "Enter" && onSelectVideo?.(video)}
          >
            <div className="related-video-thumb-wrapper">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="related-video-thumb"
              />
              <div className="related-video-thumb-overlay" />
              <img src={playIcon} alt="" className="related-video-play-icon" />
              <span className="related-video-duration">{video.duration}</span>
            </div>
            <div className="related-video-info">
              <p className="related-video-item-title">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideoList;
