let arr = [1, 4, 7, 8, 3];
let chan = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        chan += arr[i];
    }
}
alert("Tổng các số chẵn là: " + chan);
let le = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        le += arr[i];
    }
}
alert("Tổng các số lẻ là: " + le);