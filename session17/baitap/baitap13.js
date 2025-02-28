const laiSuatThang = 0.043 / 12;

const sotien = parseFloat(prompt("Nhập vào số tiền gửi:"));
const sothang = parseInt(prompt("Nhập vào số tháng gửi:"));

if (sotien > 0 && sothang > 0) {
    const tienLai = sotien * laiSuatThang * sothang;
    alert(`Số tiền lãi nhận được là: ${tienLai.toFixed(2)} VND`);
} else {
    alert("Vui lòng nhập số tiền và số tháng hợp lệ.");
}