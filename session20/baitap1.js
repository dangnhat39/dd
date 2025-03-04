let number = Number(prompt("Nhap vao 1 so nguyen"));
if (Number.isInteger(number) && number > 0) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    document.write(`Tổng các số nguyên từ 1 đến ${number} là: ${sum}`);

} else {
    alert("Dữ liệu nhập vào không hợp lệ. Vui lòng nhập một số nguyên dương.");
}