let arr = [];
let length = Number(prompt("moi bạn nhập vào số phần tử trong mảng"));
let count = 0;
let flag = 0;
let sum = 0;
if (length > 0) {
    for (let i = 1; i <= length; i++) {
        let number = prompt("moi bạn nhập vào giá trị vị trí thứ " + i);
        arr.push(number);
    }
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(Number(arr[i]))) {
            sum += Number(arr[i]);
            flag = 1;
        }
    }
    flag ? console.log(sum) : console.log("không có ký tự số");
} else {
    console.log("số lượng phần tử không hợp lệ")
}