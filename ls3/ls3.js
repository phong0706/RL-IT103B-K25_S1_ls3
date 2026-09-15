const rawFoodSubtotal = "120000";
const rawDistance = "3.5";
const inputVoucherCode = "GIAM20K";

const foodSubtotal = Number(rawFoodSubtotal);
const distance = Number(rawDistance);

// Kiểm tra an toàn: Đảm bảo không có giá trị nào bị biến đổi thành NaN
const isInputValid = !Number.isNaN(foodSubtotal) && !Number.isNaN(distance);

// Cờ hiệu 1: Kiểm tra tính hợp lệ của mã GIAM20K (Đơn món >= 100.000 VNĐ)
const isGiam20kEligible =
  isInputValid &&
  foodSubtotal >= 100000 &&
  inputVoucherCode === "GIAM20K";

// Cờ hiệu 2: Kiểm tra tính hợp lệ của mã FREESHIP (Cự ly <= 5 km)
// Áp dụng cơ chế loại trừ: Chỉ xét FREESHIP nếu mã GIAM20K KHÔNG được áp dụng
const isFreeshipEligible =
  isInputValid &&
  !isGiam20kEligible &&
  distance <= 5 &&
  inputVoucherCode === "FREESHIP";

// Ép kiểu Boolean sang Number (true = 1, false = 0) để tính số tiền giảm giá
const discountGiam20k = Number(isGiam20kEligible) * 20000;
const discountFreeship = Number(isFreeshipEligible) * 15000;

// Tổng tiền ưu đãi giảm giá (Đảm bảo tối đa 1 ưu đãi được kích hoạt)
const totalDiscount = discountGiam20k + discountFreeship;

// Quyết toán tổng tiền cuối cùng (Nếu input hỏng, tiền thanh toán = 0)
const finalPayment = isInputValid && (foodSubtotal - totalDiscount);


console.log(`
========= KẾT QUẢ THẨM ĐỊNH MÃ GIẢM GIÁ SHOPEEFOOD =========
Mã voucher đã nhập    : "${inputVoucherCode}"
Tổng tiền món ăn      : ${foodSubtotal.toLocaleString("vi-VN")} VNĐ
Khoảng cách giao hàng : ${distance} km
------------------------------------------------------------
Trạng thái mã GIAM20K : ${isGiam20kEligible}
Trạng thái mã FREESHIP: ${isFreeshipEligible}
------------------------------------------------------------
Tổng tiền giảm giá    : -${totalDiscount.toLocaleString("vi-VN")} VNĐ
SỐ TIỀN THANH TOÁN    : ${finalPayment.toLocaleString("vi-VN")} VNĐ
============================================================
`);