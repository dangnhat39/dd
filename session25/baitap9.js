let password = prompt("mời bạn nhập mật khẩu")
function isStrongPassword(password) {
    if (password.length > 8) return 0;

    let isUper = 0, isLower = 0, isNumber = 0;
    password.split('').forEach(item => {
        if (/[A-Z]/.test(item)) isUper = 1;
        if (/[a-z]/.test(item)) isLower = 1;
        if (/[0-9]/.test(item)) isNumber = 1;
        if (isUper && isLower && isNumber === 1) return 1;
    });

    return isUper && isLower && isNumber;
}
let testPassword = isStrongPassword(password);
console.log(testPassword);

testPassword ? console.log("true") : console.log("false");
