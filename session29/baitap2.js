
let danhSachSanPham = [];
let idCounter = 1;

function themSanPham() {
    const name = prompt("Nhập tên sản phẩm:");
    const price = parseFloat(prompt("Nhập giá sản phẩm:"));
    const category = prompt("Nhập danh mục sản phẩm:");
    const quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));

    if (!name || isNaN(price) || isNaN(quantity)) {
        alert("Vui lòng nhập đầy đủ và đúng định dạng thông tin.");
        return;
    }

    const sanPham = {
        id: idCounter++,
        name: name,
        price: price,
        category: category,
        quantity: quantity,
    };

    danhSachSanPham.push(sanPham);
    alert("Đã thêm sản phẩm thành công.");
}

function hienThiTatCaSanPham() {
    if (danhSachSanPham.length === 0) {
        alert("Danh sách sản phẩm trống.");
        return;
    }

    let danhSachString = "Danh sách sản phẩm:\n";
    danhSachSanPham.forEach((sanPham) => {
        danhSachString += `ID: ${sanPham.id}, Tên: ${sanPham.name}, Giá: ${sanPham.price}, Danh mục: ${sanPham.category}, Số lượng: ${sanPham.quantity}\n`;
    });
    alert(danhSachString);
}

function hienThiChiTietSanPham() {
    const idTimKiem = parseInt(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
    const sanPhamTimThay = danhSachSanPham.find(
        (sanPham) => sanPham.id === idTimKiem
    );

    if (sanPhamTimThay) {
        alert(
            `Chi tiết sản phẩm:\nID: ${sanPhamTimThay.id}, Tên: ${sanPhamTimThay.name}, Giá: ${sanPhamTimThay.price}, Danh mục: ${sanPhamTimThay.category}, Số lượng: ${sanPhamTimThay.quantity}`
        );
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
}

function capNhatSanPham() {
    const idCapNhat = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
    const sanPhamCapNhat = danhSachSanPham.find(
        (sanPham) => sanPham.id === idCapNhat
    );

    if (sanPhamCapNhat) {
        sanPhamCapNhat.name = prompt("Nhập tên mới:");
        sanPhamCapNhat.price = parseFloat(prompt("Nhập giá mới:"));
        sanPhamCapNhat.category = prompt("Nhập danh mục mới:");
        sanPhamCapNhat.quantity = parseInt(prompt("Nhập số lượng mới:"));
        alert("Đã cập nhật sản phẩm thành công.");
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
}

function xoaSanPham() {
    const idXoa = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
    const viTriXoa = danhSachSanPham.findIndex(
        (sanPham) => sanPham.id === idXoa
    );

    if (viTriXoa !== -1) {
        danhSachSanPham.splice(viTriXoa, 1);
        alert("Đã xóa sản phẩm thành công.");
    } else {
        alert("Không tìm thấy sản phẩm.");
    }
}

function locSanPhamTheoGia() {
    const giaMin = parseFloat(prompt("Nhập giá tối thiểu:"));
    const giaMax = parseFloat(prompt("Nhập giá tối đa:"));

    if (isNaN(giaMin) || isNaN(giaMax)) {
        alert("Giá không hợp lệ.");
        return;
    }

    const sanPhamLoc = danhSachSanPham.filter(
        (sanPham) => sanPham.price >= giaMin && sanPham.price <= giaMax
    );

    if (sanPhamLoc.length === 0) {
        alert("Không có sản phẩm nào trong khoảng giá này.");
    } else {
        let danhSachString = "Sản phẩm trong khoảng giá:\n";
        sanPhamLoc.forEach((sanPham) => {
            danhSachString += `ID: ${sanPham.id}, Tên: ${sanPham.name}, Giá: ${sanPham.price}, Danh mục: ${sanPham.category}, Số lượng: ${sanPham.quantity}\n`;
        });
        alert(danhSachString);
    }
}

let luaChon;
do {
    luaChon = prompt(
        "Chọn chức năng:\n" +
        "1. Thêm sản phẩm\n" +
        "2. Hiển thị tất cả sản phẩm\n" +
        "3. Hiển thị chi tiết sản phẩm\n" +
        "4. Cập nhật sản phẩm\n" +
        "5. Xóa sản phẩm\n" +
        "6. Lọc sản phẩm theo giá\n" +
        "7. Thoát"
    );

    switch (luaChon) {
        case "1":
            themSanPham();
            break;
        case "2":
            hienThiTatCaSanPham();
            break;
        case "3":
            hienThiChiTietSanPham();
            break;
        case "4":
            capNhatSanPham();
            break;
        case "5":
            xoaSanPham();
            break;
        case "6":
            locSanPhamTheoGia();
            break;
        case "7":
            alert("Kết thúc chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (luaChon !== "7");