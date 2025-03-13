function kiemTraCapSoCong(mang) {
    if (!Array.isArray(mang) || mang.length < 2) {
        return false;
    }

    const congSai = mang[1] - mang[0];

    for (let i = 2; i < mang.length; i++) {
        if (mang[i] - mang[i - 1] !== congSai) {
            return false;
        }
    }

    return true;
}

const mang1 = [2, 4, 6, 8, 10];
const mang2 = [1, 3, 6, 10, 15];
const mang3 = [5, 5, 5, 5];
const mang4 = [10, 8, 6, 4, 2];
const mang5 = [1, 2];
const mang6 = [1];
const mang7 = [];

console.log(kiemTraCapSoCong(mang1));
console.log(kiemTraCapSoCong(mang2));
console.log(kiemTraCapSoCong(mang3));
console.log(kiemTraCapSoCong(mang4));
console.log(kiemTraCapSoCong(mang5));
console.log(kiemTraCapSoCong(mang6));
console.log(kiemTraCapSoCong(mang7));