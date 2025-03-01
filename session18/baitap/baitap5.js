let year = prompt("Nhập số năm kinh nghiệm của nhân viên vào ");
year = parseInt(year); 

if (year < 1) {
    document.write("Mời vào nghề");
} else if (year >= 1 && year < 3) {
    document.write("Nhân viên có kinh nghiệm");
} else if (year >= 3 && year < 6) {
    document.write("Chuyên Viên");
} else if (year >= 6) {
    document.write("Quản Lý");
} else {
    document.write("Vui lòng nhập một số hợp lệ.");
}  