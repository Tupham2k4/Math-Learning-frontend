import React from "react";
import Featuredvideos from "../../../Data/Featuredvideos";
import FeaturedvideoCard from "./FavoriteVideoCard";
import "./FavoriteVideoList.css";
const FavoriteVideoList = () => {
  return (
    <div className="favoritevideo-grid">
      {Featuredvideos.map((video) => (
        <FeaturedvideoCard key={video.id} {...video} />
      ))}
    </div>
  );
};

export default FavoriteVideoList;
