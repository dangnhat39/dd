let a = parseFloat(prompt("Nhập a:"));
let b = parseFloat(prompt("Nhập b:"));
let c = parseFloat(prompt("Nhập c:"));
let delta = b * b - 4 * a * c;
if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Nghiệm của phương trình là: x1 = ${x1}, x2 = ${x2}`);
}