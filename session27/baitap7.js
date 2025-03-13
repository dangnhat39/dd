function timSoBiThieu(mang) {
    if (!Array.isArray(mang) || mang.length < 2) {
        return null;
    }

    const soDau = mang[0];
    const soCuoi = mang[mang.length - 1];
    const soLuongDung = soCuoi - soDau + 1;
    const tongDung = ((soDau + soCuoi) * soLuongDung) / 2;
    const tongThucTe = mang.reduce((acc, num) => acc + num, 0);

    return tongDung - tongThucTe;
}

console.log(timSoBiThieu([1, 2, 3, 5]));
console.log(timSoBiThieu([10, 11, 12, 14]));
console.log(timSoBiThieu([-5, -4, -2]));  
