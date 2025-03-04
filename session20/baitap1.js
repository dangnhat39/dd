
const N = parseInt(prompt("Nhập vào một số nguyên N:"));
let tong = 0;
for (let i = 1; i <= N; i++) {
    tong += i;
}
console.log(`Tổng tất cả các số nguyên từ 1 đến ${N} là: ${tong}`);  