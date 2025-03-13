function main() {
    let choice;
    let firstNum, secondNum;
    let result;
    do {
        choice = menu(choice);
        switch (choice) {
            case 1:
                [firstNum, secondNum] = inputNum();
                result = addition(firstNum, secondNum);
                alert(`${result}`)
                break;
            case 2:
                [firstNum, secondNum] = inputNum();

                result = subtraction(firstNum, secondNum);
                alert(`${result}`)
                break;
            case 3:
                [firstNum, secondNum] = inputNum();
                result = multiplication(firstNum, secondNum);
                alert(`${result}`)
                break;
            case 4:
                [firstNum, secondNum] = inputNum();
                result = division(firstNum, secondNum);
                alert(`${result}`)
                break;
            case 5:
                alert("bạn đã thoát chương trình")
                break;

            default:
                alert("lỗi cú pháp")
                break;
        }
    } while (choice !== 5);
}
function menu(choice) {
    choice = +prompt(`========MENU=======
            1.Cộng hai số.
            2.Trừ hai số.
            3.Nhân hai số.
            4.Chia hai số.
            5.Thoát.
====================
        Mời bạn nhập lựa chọn:`)
    return choice;
}
let addition = (a, b) => a + b;
let subtraction = (a, b) => a - b;
let multiplication = (a, b) => a * b;
let division = (a, b) => Math.floor(a / b);
function inputNum() {
    let a = +prompt("mời bạn nhập số thứ nhất")
    let b = +prompt("mời bạn nhập số thứ hai")
    return [a, b];
}
main();