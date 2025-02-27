
let a = 1; 
let b = -3; 
let c = 2; 
let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    console.log(`The solutions are: x1 = ${x1}, x2 = ${x2}`);
} else if (discriminant === 0) {
    let x = -b / (2 * a);
    console.log(`The solution is: x = ${x}`);
} else {
    console.log('There are no real solutions');
}