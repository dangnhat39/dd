let nhaHang = [];

function themMonAn() {
    let name = prompt("Nhập tên món ăn:");
    let price = prompt("Nhập giá món ăn:");
    let moTa = prompt("Hãy nêu cảm nhận về món ăn:");

    if (!name || isNaN(price) || price <= 0) {
        alert("Dữ liệu không hợp lệ! Vui lòng nhập lại.");
        return;
    }

    let monAn = {
        name: name.trim(),
        price: parseFloat(price),
        moTa: moTa.trim()
    };

    nhaHang.push(monAn);
    console.log("Đã thêm món ăn: " + name);
}

function xoaMonAn() {
    let name = prompt("Hãy nhập tên món ăn cần xóa:");

    if (!name) {
        console.log("Hãy nhập lại!");
        return;
    }

    let beforeLength = nhaHang.length;
    nhaHang = nhaHang.filter(monAn => monAn.name.toLowerCase() !== name.toLowerCase());

    if (nhaHang.length === beforeLength) {
        console.log("Không tìm thấy món ăn để xóa!");
    } else {
        console.log("Đã xóa món ăn: " + name);
    }
}

function capNhatMonAn() {
    let name = prompt("Nhập tên món ăn cần cập nhật:");
    let monAn = nhaHang.find(mon => mon.name.toLowerCase() === name.toLowerCase());

    if (!monAn) {
        console.log("Không tìm thấy món ăn này!");
        return;
    }

    let newName = prompt("Nhập tên mới (nhấn Enter để giữ nguyên):", monAn.name).trim();
    let newPrice = prompt("Nhập giá mới (nhấn Enter để giữ nguyên):", monAn.price);
    let newMoTa = prompt("Nhập mô tả mới (nhấn Enter để giữ nguyên):", monAn.moTa).trim();

    if (newName) monAn.name = newName;
    if (!isNaN(newPrice) && newPrice > 0) monAn.price = parseFloat(newPrice);
    if (newMoTa) monAn.moTa = newMoTa;

    console.log("Đã cập nhật món ăn: " + monAn.name);
}

function hienThiMenu() {
    if (nhaHang.length === 0) {
        console.log("Menu đang trống!");
        return;
    }

    console.log("--- Menu Nhà Hàng ---");
    nhaHang.forEach((monAn, index) => {
        console.log(`${index + 1}. ${monAn.name} - ${monAn.price} VND - ${monAn.moTa}`);
    });
}

function timKiemMonAn() {
    let keyword = prompt("Nhập tên món ăn cần tìm:").toLowerCase();
    let ketQua = nhaHang.filter(monAn => monAn.name.toLowerCase().includes(keyword));

    if (ketQua.length === 0) {
        console.log("Không tìm thấy món ăn nào phù hợp!");
    } else {
        console.log("Kết quả tìm kiếm:");
        ketQua.forEach(monAn => console.log(`${monAn.name} - ${monAn.price} VND - ${monAn.moTa}`));
    }
}

let luaChon;
do {
    luaChon = prompt(
        `Chọn hành động:  \n1. Thêm món ăn vào danh mục.  \n2. Xóa món ăn theo tên khỏi danh mục.  \n3. Cập nhật thông tin món ăn.  \n4. Hiển thị menu.  \n5. Tìm kiếm món ăn.  \n6. Thoát`
    );

    switch (luaChon) {
        case "1":
            themMonAn();
            break;
        case "2":
            xoaMonAn();
            break;
        case "3":
            capNhatMonAn();
            break;
        case "4":
            hienThiMenu();
            break;
        case "5":
            timKiemMonAn();
            break;
        case "6":
            alert("Cảm ơn bạn đã sử dụng chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
            break;
    }
} while (luaChon !== "6");
