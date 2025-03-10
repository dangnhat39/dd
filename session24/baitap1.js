let arr = [];
let sum = 0;
let flag = 0;
let choice = 0;
do {
    console.log("1. Nhập mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm phần tử lớn nhất và nhỏ nhất");
    console.log("4. Tính tổng các phần tử trong mảng");
    console.log("5. Tìm số lần xuất hiện của môt phần tử");
    console.log("6. Sắp xếp mảng tăng dần");
    console.log("7. Thoát");
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
    switch (choice) {
        case 1:
            let length = parseInt(prompt("Nhập số phần tử của mảng:"));
            if (length > 0) {
                for (let i = 0; i < length; i++) {
                    let number = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
                    arr.push(number);
                }
            } else {
                console.log("Số lượng phần tử không hợp lệ.");
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            if (arr.length > 0) {
                let max = Math.max(...arr);
                let min = Math.min(...arr);
                console.log("Phần tử lớn nhất:", max);
                console.log("Phần tử nhỏ nhất:", min);
            } else {
                console.log("Mảng rỗng.");
            }
            break;
        case 4:
            sum = arr.reduce((a, b) => a + b, 0);
            console.log("Tổng các phần tử trong mảng:", sum);
            break;
        case 5:
            let element = parseInt(prompt("Nhập phần tử cần tìm:"));
            let count = arr.filter(x => x === element).length;
            console.log(`Phần tử ${element} xuất hiện ${count} lần.`);
            break;
        case 6:
            arr.sort((a, b) => a - b);
            console.log("Mảng sau khi sắp xếp tăng dần:", arr);
            break;
        case 7:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ.");
            break;
    }
} while (choice !== 7);