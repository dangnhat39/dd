let mang = [];
let choice;
do {
    console.log(`
================== MENU ===================
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
===========================================
`);
    choice = parseInt(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số lượng phần tử: "));
            mang = [];
            for (let i = 0; i < n; i++) {
                mang.push(parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            console.log("Mảng hiện tại: ", mang);
            break;
        case 3:
            let max = Math.max(...mang);
            let index = mang.indexOf(max);
            console.log(`Phần tử lớn nhất là ${max} ở vị trí ${index}`);
            break;
        case 4:
            let sum = mang.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
            let count = mang.filter(num => num > 0).length;
            let avg = count > 0 ? sum / count : 0;
            console.log(`Tổng các số dương: ${sum}, Trung bình cộng: ${avg}`);
            break;
        case 5:
            mang.reverse();
            console.log("Mảng sau khi đảo ngược: ", mang);
            break;
        case 6:
            let isSymmetric = JSON.stringify(mang) === JSON.stringify([...mang].reverse());
            console.log(`Mảng ${isSymmetric ? "có" : "không"} đối xứng`);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);