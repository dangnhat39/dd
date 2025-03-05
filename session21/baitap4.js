let a, b, c;
while (true) {
    a = parseFloat(prompt("Nhập vào số a (khác 0):"));
    if (a !== 0) {
        break; 
    }
    alert("Giá trị a phải khác 0. Vui lòng nhập lại.");
}
b = parseFloat(prompt("Nhập vào số b:"));
c = parseFloat(prompt("Nhập vào số c:"));
const delta = b * b - 4 * a * c;    
if (delta > 0) {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
    const x = -b / (2 * a);
    console.log(`Phương trình có nghiệm kép: x = ${x}`);
} else {
    console.log("Phương trình vô nghiệm.");
}  