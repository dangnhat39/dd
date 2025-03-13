function menuHinhHoc() {
    let luaChon;
    do {
        console.log("\n===== MENU TÍNH TOÁN HÌNH HỌC =====");
        console.log("1. Tính diện tích hình tròn");
        console.log("2. Tính chu vi hình tròn");
        console.log("3. Tính diện tích hình chữ nhật");
        console.log("4. Tính chu vi hình chữ nhật");
        console.log("5. Thoát");

        luaChon = parseInt(prompt("Nhập lựa chọn của bạn (1-5): "), 10);

        switch (luaChon) {
            case 1:
                let banKinh = parseFloat(prompt("Nhập bán kính hình tròn: "));
                console.log("Diện tích hình tròn:", Math.PI * Math.pow(banKinh, 2));
                break;
            case 2:
                let banKinhChuVi = parseFloat(prompt("Nhập bán kính hình tròn: "));
                console.log("Chu vi hình tròn:", 2 * Math.PI * banKinhChuVi);
                break;
            case 3:
                let chieuDai = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                let chieuRong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                console.log("Diện tích hình chữ nhật:", chieuDai * chieuRong);
                break;
            case 4:
                let dai = parseFloat(prompt("Nhập chiều dài hình chữ nhật: "));
                let rong = parseFloat(prompt("Nhập chiều rộng hình chữ nhật: "));
                console.log("Chu vi hình chữ nhật:", 2 * (dai + rong));
                break;
            case 5:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập từ 1 đến 5.");
        }
    } while (luaChon !== 5);
}


menuHinhHoc();
