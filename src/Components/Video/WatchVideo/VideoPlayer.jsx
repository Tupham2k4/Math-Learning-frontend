import React from "react";
import "./WatchVideo.css";

const VideoPlayer = ({ video }) => {
  if (!video) return null;

  return (
    <div className="video-player-card">
      <video
        className="video-player-element"
        src={video.videoUrl}
        controls
        poster={video.thumbnail}
      >
        Trình duyệt của bạn không hỗ trợ thẻ video.
      </video>
    </div>
  );
};

export default VideoPlayer;
