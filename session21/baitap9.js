let number = parseInt(prompt("Nhập số bất kì: "));

if (Number.isInteger(number)) {
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        document.write(`Số ${number} là số nguyên tố`);
    } else {
        document.write(`Số ${number} không là số nguyên tố`);
    }
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}