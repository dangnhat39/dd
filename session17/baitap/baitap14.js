let number = Number(prompt("Nhap vao 1 so: "));
let sqrt = Math.sqrt(number);
if (Number.isInteger(sqrt)) {
    console.log(`So ${number} la so chinh phuong`);
} else {
    console.log(`So ${number} khong la so chinh phuong`);
}