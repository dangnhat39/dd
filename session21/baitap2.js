let so1 = parseInt(prompt("Nhập số thứ 1"));
let so2 = parseInt(prompt("Nhập số thứ 2"));
let so3 = parseInt(prompt("Nhập số thứ 3"));
let so4 = parseInt(prompt("Nhập số thứ 4"));
let so5 = parseInt(prompt("Nhập số thứ 5"));

let sum = 0;
if (so1 % 2 == 0) sum += so1;
if (so2 % 2 == 0) sum += so2;
if (so3 % 2 == 0) sum += so3;
if (so4 % 2 == 0) sum += so4;
if (so5 % 2 == 0) sum += so5;

console.log("Tổng các số chẵn là:", sum);
alert("Tổng các số chẵn là: " + sum);