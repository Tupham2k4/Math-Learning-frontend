import React, { useState } from "react";
import "./FavoriteVideoCard.css";
import playIcon from "../../Assets/play.png";
import view from "../../Assets/view.png";
import star from "../../Assets/star.png";

const FavoriteVideoCard = ({
  thumbnail,
  videoUrl,
  lop,
  tieuDe,
  moTa,
  luotXem,
  danhGia,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="video-favorite">
      <div className="video-thumb">
        {!isPlaying ? (
          <>
            <img src={thumbnail} alt={tieuDe} className="thumb-img" />
            <div className="play-btn" onClick={() => setIsPlaying(true)}>
              <img src={playIcon} alt="Play" />
            </div>
          </>
        ) : (
          <video src={videoUrl} controls autoPlay />
        )}
      </div>

      <div className="video-info">
        <span className="video-grade">{lop}</span>
        <h4>{tieuDe}</h4>
        <p>{moTa}</p>

        <div className="video-meta">
          <div className="meta-item">
            <img src={view} alt="Lượt xem" />
            <span>{luotXem}</span>
          </div>

          <div className="meta-item">
            <img src={star} alt="Đánh giá" />
            <span>{danhGia}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteVideoCard;
