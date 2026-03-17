import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="breadcrumb">
        <Link to="/" className="home-link">
          Trang chủ
        </Link>
        <span className="separator"> ⟶ </span>
        <span className="current">Chatbot</span>
      </div>
      <h1>Trợ lý AI giải đáp toán học</h1>
      <p>Đặt câu hỏi về toán, nhận giải thích chi tiết từng bước và hướng dẫn cách giải</p>
    </div>
  );
};

export default Header;
