const arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];

const tanSuat = {};
let soLanXH = 0;
let xHien = arr[0];

for (let i = 0; i < arr.length; i++) {
    const phanTu = arr[i];
    if (tanSuat[phanTu]) {
        tanSuat[phanTu]++;
    } else {
        tanSuat[phanTu] = 1;
    }

    if (tanSuat[phanTu] > soLanXH) {
        soLanXH = tanSuat[phanTu];
        xHien = phanTu;
    } else if (tanSuat[phanTu] === soLanXH && phanTu < xHien) {
        xHien = phanTu;
    }
}

alert(`Phần tử có số lần xuất hiện nhiều nhất là: ${xHien}`);