function soLonNhatTuChuSo(n) {
    return parseInt(String(Math.abs(n)).split('').sort((a, b) => b - a).join(''), 10);
}

console.log(soLonNhatTuChuSo(4213));
console.log(soLonNhatTuChuSo(-3087));
console.log(soLonNhatTuChuSo(9001));  
