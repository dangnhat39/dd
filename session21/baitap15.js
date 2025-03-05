const soTien = parseInt(prompt("Nhập số tiền: "), 10); // Yêu cầu người dùng nhập số tiền

if (isNaN(soTien) || soTien % 1000 !== 0) {
    console.log("Số tiền nhập vào phải là số hợp lệ và chia hết cho 1000");
} else {
    const menhGia = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];
    const ketQua = {};

    let soTienConLai = soTien;
    for (let i = 0; i < menhGia.length; i++) {
        const menhGiaHienTai = menhGia[i];
        if (soTienConLai >= menhGiaHienTai) {
            ketQua[menhGiaHienTai] = Math.floor(soTienConLai / menhGiaHienTai);
            soTienConLai %= menhGiaHienTai;
        }
    }

    for (const [menhGiaHienTai, soLuong] of Object.entries(ketQua)) {
        console.log(`${menhGiaHienTai.toLocaleString()} - ${soLuong} tờ`);
    }
}