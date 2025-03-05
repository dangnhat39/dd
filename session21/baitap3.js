
const correctPassword = "123456";  


const userInput = prompt("Nhập mật khẩu của bạn:");


if (userInput === correctPassword) {
    console.log("Mật khẩu đúng!");
    alert("Chào mừng bạn đã đăng nhập thành công!");
} else {
    console.log("Mật khẩu không đúng!");
    alert("Mật khẩu của bạn không chính xác. Vui lòng thử lại.");
}  