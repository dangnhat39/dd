
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num1 = parseInt(prompt("Nhập vào số thứ nhất: "));
let num2 = parseInt(prompt("Nhập vào số thứ hai: "));
let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
let randomNum = getRandomInt(min, max);
console.log("Số ngẫu nhiên trong khoảng từ " + min + " đến " + max + " là: " + randomNum);