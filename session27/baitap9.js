function sapXepChanTang(mang) {
    if (!Array.isArray(mang) || mang.some(num => typeof num !== 'number')) {
        return 'dữ liệu không hợp lệ';
    }

    const soChan = mang.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let index = 0;

    return mang.map(num => (num % 2 === 0 ? soChan[index++] : num));
}

console.log(sapXepChanTang([5, 8, 6, 3, 4, 2, 7]));   // [5, 2, 4, 3, 6, 8, 7]  
console.log(sapXepChanTang([5, 9, 6, 4, 1, 8, 3]));   // [5, 9, 4, 6, 1, 8, 3]  
console.log(sapXepChanTang('abc'));                     // 'dữ liệu không hợp lệ'  