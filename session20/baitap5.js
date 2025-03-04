let a = parseInt(prompt("Nhập giá trị a: "));
let b = parseInt(prompt("Nhập giá trị b: "));


if (Number.isInteger(a) && Number.isInteger(b)) {
    let sum = 1;
    for (let i = 0; i < b; i++) {
        sum *= a;
    }

    document.write(`${a} lũy thừa ${b} là: ${sum}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}