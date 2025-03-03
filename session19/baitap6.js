let a = parseFloat(prompt("Nhập hệ số a: "));
let b = parseFloat(prompt("Nhập hệ số b: "));
let c = parseFloat(prompt("Nhập hệ số c: "));

if (a === 0) {
    if (b === 0) {
        alert("Phương trình vô nghiệm hoặc có vô số nghiệm.");
    } else {
        let solution = -c / b;
        alert("Phương trình có nghiệm duy nhất: x = " + solution);
    }
} else {
    let delta = b * b - 4 * a * c;

    if (delta > 0) {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("Phương trình có nghiệm kép: x = " + x);
    } else {
        alert("Phương trình vô nghiệm.");
    }
}  