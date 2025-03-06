let constnumber = +prompt("Nhập số cần tìm: ");

if (Number.isInteger(constnumber)) {
    console.log("số đó là",constnumber);
}
const reversedNumber = constnumber.toString().split("").reverse().join("");
console.log("Số đảo ngược là", reversedNumber);