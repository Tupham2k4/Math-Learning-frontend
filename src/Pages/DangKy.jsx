import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./DangKy.css";
import logo from "../Components/Assets/logo.png";
import book from "../Components/Assets/book.png";
import check from "../Components/Assets/check.png";
import robot from "../Components/Assets/robot.png";
import view from "../Components/Assets/view.png";

const DangKy = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="dang-ky">
      <div className="left-column">
        <div className="logo">
          <img src={logo} alt="Math Learning Logo"></img>
          <h1>Math Learning</h1>
        </div>

        <div className="register-left">
          <h1>Bắt đầu hành trình học toán cực kỳ thú vị cùng với chúng tôi</h1>
          <p>
            Tham gia cộng đồng học sinh yêu thích toán học, nơi bạn có thể luyện
            tập, thi đấu và phát triển kỹ năng
          </p>

          <div className="features-list">
            <div className="feature-item">
              <img src={book} alt="" />
              <p>Bài tập, kho đề đa dạng, bao gồm cả trắc nghiệm và tự luận</p>
            </div>

            <div className="feature-item">
              <img src={check} alt="" />
              <p>
                Kho đề sát với kiến thức đã học, giải thích đáp án rõ ràng, dễ
                hiểu
              </p>
            </div>

            <div className="feature-item">
              <img src={robot} alt="" />
              <p>
                Chatbot AI hỗ trợ học tập 24/7, giúp học sinh giải đáp mọi thắc
                mắc về bài tập
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="register-right">
        <h1>Đăng ký</h1>
        <p className="register-subtitle">Tạo tài khoản mới</p>

        <div className="input-group">
          <label>Họ và tên</label>
          <input type="text" placeholder="Nhập họ và tên"></input>
        </div>

        <div className="input-group">
          <label>Tên đăng nhập</label>
          <input type="text" placeholder="Nhập tên đăng nhập"></input>
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="text" placeholder="Nhập email"></input>
        </div>

        <div className="input-group">
          <label>Mật khẩu</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
            />
            <img
              src={view}
              alt="Xem mật khẩu"
              className="view-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="input-group">
          <label>Xác nhận mật khẩu</label>
          <div className="password-wrapper">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
            />
            <img
              src={view}
              alt="Xác nhận mật khẩu"
              className="view-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            />
          </div>
        </div>

        <button className="register-btn">Đăng ký</button>

        <div className="divider">
          <span>hoặc</span>
        </div>

        <p className="login-text">
          Bạn đã có tài khoản?{" "}
          <Link to="/dang-nhap" className="login-link">
            Đăng nhập ngay!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DangKy;
