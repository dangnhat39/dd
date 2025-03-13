function soLonNhatTuChuSo(n) {
    if (typeof n !== 'number' || isNaN(n) || !Number.isFinite(n)) {
        return 'dữ liệu không hợp lệ';
    }

    return parseInt(String(Math.abs(n)).split('').sort((a, b) => b - a).join(''), 10);
}

console.log(soLonNhatTuChuSo(2941));    // 9421  
console.log(soLonNhatTuChuSo(3875));    // 8753  
console.log(soLonNhatTuChuSo('1h8t'));   // 'dữ liệu không hợp lệ'  
console.log(soLonNhatTuChuSo(-1234));   // 4321  