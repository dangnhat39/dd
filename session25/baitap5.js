const arr = [7, 4, 3, 6, 9, 5, 3, 5, 7];



let min = function minAraay(arr) {
    if (arr.length === 0) {
        console.log("mảng không chứa phần tử")
        return;
    }
    if (!arr.every(Number.isFinite)) {
        console.log("giá trị không hợp lệ")
        return;
    }
    let evenArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    return evenArr;

}
console.log(`giá trị nhỏ nhất là ${min(arr)}`)


