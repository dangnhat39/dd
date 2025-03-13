function chiaMang(mang, n) {
    if (!Array.isArray(mang) || typeof n !== 'number' || n <= 0) {
        return "Tham số không hợp lệ";
    }

    const ketQua = [];
    for (let i = 0; i < mang.length; i += n) {
        ketQua.push(mang.slice(i, i + n));
    }
    return ketQua;
}

// Ví dụ sử dụng:
const mangGoc = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const kichThuocMangCon = 3;

const mangCon = chiaMang(mangGoc, kichThuocMangCon);
console.log(mangCon); // Kết quả: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]