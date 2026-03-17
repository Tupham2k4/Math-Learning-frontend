# 📐 Math Learning - Frontend
Đây là đề tài khóa luận tốt nghiệp của sinh viên Phạm Quang Tú, với chủ đề xây dựng một hệ thống học tập dành cho học sinh yêu thích toán học từ lớp 1 đến 12
Dự án Hệ thống Học Toán trực tuyến. Phần Frontend được xây dựng bằng **ReactJS**, mang đến trải nghiệm UI/UX tối ưu, hiện đại với tính tương tác cao dành cho học sinh, kết hợp các công cụ hỗ trợ Toán học và AI.

## 🌟 Chức năng nổi bật

- **🏠 Trang chủ (Home)**: Giới thiệu hệ thống, thống kê người dùng, tính năng nổi bật.
- **📚 Bài giảng (Lectures)**: Theo dõi bài giảng lý thuyết theo từng khối lớp và chủ đề.
- **📝 Bài tập (Exercises)**:
  - **Trắc nghiệm (Quiz)**: Làm bài trắc nghiệm tính điểm trực tiếp.
  - **Tự luận (Essay)**: Làm bài tự luận trang bị trình soạn thảo công thức Toán học trực quan, dễ sử dụng (`mathlive`), dễ dàng nhập liệu ký hiệu.
- **🎥 Video bài giảng**: Kho video giải trí và giảng dạy, cho phép xem video trực tuyến và bình luận bài học.
- **📄 Kho đề (Exam Repository)**: Xem đề thi, tải tài liệu. Tích hợp tính năng xem PDF trực tiếp trên trình duyệt pop-up (ExamViewer).
- **🤖 Trợ lý AI (Chatbot AI)**:
  - Giao diện thân thiện phong cách ChatGPT.
  - Hỗ trợ nhập liệu công thức toán học và upload hình ảnh đề bài.
  - Xem lại lịch sử trò chuyện phía sidebar.
- **🔐 Quá trình học tập & Xác thực**: Hệ thống tính điểm, lịch sử làm bài, thanh tiến trình (Progress) cùng tính năng Đăng ký / Đăng nhập.

---

## 🛠 Công nghệ sử dụng

Frontend được phát triển với các công nghệ và thư viện hiện đại sau:

### ⚙️ Core & Chuyển hướng
- **[React](https://react.dev/) (v19)**: Thư viện chính để xây dựng giao diện người dùng.
- **[React Router DOM](https://reactrouter.com/) (v7)**: Quản lý Routes và điều hướng các trang trong ứng dụng.

### 🧮 Xử lý Toán học (Math & Formulas)
- **[MathLive](https://mathlive.io/)**: Trình soạn thảo công thức Toán học thân thiện (Equation Editor), cho phép học sinh gõ ký hiệu toán dễ dàng thay thế cho bàn phím latex phức tạp.
- **[KaTeX](https://katex.org/) & `react-katex`**: Render và hiển thị công thức Toán học tốc độ cao và đẹp mắt trên màn hình.

### 🎨 Giao diện & Trải nghiệm (UI/UX)
- **Vanilla CSS / CSS Modules**: Sử dụng CSS thuần với hệ thống màu sắc/môi trường biến cục bộ cho từng Component. Giao diện được thiết kế thẩm mỹ, responsive.
- **`lucide-react`**: Bộ icon SVG nhẹ, hiện đại cho toàn bộ hình ảnh nút bấm, menu.

### 📄 Tra cứu & Hiển thị tài liệu
- **`react-pdf` & `pdfjs-dist`**: Xử lý và hiển thị tài liệu đề thi PDF ngay trong trình duyệt mà không cần tải về.

---

## 📂 Trạng thái & Cấu trúc thư mục (`/src`)

```text
src/
├── Components/    # Các thành phần tái sử dụng (Chia theo logic: BaiGiang, BaiTap, KhoDe, Chatbot...)
├── Context/       # Quản lý state toàn cục (Context API)
├── Data/          # Nguồn dữ liệu giả/tĩnh (mock data) ví dụ như mathQuotes, exerciseLessons
├── Pages/         # Chứa các file kết nối (views) của trang lớn (Home, BaiTap, DangNhap...)
├── App.js         # Định nghĩa các Routes chính của hệ thống
├── App.css        # Khai báo CSS tổng thể, các biến màu sắc chung
└── index.js       # File entry point của ứng dụng
```

---

## 🚀 Hướng dẫn cài đặt và chạy (Local Development)

Đảm bảo bạn đã cài đặt **[Node.js](https://nodejs.org/)** từ trước.

**1. Mở Terminal / Command Prompt và di chuyển vào thư mục frontend:**
```bash
cd frontend
```

**2. Cài đặt các thư viện cần thiết (Dependencies):**
```bash
npm install
```
*(Lưu ý: Bạn có thể sử dụng `yarn install` nếu hệ thống dùng Yarn)*

**3. Khởi chạy ứng dụng:**
```bash
npm start
```

**4. Trải nghiệm trên trình duyệt:**
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt để xem trang web của bạn. Trang sẽ tự động reload mỗi khi bạn thực hiện thay đổi mã nguồn.

---

## 📝 Scripts có sẵn

Trong project, bạn có thể chạy một số lệnh:
- `npm start`: Chạy App ở môi trường Development.
- `npm test`: Mở test runner cho dự án.
- `npm run build`: Đóng gói ứng dụng để đưa lên cấp độ Production, các file tĩnh sẽ được xuất ra thư mục `build/`.
