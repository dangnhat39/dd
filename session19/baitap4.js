let number = prompt("Nhập vào 1 số bất kỳ");
if (number % 3 === 0 && number % 5 === 0) {
    document.write("SỐ chia hết cho cả 3 và 5")
} else if (number % 3 !== 0 && number % 5 !== 0) {
    document.write("Số không chia hết cho cả 3 và 5");
} else if (number % 3 === 0) {
    document.write("số chỉ chia hết cho 3")
}else if (number % 5 === 0) {
    document.write("số chỉ chia hết cho 5")
}