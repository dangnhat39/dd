let input = prompt("Nhập vào dãy số bất kỳ, cách nhau bởi dấu phẩy:");
let numberArray = input.split(',').map(Number);
let maxNumber = numberArray[0];

for (let i = 1; i < numberArray.length; i++) {
    if (numberArray[i] > maxNumber) {
        maxNumber = numberArray[i];
    }
}

console.log("Phần tử có giá trị lớn nhất trong mảng là: " + maxNumber);
