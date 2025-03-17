let danhBa = [];
let idCounter = 1;

function kiemTraSDT(phone) {
    const regExp = /^\d{10}$/; 
    return regExp.test(phone);
}

function themContact() {
    const name = prompt("Nhập tên liên hệ:");
    const email = prompt("Nhập email liên hệ:");
    const phone = prompt("Nhập số điện thoại liên hệ:");

    if (!name || !email || !phone) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    if (!kiemTraSDT(phone)) {
        alert("Số điện thoại không hợp lệ.");
        return;
    }

    const contact = { id: idCounter++, name, email, phone };

    danhBa.push(contact);
    alert("Đã thêm liên hệ thành công.");
}

function hienThiDanhBa() {
    if (danhBa.length === 0) {
        alert("Danh bạ trống.");
        return;
    }

    let danhBaString = "Danh bạ:\n";
    danhBa.forEach((contact) => {
        danhBaString += `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}\n`;
    });
    alert(danhBaString);
}

function timContactTheoSDT() {
    const sdtTimKiem = prompt("Nhập số điện thoại cần tìm:");
    const contactTimThay = danhBa.find((contact) => contact.phone === sdtTimKiem);

    if (contactTimThay) {
        alert(`Tìm thấy liên hệ:\nID: ${contactTimThay.id}, Tên: ${contactTimThay.name}, Email: ${contactTimThay.email}, SĐT: ${contactTimThay.phone}`);
    } else {
        alert("Không tìm thấy liên hệ.");
    }
}

function capNhatContact() {
    const idCapNhat = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
    const contactCapNhat = danhBa.find((contact) => contact.id === idCapNhat);

    if (contactCapNhat) {
        contactCapNhat.name = prompt("Nhập tên mới:");
        contactCapNhat.email = prompt("Nhập email mới:");
        contactCapNhat.phone = prompt("Nhập số điện thoại mới:");
        alert("Đã cập nhật liên hệ thành công.");
    } else {
        alert("Không tìm thấy liên hệ.");
    }
}

function xoaContact() {
    const idXoa = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
    const viTriXoa = danhBa.findIndex((contact) => contact.id === idXoa);

    if (viTriXoa !== -1) {
        danhBa.splice(viTriXoa, 1);
        alert("Đã xóa liên hệ thành công.");
    } else {
        alert("Không tìm thấy liên hệ.");
    }
}

let luaChon;
do {
    luaChon = prompt(
        "Chọn chức năng:\n" +
        "1. Thêm liên hệ\n" +
        "2. Hiển thị danh bạ\n" +
        "3. Tìm kiếm theo SĐT\n" +
        "4. Cập nhật liên hệ\n" +
        "5. Xóa liên hệ\n" +
        "6. Thoát"
    );

    switch (luaChon) {
        case "1":
            themContact();
            break;
        case "2":
            hienThiDanhBa();
            break;
        case "3":
            timContactTheoSDT();
            break;
        case "4":
            capNhatContact();
            break;
        case "5":
            xoaContact();
            break;
        case "6":
            alert("Kết thúc chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ.");
    }
} while (luaChon !== "6");