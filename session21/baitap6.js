
let number = parseInt(prompt("Nhập vào một số nguyên bất kỳ: "));


if (isNaN(number)) {
    console.log("Vui lòng nhập một số nguyên hợp lệ.");
} else {
    console.log(`Các ước của số ${number} là:`);
     
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}  