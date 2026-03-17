import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./WatchVideo.css";
import SidebarVideo from "./SidebarVideo";
import VideoPlayer from "./VideoPlayer";
import VideoInfo from "./VideoInfo";
import CommentSection from "./CommentSection";
import RelatedVideoList from "./RelatedVideoList";
import videoLessons12 from "../../../Data/videoLessons12";

const WatchVideo = () => {
  const location = useLocation();
  const videoFromState = location.state?.video;
  const [currentVideo, setCurrentVideo] = useState(
    () => videoFromState ?? videoLessons12[0],
  );

  useEffect(() => {
    if (videoFromState) setCurrentVideo(videoFromState);
  }, [videoFromState]);

  const relatedVideos = videoLessons12.filter((v) => v.id !== currentVideo.id);

  return (
    <div className="watch-video-page">
      <div className="watch-video-inner">
        <aside className="watch-video-sidebar">
          <SidebarVideo />
        </aside>

        <main className="watch-video-main">
          <section className="watch-video-main-top">
            <VideoPlayer video={currentVideo} />
            <VideoInfo video={currentVideo} />
            <CommentSection />
          </section>

          <section className="watch-video-related-section">
            <RelatedVideoList
              videos={relatedVideos.slice(0, 4)}
              onSelectVideo={setCurrentVideo}
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default WatchVideo;
