function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num1 = parseInt(prompt("Nhập số nguyên thứ nhất:"));
let num2 = parseInt(prompt("Nhập số nguyên thứ hai:"));

let lowerLimit = Math.min(num1, num2);
let upperLimit = Math.max(num1, num2);

let randomNumber = getRandomInt(lowerLimit, upperLimit);

alert(`Số ngẫu nhiên trong khoảng từ ${lowerLimit} đến ${upperLimit} là: ${randomNumber}`);