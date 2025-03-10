let arr = [];
let flag = 1;
let sum = 0;
let choice = 0;
do {
    console.log("1. Nhập mảng số nguyên");
    console.log("2. Hiển thị mảng");
    console.log("3. Tìm tổng các số chẵn trong mảng");
    console.log("4. Tính trung bình cộng của các mảng");
    console.log("5. Xóa phần tử tại vị trí chỉ định");
    console.log("6. Tìm phần tử lớn thứ hai trong mảng");
    console.log("7. Thoát");
    choice = parseInt(prompt("Nhập lựa chọn của bạn:"));
    switch(choice) {
        case 1:
            let length = parseInt(prompt("Nhập số phần tử của mảng:"));
            if(length > 0) {
                arr = [];
                for (let i = 0; i < length; i++) {
                    let number = parseInt(prompt(`Nhập phần tử thứ ${i+1}:`));
                    arr.push(number);
                }
            }
            break;
        case 2:
            console.log("Mảng hiện tại:", arr);
            break;
        case 3:
            console.log("Tổng các số chẵn trong mảng:");
            sum = 0;
            flag = 0;  
            for (let i = 0; i < arr.length; i++){
                if (arr[i] % 2 == 0) {
                    sum += arr[i];
                    console.log(arr[i]);
                    flag = 1;
                }
            }
            flag ? console.log("Tổng của tất cả số chẵn trong mảng là " + sum) : console.log("Trong mảng không có số chẵn.");
            break;
        case 4:
            console.log("Trung bình cộng của các phần tử trong mảng:");
            sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log("Trung bình cộng là " + (sum / arr.length));
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");

    }
} while (choice !== 7);
