let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sellec = parseInt(prompt("Nhập số cần tìm: "));
let index = number.indexOf(sellec);
if (sellec === number[index]) {
    console.log("Bingo ");
} else if(Number.isInteger(sellec)) {
    console.log("Chúc bạn may mắn lần sau");
} else {
    console.log("Không được nhập chữ");
}