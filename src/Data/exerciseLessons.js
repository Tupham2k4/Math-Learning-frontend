// Dữ liệu các bài học trong mỗi chương theo từng lớp
const exerciseLessons = {
  // ==================== LỚP 1 ====================
  // Chương I: Các số đến 10
  lop1_ch1: [
    {
      id: "lop1_ch1_l1",
      title: "Bài 1: Trên-Dưới, Phải-Trái, Trước - Sau, Ở giữa",
    },
    {
      id: "lop1_ch1_l2",
      title: "Bài 2: Hình vuông, Hình tròn, Hình tam giác, hình chữ nhật",
    },
    { id: "lop1_ch1_l3", title: "Bài 3: Các số 1, 2, 3" },
    { id: "lop1_ch1_l4", title: "Bài 4: Các số 4, 5, 6" },
    { id: "lop1_ch1_l5", title: "Bài 5: Các số 5, 6, 7" },
  ],
  // Chương II: Phép cộng, phép trừ trong phạm vi 10
  lop1_ch2: [
    { id: "lop1_ch2_l1", title: "Bài 1: Phép cộng trong phạm vi 5" },
    { id: "lop1_ch2_l2", title: "Bài 2: Phép trừ trong phạm vi 5" },
    { id: "lop1_ch2_l3", title: "Bài 3: Phép cộng trong phạm vi 10" },
    { id: "lop1_ch2_l4", title: "Bài 4: Phép trừ trong phạm vi 10" },
    { id: "lop1_ch2_l5", title: "Bài 5: Bảng cộng và bảng trừ trong phạm vi 10" },
  ],
  // Chương III: Các số trong phạm vi 100
  lop1_ch3: [
    { id: "lop1_ch3_l1", title: "Bài 1: Các số từ 11 đến 19" },
    { id: "lop1_ch3_l2", title: "Bài 2: Các số tròn chục" },
    { id: "lop1_ch3_l3", title: "Bài 3: Các số từ 21 đến 99" },
    { id: "lop1_ch3_l4", title: "Bài 4: So sánh các số trong phạm vi 100" },
  ],
  // Chương IV: Phép cộng, phép trừ trong phạm vi 100
  lop1_ch4: [
    { id: "lop1_ch4_l1", title: "Bài 1: Phép cộng không nhớ" },
    { id: "lop1_ch4_l2", title: "Bài 2: Phép trừ không nhớ" },
    { id: "lop1_ch4_l3", title: "Bài 3: Ôn tập các số đến 100" },
  ],

  // ==================== LỚP 2 ====================
  lop2_ch1: [
    { id: "lop2_ch1_l1", title: "Bài 1: Ôn tập các số đến 100" },
    { id: "lop2_ch1_l2", title: "Bài 2: Số hạng - Tổng" },
    { id: "lop2_ch1_l3", title: "Bài 3: Đề-xi-mét" },
  ],
  lop2_ch2: [
    { id: "lop2_ch2_l1", title: "Bài 1: 9 cộng với một số" },
    { id: "lop2_ch2_l2", title: "Bài 2: 8, 7, 6 cộng với một số" },
    { id: "lop2_ch2_l3", title: "Bài 3: Bảng cộng" },
    { id: "lop2_ch2_l4", title: "Bài 4: Phép cộng có nhớ dạng 29 + 5" },
  ],
  lop2_ch3: [
    { id: "lop2_ch3_l1", title: "Bài 1: 11 trừ đi một số" },
    { id: "lop2_ch3_l2", title: "Bài 2: 12, 13, 14 trừ đi một số" },
    { id: "lop2_ch3_l3", title: "Bài 3: Bảng trừ" },
  ],
  lop2_ch4: [
    { id: "lop2_ch4_l1", title: "Bài 1: Phép nhân" },
    { id: "lop2_ch4_l2", title: "Bài 2: Bảng nhân 2" },
    { id: "lop2_ch4_l3", title: "Bài 3: Phép chia" },
    { id: "lop2_ch4_l4", title: "Bài 4: Bảng chia 2" },
  ],

  // ==================== LỚP 3 ====================
  lop3_ch1: [
    { id: "lop3_ch1_l1", title: "Bài 1: Đọc, viết, so sánh các số có ba chữ số" },
    { id: "lop3_ch1_l2", title: "Bài 2: Cộng, trừ các số có ba chữ số" },
    { id: "lop3_ch1_l3", title: "Bài 3: Luyện tập" },
  ],
  lop3_ch2: [
    { id: "lop3_ch2_l1", title: "Bài 1: Bảng nhân 6" },
    { id: "lop3_ch2_l2", title: "Bài 2: Bảng nhân 7" },
    { id: "lop3_ch2_l3", title: "Bài 3: Bảng chia 6" },
    { id: "lop3_ch2_l4", title: "Bài 4: Bảng chia 7" },
  ],
  lop3_ch3: [
    { id: "lop3_ch3_l1", title: "Bài 1: Các số có bốn chữ số" },
    { id: "lop3_ch3_l2", title: "Bài 2: So sánh các số có bốn chữ số" },
    { id: "lop3_ch3_l3", title: "Bài 3: Phép cộng các số trong phạm vi 10000" },
  ],
  lop3_ch4: [
    { id: "lop3_ch4_l1", title: "Bài 1: Các số có năm chữ số" },
    { id: "lop3_ch4_l2", title: "Bài 2: Phép cộng, trừ trong phạm vi 100000" },
    { id: "lop3_ch4_l3", title: "Bài 3: Luyện tập chung" },
  ],

  // ==================== LỚP 4 ====================
  lop4_ch1: [
    { id: "lop4_ch1_l1", title: "Bài 1: Ôn tập các số đến 100000" },
    { id: "lop4_ch1_l2", title: "Bài 2: Các số có nhiều chữ số" },
    { id: "lop4_ch1_l3", title: "Bài 3: Hàng và lớp" },
    { id: "lop4_ch1_l4", title: "Bài 4: So sánh và xếp thứ tự các số tự nhiên" },
  ],
  lop4_ch2: [
    { id: "lop4_ch2_l1", title: "Bài 1: Phép cộng" },
    { id: "lop4_ch2_l2", title: "Bài 2: Phép trừ" },
    { id: "lop4_ch2_l3", title: "Bài 3: Phép nhân" },
    { id: "lop4_ch2_l4", title: "Bài 4: Phép chia" },
    { id: "lop4_ch2_l5", title: "Bài 5: Tính chất của phép tính" },
  ],
  lop4_ch3: [
    { id: "lop4_ch3_l1", title: "Bài 1: Dấu hiệu chia hết cho 2, 5" },
    { id: "lop4_ch3_l2", title: "Bài 2: Dấu hiệu chia hết cho 3, 9" },
    { id: "lop4_ch3_l3", title: "Bài 3: Phân số" },
    { id: "lop4_ch3_l4", title: "Bài 4: Phân số bằng nhau" },
  ],
  lop4_ch4: [
    { id: "lop4_ch4_l1", title: "Bài 1: Phép cộng phân số" },
    { id: "lop4_ch4_l2", title: "Bài 2: Phép trừ phân số" },
    { id: "lop4_ch4_l3", title: "Bài 3: Phép nhân phân số" },
    { id: "lop4_ch4_l4", title: "Bài 4: Phép chia phân số" },
  ],

  // ==================== LỚP 5 ====================
  lop5_ch1: [
    { id: "lop5_ch1_l1", title: "Bài 1: Ôn tập: Khái niệm về phân số" },
    { id: "lop5_ch1_l2", title: "Bài 2: Ôn tập: Các phép tính với phân số" },
    { id: "lop5_ch1_l3", title: "Bài 3: Hỗn số" },
  ],
  lop5_ch2: [
    { id: "lop5_ch2_l1", title: "Bài 1: Khái niệm số thập phân" },
    { id: "lop5_ch2_l2", title: "Bài 2: Cộng, trừ hai số thập phân" },
    { id: "lop5_ch2_l3", title: "Bài 3: Nhân số thập phân với số tự nhiên" },
    { id: "lop5_ch2_l4", title: "Bài 4: Chia số thập phân" },
  ],
  lop5_ch3: [
    { id: "lop5_ch3_l1", title: "Bài 1: Diện tích hình tam giác" },
    { id: "lop5_ch3_l2", title: "Bài 2: Diện tích hình thang" },
    { id: "lop5_ch3_l3", title: "Bài 3: Diện tích hình tròn" },
    { id: "lop5_ch3_l4", title: "Bài 4: Thể tích hình hộp chữ nhật" },
  ],
  lop5_ch4: [
    { id: "lop5_ch4_l1", title: "Bài 1: Bảng đơn vị đo thời gian" },
    { id: "lop5_ch4_l2", title: "Bài 2: Cộng số đo thời gian" },
    { id: "lop5_ch4_l3", title: "Bài 3: Trừ số đo thời gian" },
    { id: "lop5_ch4_l4", title: "Bài 4: Nhân số đo thời gian với một số" },
  ],

  // ==================== LỚP 6 ====================
  lop6_ch1: [
    { id: "lop6_ch1_l1", title: "Bài 1: Tập hợp. Phần tử của tập hợp" },
    { id: "lop6_ch1_l2", title: "Bài 2: Tập hợp các số tự nhiên" },
    { id: "lop6_ch1_l3", title: "Bài 3: Tìm ước chung lớn nhất" },
    { id: "lop6_ch1_l4", title: "Bài 4: Số nguyên tố. Hợp số" },
  ],
  lop6_ch2: [
    { id: "lop6_ch2_l1", title: "Bài 1: Số nguyên âm" },
    { id: "lop6_ch2_l2", title: "Bài 2: Cộng hai số nguyên" },
    { id: "lop6_ch2_l3", title: "Bài 3: Trừ hai số nguyên" },
    { id: "lop6_ch2_l4", title: "Bài 4: Nhân, chia hai số nguyên" },
  ],
  lop6_ch3: [
    { id: "lop6_ch3_l1", title: "Bài 1: Mở rộng phân số. Phân số bằng nhau" },
    { id: "lop6_ch3_l2", title: "Bài 2: So sánh phân số" },
    { id: "lop6_ch3_l3", title: "Bài 3: Các phép tính với phân số" },
  ],
  lop6_ch4: [
    { id: "lop6_ch4_l1", title: "Bài 1: Thu thập và phân loại dữ liệu" },
    { id: "lop6_ch4_l2", title: "Bài 2: Biểu đồ tranh, biểu đồ cột" },
    { id: "lop6_ch4_l3", title: "Bài 3: Xác suất thực nghiệm" },
  ],

  // ==================== LỚP 7 ====================
  lop7_ch1: [
    { id: "lop7_ch1_l1", title: "Bài 1: Tập hợp Q các số hữu tỷ" },
    { id: "lop7_ch1_l2", title: "Bài 2: Cộng, trừ số hữu tỷ" },
    { id: "lop7_ch1_l3", title: "Bài 3: Nhân, chia số hữu tỷ" },
    { id: "lop7_ch1_l4", title: "Bài 4: Giá trị tuyệt đối của số hữu tỷ" },
  ],
  lop7_ch2: [
    { id: "lop7_ch2_l1", title: "Bài 1: Căn bậc hai" },
    { id: "lop7_ch2_l2", title: "Bài 2: Số vô tỷ. Số thực" },
    { id: "lop7_ch2_l3", title: "Bài 3: Làm tròn và ước lượng" },
  ],
  lop7_ch3: [
    { id: "lop7_ch3_l1", title: "Bài 1: Khái niệm biểu thức đại số" },
    { id: "lop7_ch3_l2", title: "Bài 2: Đơn thức. Đa thức" },
    { id: "lop7_ch3_l3", title: "Bài 3: Phép cộng, trừ đa thức" },
    { id: "lop7_ch3_l4", title: "Bài 4: Phép nhân đa thức" },
  ],
  lop7_ch4: [
    { id: "lop7_ch4_l1", title: "Bài 1: Góc ở vị trí đặc biệt. Tia phân giác" },
    { id: "lop7_ch4_l2", title: "Bài 2: Hai đường thẳng song song" },
    { id: "lop7_ch4_l3", title: "Bài 3: Định lí và chứng minh định lí" },
  ],

  // ==================== LỚP 8 ====================
  lop8_ch1: [
    { id: "lop8_ch1_l1", title: "Bài 1: Nhân đơn thức với đa thức" },
    { id: "lop8_ch1_l2", title: "Bài 2: Nhân đa thức với đa thức" },
    { id: "lop8_ch1_l3", title: "Bài 3: Hằng đẳng thức đáng nhớ" },
    { id: "lop8_ch1_l4", title: "Bài 4: Phân tích đa thức thành nhân tử" },
  ],
  lop8_ch2: [
    { id: "lop8_ch2_l1", title: "Bài 1: Mở đầu về phương trình" },
    { id: "lop8_ch2_l2", title: "Bài 2: Phương trình bậc nhất một ẩn" },
    { id: "lop8_ch2_l3", title: "Bài 3: Phương trình đưa được về dạng ax + b = 0" },
    { id: "lop8_ch2_l4", title: "Bài 4: Phương trình tích" },
  ],
  lop8_ch3: [
    { id: "lop8_ch3_l1", title: "Bài 1: Liên hệ giữa thứ tự và phép cộng" },
    { id: "lop8_ch3_l2", title: "Bài 2: Bất phương trình bậc nhất một ẩn" },
    { id: "lop8_ch3_l3", title: "Bài 3: Giải bất phương trình bậc nhất" },
  ],
  lop8_ch4: [
    { id: "lop8_ch4_l1", title: "Bài 1: Tỉ số của hai đoạn thẳng" },
    { id: "lop8_ch4_l2", title: "Bài 2: Định lí Ta-lét trong tam giác" },
    { id: "lop8_ch4_l3", title: "Bài 3: Tam giác đồng dạng" },
    { id: "lop8_ch4_l4", title: "Bài 4: Trường hợp đồng dạng của tam giác" },
  ],

  // ==================== LỚP 9 ====================
  lop9_ch1: [
    { id: "lop9_ch1_l1", title: "Bài 1: Căn bậc hai" },
    { id: "lop9_ch1_l2", title: "Bài 2: Căn thức bậc hai và hằng đẳng thức" },
    { id: "lop9_ch1_l3", title: "Bài 3: Biến đổi đơn giản biểu thức chứa căn" },
    { id: "lop9_ch1_l4", title: "Bài 4: Căn bậc ba" },
  ],
  lop9_ch2: [
    { id: "lop9_ch2_l1", title: "Bài 1: Nhắc lại và bổ sung khái niệm về hàm số" },
    { id: "lop9_ch2_l2", title: "Bài 2: Hàm số bậc nhất" },
    { id: "lop9_ch2_l3", title: "Bài 3: Đồ thị hàm số y = ax + b" },
    { id: "lop9_ch2_l4", title: "Bài 4: Hệ số góc của đường thẳng" },
  ],
  lop9_ch3: [
    { id: "lop9_ch3_l1", title: "Bài 1: Phương trình bậc nhất hai ẩn" },
    { id: "lop9_ch3_l2", title: "Bài 2: Hệ hai phương trình bậc nhất hai ẩn" },
    { id: "lop9_ch3_l3", title: "Bài 3: Giải hệ phương trình bằng phương pháp thế" },
    { id: "lop9_ch3_l4", title: "Bài 4: Giải hệ phương trình bằng phương pháp cộng" },
  ],
  lop9_ch4: [
    { id: "lop9_ch4_l1", title: "Bài 1: Hàm số y = ax² (a ≠ 0)" },
    { id: "lop9_ch4_l2", title: "Bài 2: Đồ thị hàm số y = ax² (a ≠ 0)" },
    { id: "lop9_ch4_l3", title: "Bài 3: Phương trình bậc hai một ẩn" },
    { id: "lop9_ch4_l4", title: "Bài 4: Công thức nghiệm của phương trình bậc hai" },
  ],

  // ==================== LỚP 10 ====================
  lop10_ch1: [
    { id: "lop10_ch1_l1", title: "Bài 1: Mệnh đề" },
    { id: "lop10_ch1_l2", title: "Bài 2: Tập hợp" },
    { id: "lop10_ch1_l3", title: "Bài 3: Các phép toán tập hợp" },
    { id: "lop10_ch1_l4", title: "Bài 4: Các tập hợp số" },
  ],
  lop10_ch2: [
    { id: "lop10_ch2_l1", title: "Bài 1: Bất đẳng thức" },
    { id: "lop10_ch2_l2", title: "Bài 2: Bất phương trình bậc nhất hai ẩn" },
    { id: "lop10_ch2_l3", title: "Bài 3: Dấu của nhị thức bậc nhất" },
    { id: "lop10_ch2_l4", title: "Bài 4: Bất phương trình bậc hai một ẩn" },
  ],
  lop10_ch3: [
    { id: "lop10_ch3_l1", title: "Bài 1: Đại cương về hàm số" },
    { id: "lop10_ch3_l2", title: "Bài 2: Hàm số bậc hai" },
    { id: "lop10_ch3_l3", title: "Bài 3: Phương trình quy về phương trình bậc hai" },
  ],
  lop10_ch4: [
    { id: "lop10_ch4_l1", title: "Bài 1: Giá trị lượng giác của một góc" },
    { id: "lop10_ch4_l2", title: "Bài 2: Định lí côsin và định lí sin" },
    { id: "lop10_ch4_l3", title: "Bài 3: Giải tam giác và ứng dụng thực tế" },
  ],

  // ==================== LỚP 11 ====================
  lop11_ch1: [
    { id: "lop11_ch1_l1", title: "Bài 1: Giá trị lượng giác của góc lượng giác" },
    { id: "lop11_ch1_l2", title: "Bài 2: Công thức lượng giác" },
    { id: "lop11_ch1_l3", title: "Bài 3: Hàm số lượng giác" },
    { id: "lop11_ch1_l4", title: "Bài 4: Phương trình lượng giác cơ bản" },
  ],
  lop11_ch2: [
    { id: "lop11_ch2_l1", title: "Bài 1: Dãy số" },
    { id: "lop11_ch2_l2", title: "Bài 2: Cấp số cộng" },
    { id: "lop11_ch2_l3", title: "Bài 3: Cấp số nhân" },
  ],
  lop11_ch3: [
    { id: "lop11_ch3_l1", title: "Bài 1: Giới hạn của dãy số" },
    { id: "lop11_ch3_l2", title: "Bài 2: Giới hạn của hàm số" },
    { id: "lop11_ch3_l3", title: "Bài 3: Hàm số liên tục" },
  ],
  lop11_ch4: [
    { id: "lop11_ch4_l1", title: "Bài 1: Định nghĩa và ý nghĩa của đạo hàm" },
    { id: "lop11_ch4_l2", title: "Bài 2: Các quy tắc tính đạo hàm" },
    { id: "lop11_ch4_l3", title: "Bài 3: Đạo hàm của hàm số lượng giác" },
    { id: "lop11_ch4_l4", title: "Bài 4: Vi phân" },
  ],

  // ==================== LỚP 12 ====================
  lop12_ch1: [
    { id: "lop12_ch1_l1", title: "Bài 1: Sự đồng biến, nghịch biến của hàm số" },
    { id: "lop12_ch1_l2", title: "Bài 2: Cực trị của hàm số" },
    { id: "lop12_ch1_l3", title: "Bài 3: Giá trị lớn nhất và giá trị nhỏ nhất của hàm số" },
    { id: "lop12_ch1_l4", title: "Bài 4: Đường tiệm cận" },
    { id: "lop12_ch1_l5", title: "Bài 5: Khảo sát sự biến thiên và vẽ đồ thị của hàm số" },
  ],
  lop12_ch2: [
    { id: "lop12_ch2_l1", title: "Bài 1: Lũy thừa" },
    { id: "lop12_ch2_l2", title: "Bài 2: Hàm số lũy thừa" },
    { id: "lop12_ch2_l3", title: "Bài 3: Logarit" },
    { id: "lop12_ch2_l4", title: "Bài 4: Hàm số mũ. Hàm số logarit" },
    { id: "lop12_ch2_l5", title: "Bài 5: Phương trình mũ và phương trình logarit" },
  ],
  lop12_ch3: [
    { id: "lop12_ch3_l1", title: "Bài 1: Nguyên hàm" },
    { id: "lop12_ch3_l2", title: "Bài 2: Tích phân" },
    { id: "lop12_ch3_l3", title: "Bài 3: Ứng dụng của tích phân trong hình học" },
  ],
  lop12_ch4: [
    { id: "lop12_ch4_l1", title: "Bài 1: Số phức" },
    { id: "lop12_ch4_l2", title: "Bài 2: Phép tính với số phức" },
    { id: "lop12_ch4_l3", title: "Bài 3: Phương trình bậc hai với hệ số thực" },
  ],
};

export default exerciseLessons;
