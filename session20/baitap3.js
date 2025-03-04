let number = Number(prompt("Nhap vao 1 chuoi so nguyen"));
let num = number.toString();
let reversedNum = ""; // Biến để lưu số đảo ngược  

if (Number.isInteger(number) && number > 0) {
    for (let i = num.length - 1; i >= 0; i--) {
        reversedNum += num[i];
    }

    if (num === reversedNum) {
        document.write(`${number} là số đối xứng`);
    } else {
        document.write(`${number} không phải là số đối xứng`);
    }
} else {
    alert("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
}