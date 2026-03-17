import React from "react";
import video from "../../../Data/video";
import VideoCard from "./VideoCard";
import "./VideoList.css";
const VideoList = () => {
  return (
    <div className="video-grid">
      {video.map((item) => (
        <VideoCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default VideoList;
