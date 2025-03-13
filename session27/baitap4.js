let danhSachSoNguyen = [];
let luaChon;

do {
    luaChon = prompt(
        "Chọn chức năng:\n" +
        "1. Nhập danh sách số nguyên\n" +
        "2. Tính trung bình các số\n" +
        "3. Tìm số chẵn lớn nhất\n" +
        "4. Tìm số lẻ nhỏ nhất\n" +
        "5. Thoát"
    );

    switch (luaChon) {
        case "1":
            const soLuong = parseInt(prompt("Nhập số lượng số nguyên:"));
            if (isNaN(soLuong) || soLuong <= 0) {
                alert("Số lượng không hợp lệ.");
            } else {
                danhSachSoNguyen = []; // Xóa danh sách cũ trước khi nhập mới
                for (let i = 0; i < soLuong; i++) {
                    const so = parseInt(prompt(`Nhập số nguyên thứ ${i + 1}:`));
                    if (isNaN(so)) {
                        alert("Số không hợp lệ.");
                        break; // Thoát vòng lặp nếu có số không hợp lệ
                    }
                    danhSachSoNguyen.push(so);
                }
                alert("Đã nhập danh sách số nguyên.");
            }
            break;
        case "2":
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên trống.");
            } else {
                const tong = danhSachSoNguyen.reduce((acc, num) => acc + num, 0);
                const trungBinh = tong / danhSachSoNguyen.length;
                alert(`Trung bình các số: ${trungBinh}`);
            }
            break;
        case "3":
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên trống.");
            } else {
                const soChan = danhSachSoNguyen.filter((num) => num % 2 === 0);
                if (soChan.length === 0) {
                    alert("Không có số chẵn trong danh sách.");
                } else {
                    const soChanLonNhat = Math.max(...soChan);
                    alert(`Số chẵn lớn nhất: ${soChanLonNhat}`);
                }
            }
            break;
        case "4":
            if (danhSachSoNguyen.length === 0) {
                alert("Danh sách số nguyên trống.");
            } else {
                const soLe = danhSachSoNguyen.filter((num) => num % 2 !== 0);
                if (soLe.length === 0) {
                    alert("Không có số lẻ trong danh sách.");
                } else {
                    const soLeNhoNhat = Math.min(...soLe);
                    alert(`Số lẻ nhỏ nhất: ${soLeNhoNhat}`);
                }
            }
            break;
        case "5":
            alert("Kết thúc chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (luaChon !== "5");