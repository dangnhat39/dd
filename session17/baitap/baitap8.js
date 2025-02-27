const date1 = '2025-02-26';
const date2 = '2025-02-28';
const d1 = new Date(date1);
const d2 = new Date(date2);
const timeDifference = Math.abs(d2 - d1);
const dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
console.log(`Độ lệch là ${dayDifference} ngày`);
