let ngay = 15;
let thang = 8;
let cungHoangDao;

if ((thang == 1 && ngay >= 20) || (thang == 2 && ngay <= 18)) {
    cungHoangDao = "Bảo Bình";
} else if ((thang == 2 && ngay >= 19) || (thang == 3 && ngay <= 20)) {
    cungHoangDao = "Song Ngư";
} else if ((thang == 3 && ngay >= 21) || (thang == 4 && ngay <= 19)) {
    cungHoangDao = "Bạch Dương";
} else if ((thang == 4 && ngay >= 20) || (thang == 5 && ngay <= 20)) {
    cungHoangDao = "Kim Ngưu";
} else if ((thang == 5 && ngay >= 21) || (thang == 6 && ngay <= 20)) {
    cungHoangDao = "Song Tử";
} else if ((thang == 6 && ngay >= 21) || (thang == 7 && ngay <= 22)) {
    cungHoangDao = "Cự Giải";
} else if ((thang == 7 && ngay >= 23) || (thang == 8 && ngay <= 22)) {
    cungHoangDao = "Sư Tử";
} else if ((thang == 8 && ngay >= 23) || (thang == 9 && ngay <= 22)) {
    cungHoangDao = "Xử Nữ";
} else if ((thang == 9 && ngay >= 23) || (thang == 10 && ngay <= 22)) {
    cungHoangDao = "Thiên Bình";
} else if ((thang == 10 && ngay >= 23) || (thang == 11 && ngay <= 21)) {
    cungHoangDao = "Bọ Cạp";
} else if ((thang == 11 && ngay >= 22) || (thang == 12 && ngay <= 21)) {
    cungHoangDao = "Nhân Mã";
} else if ((thang == 12 && ngay >= 22) || (thang == 1 && ngay <= 19)) {
    cungHoangDao = "Ma Kết";
} else {
    cungHoangDao = "Ngày không hợp lệ";
}

console.log(`Cung hoàng đạo của bạn là: ${cungHoangDao}`);