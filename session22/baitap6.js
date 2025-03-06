const arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

let inputNumber = parseInt(prompt("Nhập vào một số nguyên bất kì: "));

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === inputNumber) {
        count++;
    }
}

if (count > 0) {
    alert(`Số ${inputNumber} xuất hiện ${count} lần trong mảng.`);
} else {
    alert(`Số ${inputNumber} không tồn tại trong mảng.`);
}