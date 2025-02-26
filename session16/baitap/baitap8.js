
let num1 = prompt("số thứ nhất là ");
let num2 = prompt("số thứ 2 là :");
let num3 = prompt("số thứ 3 là :");
if (num1=num2 && num2 ==num3 && num1==num3) {
    document.write("nhập lại đê");
} else {
    let maxNum = Math.max(num1, num2, num3);
    document.write("số lớn nhất là ", + maxNum);
}