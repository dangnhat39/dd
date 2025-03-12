let users = ["nhathat@gmail.com"];
let email = prompt("mời bạn nhập email")
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/;
    return regex.test(email);
}
function isEmail(email, arr) {
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ");
        return;
    }
    if (users.includes(email)) {
        console.log("tài khoản đã tồn tại");
    } else {
        arr.push(email);
        console.log("tài khoản đc đăng kí thành công");
    }
}
isEmail(email, users);