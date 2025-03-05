console.log("Các số Armstrong có 3 chữ số là:");
for (let i = 100; i < 1000; i++) {
    let soGoc = i;
    let tongLapPhuong = 0;
    let soTamThoi = soGoc;
    while (soTamThoi > 0) {
        let chuSo = soTamThoi % 10;
        tongLapPhuong += chuSo ** 3;
        soTamThoi = Math.floor(soTamThoi / 10);
    }
    if (tongLapPhuong === soGoc) {
        console.log(soGoc);
    }
}