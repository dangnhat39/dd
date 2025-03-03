let a = parseFloat(prompt("Nhập số thứ nhất: "));
let b = parseFloat(prompt("Nhập số thứ hai: "));
let c = parseFloat(prompt("Nhập số thứ ba: "));
let maxNumber = (a >= b && a >= c) ? a : (b >= c ? b : c);
alert("Số lớn nhất trong 3 số đã nhập là: " + maxNumber);  