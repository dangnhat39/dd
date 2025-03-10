let mang = [];
let choice;
do {
    console.log(`
================== MENU ===================
1. Nhập mảng
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
===========================================
`);
    choice = parseInt(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            let n = parseInt(prompt("Nhập số phần tử của mảng "));
            mang = [];
            for (let i = 0; i < n; i++) {
                mang.push(parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}: `)));
            }
            break;
        case 2:
            console.log('Mảng hiện tại: ' + mang.join(', '));
            break;
        case 3:
            let chan = 0;
            let le = 0;
            for (let i = 0; i < mang.length; i++) {
                if (mang[i] % 2 === 0) {
                    chan++;
                } else {
                    le++;
                }
            }
            console.log(`Số chẵn có trong mảng là: ${chan}`);
            console.log(`Số lẻ có trong mảng là: ${le}`);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < mang.length; i++) {
                sum += mang[i]
            }
            let trungBinhCong = sum / mang.length;
            console.log("Trung bình cộng của mảng là:" + trungBinhCong);
            break;
        case 5:
            // let deletE = parseInt(prompt("Nhập vị trí muốn xóa"));
            // if (isNaN(deletE) || deletE < 0 || deletE >= mang.length) {
            //     console.log("Vị trí không hợp lệ");
            // } else {
            //     mang.splice(deletE, 1);  
            //     console.log("Mảng sau khi xóa: " + mang); 
            // }
            let deletE = parseInt(prompt("Nhập vị trí muốn xóa "));

            if (isNaN(deletE) || deletE < 1 || deletE > mang.length) {
                console.log("Vị trí không hợp lệ");
            } else {
                mang.splice(deletE - 1, 1);
                console.log("Mảng sau khi xóa: " + mang);
            }
            break;
        case 6:
            mang.sort((a, b) => a - b);
            console.log("Số lớn thứ 2 trong mảng là: " + mang[mang.length - 2]);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
    }
} while (choice !== 7);