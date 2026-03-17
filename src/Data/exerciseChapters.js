// Dữ liệu các chương của môn học theo từng lớp
const exerciseChapters = {
  // Lớp 1
  1: [
    {
      id: "lop1_ch1",
      title: "Chương I: Các số đến 10",
      description: "Nhận biết các số, đọc, viết và sắp xếp các số đến 10",
    },
    {
      id: "lop1_ch2",
      title: "Chương II: Phép cộng, phép trừ trong phạm vi 10",
      description: "Luyện tập phép cộng và trừ trong phạm vi 10",
    },
    {
      id: "lop1_ch3",
      title: "Chương III: Các số trong phạm vi 100",
      description: "Mở rộng nhận biết các số đến 100",
    },
    {
      id: "lop1_ch4",
      title: "Chương IV: Phép cộng, phép trừ trong phạm vi 100",
      description: "Luyện tập phép toán trong phạm vi 100",
    },
  ],
  // Lớp 2
  2: [
    {
      id: "lop2_ch1",
      title: "Chương I: Ôn tập và bổ sung",
      description: "Ôn tập kiến thức lớp 1 và bổ sung kiến thức mới",
    },
    {
      id: "lop2_ch2",
      title: "Chương II: Phép cộng có nhớ trong phạm vi 100",
      description: "Học phép cộng có nhớ",
    },
    {
      id: "lop2_ch3",
      title: "Chương III: Phép trừ có nhớ trong phạm vi 100",
      description: "Học phép trừ có nhớ",
    },
    {
      id: "lop2_ch4",
      title: "Chương IV: Phép nhân và phép chia",
      description: "Làm quen với phép nhân và chia",
    },
  ],
  // Lớp 3
  3: [
    {
      id: "lop3_ch1",
      title: "Chương I: Ôn tập và bổ sung",
      description: "Ôn tập kiến thức lớp 2",
    },
    {
      id: "lop3_ch2",
      title: "Chương II: Phép nhân và phép chia trong phạm vi 1000",
      description: "Mở rộng phép nhân chia",
    },
    {
      id: "lop3_ch3",
      title: "Chương III: Các số đến 10000",
      description: "Làm quen với số có 4 chữ số",
    },
    {
      id: "lop3_ch4",
      title: "Chương IV: Các số đến 100000",
      description: "Mở rộng phạm vi số",
    },
  ],
  // Lớp 4
  4: [
    {
      id: "lop4_ch1",
      title: "Chương I: Số tự nhiên. Bảng đơn vị đo khối lượng",
      description: "Học về số tự nhiên và đơn vị đo",
    },
    {
      id: "lop4_ch2",
      title: "Chương II: Bốn phép tính với số tự nhiên",
      description: "Thành thạo 4 phép tính cơ bản",
    },
    {
      id: "lop4_ch3",
      title: "Chương III: Dấu hiệu chia hết. Phân số",
      description: "Học về phân số và dấu hiệu chia hết",
    },
    {
      id: "lop4_ch4",
      title: "Chương IV: Các phép tính với phân số",
      description: "Thực hiện phép tính với phân số",
    },
  ],
  // Lớp 5
  5: [
    {
      id: "lop5_ch1",
      title: "Chương I: Ôn tập và bổ sung về phân số",
      description: "Ôn tập phân số",
    },
    {
      id: "lop5_ch2",
      title: "Chương II: Số thập phân và các phép tính",
      description: "Học về số thập phân",
    },
    {
      id: "lop5_ch3",
      title: "Chương III: Hình học",
      description: "Diện tích, chu vi các hình",
    },
    {
      id: "lop5_ch4",
      title: "Chương IV: Số đo thời gian",
      description: "Học về đo lường thời gian",
    },
  ],
  // Lớp 6
  6: [
    {
      id: "lop6_ch1",
      title: "Chương I: Số tự nhiên",
      description: "Tập hợp, ước bội, số nguyên tố",
    },
    {
      id: "lop6_ch2",
      title: "Chương II: Số nguyên",
      description: "Các phép tính với số nguyên",
    },
    {
      id: "lop6_ch3",
      title: "Chương III: Phân số",
      description: "Các phép tính với phân số",
    },
    {
      id: "lop6_ch4",
      title: "Chương IV: Một số yếu tố thống kê và xác suất",
      description: "Thống kê mô tả và xác suất thực nghiệm",
    },
  ],
  // Lớp 7
  7: [
    {
      id: "lop7_ch1",
      title: "Chương I: Số hữu tỷ",
      description: "Các phép tính với số hữu tỷ",
    },
    {
      id: "lop7_ch2",
      title: "Chương II: Số thực",
      description: "Căn bậc hai và số vô tỷ",
    },
    {
      id: "lop7_ch3",
      title: "Chương III: Biểu thức đại số",
      description: "Đa thức và phép tính",
    },
    {
      id: "lop7_ch4",
      title: "Chương IV: Góc và đường thẳng song song",
      description: "Hình học cơ bản",
    },
  ],
  // Lớp 8
  8: [
    {
      id: "lop8_ch1",
      title: "Chương I: Đa thức",
      description: "Nhân và phân tích đa thức",
    },
    {
      id: "lop8_ch2",
      title: "Chương II: Phương trình bậc nhất một ẩn",
      description: "Giải phương trình",
    },
    {
      id: "lop8_ch3",
      title: "Chương III: Bất phương trình bậc nhất một ẩn",
      description: "Giải bất phương trình",
    },
    {
      id: "lop8_ch4",
      title: "Chương IV: Tam giác đồng dạng",
      description: "Tính chất tam giác đồng dạng",
    },
  ],
  // Lớp 9
  9: [
    {
      id: "lop9_ch1",
      title: "Chương I: Căn bậc hai, căn bậc ba",
      description: "Các phép tính với căn",
    },
    {
      id: "lop9_ch2",
      title: "Chương II: Hàm số bậc nhất",
      description: "Đồ thị hàm số bậc nhất",
    },
    {
      id: "lop9_ch3",
      title: "Chương III: Hệ phương trình bậc nhất hai ẩn",
      description: "Giải hệ phương trình",
    },
    {
      id: "lop9_ch4",
      title: "Chương IV: Hàm số bậc hai",
      description: "Đồ thị parabol",
    },
  ],
  // Lớp 10
  10: [
    {
      id: "lop10_ch1",
      title: "Chương I: Mệnh đề và tập hợp",
      description: "Logic và tập hợp cơ bản",
    },
    {
      id: "lop10_ch2",
      title: "Chương II: Bất phương trình và hệ bất phương trình",
      description: "Giải bất phương trình bậc 2",
    },
    {
      id: "lop10_ch3",
      title: "Chương III: Hàm số và đồ thị",
      description: "Hàm số bậc 2 và đồ thị",
    },
    {
      id: "lop10_ch4",
      title: "Chương IV: Hệ thức lượng trong tam giác",
      description: "Định lý sin, cos",
    },
  ],
  // Lớp 11
  11: [
    {
      id: "lop11_ch1",
      title: "Chương I: Hàm số lượng giác và phương trình lượng giác",
      description: "Hàm sin, cos, tan",
    },
    {
      id: "lop11_ch2",
      title: "Chương II: Dãy số. Cấp số cộng và cấp số nhân",
      description: "Cấp số và công thức tổng quát",
    },
    {
      id: "lop11_ch3",
      title: "Chương III: Giới hạn. Hàm số liên tục",
      description: "Khái niệm giới hạn",
    },
    {
      id: "lop11_ch4",
      title: "Chương IV: Đạo hàm",
      description: "Quy tắc tính đạo hàm",
    },
  ],
  // Lớp 12
  12: [
    {
      id: "lop12_ch1",
      title: "Chương I: Ứng dụng đạo hàm để khảo sát hàm số",
      description: "Cực trị, điểm uốn, tiệm cận",
    },
    {
      id: "lop12_ch2",
      title: "Chương II: Hàm số lũy thừa, mũ và logarit",
      description: "Phương trình mũ, logarit",
    },
    {
      id: "lop12_ch3",
      title: "Chương III: Nguyên hàm, tích phân và ứng dụng",
      description: "Tính tích phân và diện tích",
    },
    {
      id: "lop12_ch4",
      title: "Chương IV: Số phức",
      description: "Phép tính với số phức",
    },
  ],
};

export default exerciseChapters;
