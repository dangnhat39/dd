function sapXepChanTang(mang) {
    if (!Array.isArray(mang) || mang.some(num => typeof num !== 'number')) {
        return 'dữ liệu không hợp lệ';
    }

    const allEven = mang.every(num => num % 2 === 0);
    const allOdd = mang.every(num => num % 2 !== 0);

    if (allEven) {
        return 'TRUE';
    } else if (allOdd) {
        return 'FALSE';
    } else {
        return 'FALSE';
    }
}

console.log(sapXepChanTang([2, 4, 6, 8]));
console.log(sapXepChanTang([3, 6, 9, 12, 14]));
console.log(sapXepChanTang('abc'));
console.log(sapXepChanTang([1, 3, 5]));
console.log(sapXepChanTang([2, 4, 5]));             