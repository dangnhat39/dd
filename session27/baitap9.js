function sapXepChanTang(mang) {
    const soChan = mang.filter(num => num % 2 === 0).sort((a, b) => a - b);
    let index = 0;

    return mang.map(num => (num % 2 === 0 ? soChan[index++] : num));
}

console.log(sapXepChanTang([5, 3, 2, 8, 1, 4]));  // [5, 3, 2, 4, 1, 8]
console.log(sapXepChanTang([2, 3, 4, 6, 7, 8]));  // [2, 3, 4, 6, 7, 8]
console.log(sapXepChanTang([9, 7, 5, 3]));        // [9, 7, 5, 3]
console.log(sapXepChanTang([10, 20, 30, 40]));    // [10, 20, 30, 40]
