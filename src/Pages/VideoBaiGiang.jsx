import React from "react";
import Header from "../Components/Video/Header/Header";
import VideoList from "../Components/Video/VideoCard/VideoList";
import FavoriteVideoList from "../Components/Video/VideoCard/FavoriteVideoList";
import QuoteSection from "../Components/BaiGiang/Quote/QuoteSection";
const VideoBaiGiang = () => {
  return (
    <div className="video-bai-giang">
      <Header />
      <VideoList />
      <h1
        style={{
          color: "#34A853",
          fontWeight: "bold",
          paddingLeft: "25px",
          marginTop: "15px",
        }}
      >
        Video nổi bật & được yêu thích
      </h1>
      <FavoriteVideoList />
      <QuoteSection />
    </div>
  );
};

export default VideoBaiGiang;
