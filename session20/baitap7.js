let soLuong = parseInt(prompt("Nhập số lượng số Fibonacci cần hiển thị: "));

if (!isNaN(soLuong) && soLuong > 0) {
    let dayFibonacci = [1, 1];
    for (let i = 2; i < soLuong; i++) {
        dayFibonacci[i] = dayFibonacci[i - 1] + dayFibonacci[i - 2];
    }
    document.write(dayFibonacci);

} else if (soLuong === 1) {
    document.write([1]);
} else {
    document.write("Giá trị nhập không hợp lệ. Vui lòng nhập một số nguyên dương.");
}