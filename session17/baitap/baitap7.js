
let number = prompt("Nhập vào một số:");

let formattedNumber = Number(number).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });

console.log(formattedNumber);