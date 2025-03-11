//Xây dựng hàm nhận vào 2 tham số là giá trị của 2 số nguyên bất kì.
//  Hàm thực hiện tính tổng và trả về giá trị.
function sum(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        return a + b;
    }
    console.log("Du lieu khong hop le");
    return null;
}
console.log(`ket qua:`, sum(1, 5));
console.log(`ket qua:`, sum(1, "text"));
console.log(`ket qua:`, sum(1, 5.3));


