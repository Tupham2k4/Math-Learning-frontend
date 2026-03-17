import React from "react";
import { Link } from "react-router-dom";
import "./DangNhap.css";
import logo from "../Components/Assets/logo.png";
import toanhoc from "../Components/Assets/toan-hoc.png";
import view from "../Components/Assets/view.png";

const DangNhap = () => {
  return (
    <div className="dang-nhap">
      <div className="logo">
        <img src={logo} alt="Math Learning Logo"></img>
        <h1>Math Learning</h1>
      </div>
      <div className="login-left">
        <img src={toanhoc} alt="Math illustration"></img>
        <h1>Học toán thông minh</h1>
        <p>Dành cho học sinh lớp 1 đến lớp 12</p>
      </div>
      <div className="login-right">
        <h1>Đăng nhập</h1>
        <p className="welcome-text">Chào mừng trở lại</p>

        <div className="input-group">
          <label>Email/Tên đăng nhập</label>
          <input type="text" placeholder="Nhập tên đăng nhập/Email"></input>
        </div>

        <div className="input-group">
          <label>Mật khẩu</label>
          <div className="password-wrapper">
            <input type="password" placeholder="Nhập mật khẩu" />
            <img src={view} alt="Xem mật khẩu" className="view-icon" />
          </div>
        </div>

        <p className="forgot-password">Quên mật khẩu?</p>

        <button className="login-btn">Đăng nhập</button>

        <div className="divider">
          <span>hoặc</span>
        </div>

        <p className="register-text">
          Bạn chưa có tài khoản?{" "}
          <Link to="/dang-ky" className="register-link">
            Đăng ký ngay!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DangNhap;
