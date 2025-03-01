let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let operation = prompt("Nhập phép tính (+, -, *, /): ");
let result;
switch (operation) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        if (b !== 0) {
            result = a / b;
        } else {
            alert("Không thể chia cho 0.");
            result = null; 
        }
        break;
    default:
        alert("Phép toán không hợp lệ.");
        result = null; 
}


if (result !== null) {
    alert("Kết quả: " + result);
}  
