let a = parseFloat(prompt("Nhập độ dài cạnh a: "));
let b = parseFloat(prompt("Nhập độ dài cạnh b: "));
let c = parseFloat(prompt("Nhập độ dài cạnh c: "));

if (a + b > c && a + c > b && b + c > a) {
    let type = "";

    if (a === b && b === c) {
        type = "Tam giác đều";
    } else if (a === b || b === c || a === c) {
        type = "Tam giác cân";
    } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
        type = "Tam giác vuông";
    } else {
        type = "Tam giác thường";
    }

    alert("Tam giác hợp lệ. Loại tam giác: " + type);
} else {
    alert("Ba cạnh không tạo thành tam giác hợp lệ.");
}  