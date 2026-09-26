# Phân tích Trade-off: Ép kiểu Tường minh (Number()) vs Toán tử Đơn phân (+value)

## 1. Bảng so sánh đối chiếu chi tiết

| Tiêu chí đánh giá | Hướng tiếp cận 1: Ép kiểu Tường minh (`Number()` / `parseInt()`) | Hướng tiếp cận 2: Toán tử Đơn phân (`+value`) |
| :--- | :--- | :--- |
| **Tính dễ đọc & Rõ ý định (Readability & Clarity)** | **Cao:** Rất trực quan, thể hiện rõ ràng mục đích chuyển đổi kiểu dữ liệu cho lập trình viên mới hoặc người đọc mã nguồn sau này. | **Trung bình/Thấp:** Dễ gây nhầm lẫn cú pháp, đặc biệt với các lập trình viên mới làm quen do ký hiệu dấu cộng `+` trông giống toán tử cộng thông thường. |
| **Nguy cơ nhầm lẫn cú pháp (Syntax Ambiguity)** | **Thấp:** Tách biệt rõ ràng các hàm xử lý toán học. Tránh được lỗi khi kết hợp biểu thức (ví dụ: `subtotal + +fee` rất khó nhìn và dễ sinh lỗi cú pháp logic). | **Cao:** Dễ bị nhầm lẫn thành phép toán cộng hai số nếu đặt cạnh các toán tử khác hoặc viết liền mạch (ví dụ: `a + +b`). |
| **Khả năng xử lý chuỗi kèm đơn vị đo** | **Tốt:** Kết hợp linh hoạt với `parseInt()` để tự động bóc tách số từ các chuỗi định dạng (ví dụ: `"100k"` -> `100`). | **Kém:** Trả về `NaN` đối với các chuỗi chứa ký tự chữ cái phía sau (ví dụ: `+"100k"` ra `NaN`). |

## 2. Kết luận và Khuyến nghị chuẩn hóa dự án
- **Quy chuẩn lựa chọn:** Dự án thương mại điện tử nên thống nhất sử dụng **Hướng tiếp cận 1 (`Number()` và `parseInt()`)** làm quy chuẩn chung cho toàn bộ mã nguồn.
- **Lý do:** Đảm bảo tính an toàn dữ liệu cao, tường minh về mặt ngữ nghĩa giúp dễ bảo trì, hạn chế tối đa các lỗi tiềm ẩn khi xử lý dữ liệu đầu vào không đồng nhất từ người dùng (như chuỗi rỗng, giá trị `null`/`undefined` hoặc chuỗi kèm đơn vị tiền tệ/đơn vị đo lường).