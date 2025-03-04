let number = Number(prompt("Nhap vao 1 so nguyen"));
if (Number.isInteger(number) && number > 0) {
    let sum = "";
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            sum += i + ", ";
        }
    }
    sum = sum.slice(0, -2);
    document.write(`Các số chia hết cho 5 từ 1 đến ${number} là: ${sum}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
}