let soTien = parseFloat(prompt("Nhập số tiền gửi ban đầu: "));
let laiSuatThang = parseFloat(prompt("Nhập lãi suất hàng tháng (%): "));
let soThang = parseInt(prompt("Nhập số tháng gửi: "));
let tongTien = soTien;
let tongLai = 0;

if (!isNaN(soTien) && !isNaN(laiSuatThang) && !isNaN(soThang) && soTien > 0 && laiSuatThang > 0 && soThang > 0) {
    for (let i = 0; i < soThang; i++) {
        let lai = tongTien * laiSuatThang / 100;
        tongTien += lai;
        tongLai += lai;
    }
    document.write("Số tiền gốc ban đầu: " + soTien + "<br>");
    document.write("Lãi suất hàng tháng: " + laiSuatThang + "%<br>");
    document.write("Số tháng gửi: " + soThang + "<br>");
    document.write("Tổng số tiền lãi: " + tongLai + "<br>");
    document.write("Số tiền sau " + soThang + " tháng: " + tongTien);
} else {
    document.write("Dữ liệu nhập vào không hợp lệ.");
}