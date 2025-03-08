const arr = [0, 1, false, 2, '', 3, null, undefined, 4, NaN];

const filteredArr = arr.filter(Boolean);

console.log(filteredArr); // Kết quả: [1, 2, 3, 4]