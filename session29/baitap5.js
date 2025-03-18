const prompt = require('prompt-sync')();
const users = [];

function isValidEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|vn)$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/;
    return passwordRegex.test(password);
}

function registerUser() {
    const name = prompt("Nhập tên: ");
    let email;
    while (true) {
        email = prompt("Nhập email: ");
        if (isValidEmail(email)) {
            break;
        } else {
            console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'. Vui lòng thử lại.");
        }
    }

    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ. Email phải chứa '@' và kết thúc bằng '.com' hoặc '.vn'.");
        return;
    }

    const password = prompt("Nhập mật khẩu (tối thiểu 6 ký tự, có chữ hoa và ký tự đặc biệt): ");

    if (!isValidPassword(password)) {
        console.log("Mật khẩu không hợp lệ. Mật khẩu phải từ 6 ký tự trở lên, bao gồm ký tự đặc biệt và ký tự viết hoa.");
        return;
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        console.log("Email đã tồn tại. Vui lòng sử dụng email khác.");
        return;
    }

    users.push({ name, email, password });
    console.log("Đăng ký thành công!");
}

function loginUser() {
    const email = prompt("Nhập email: ");
    const password = prompt("Nhập mật khẩu: ");

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        console.log(`Đăng nhập thành công! Chào mừng ${user.name}.`);
    } else {
        console.log("Email hoặc mật khẩu không chính xác.");
    }
}

function main() {
    while (true) {
        console.log("\n--- Ứng dụng Đăng ký và Đăng nhập ---");
        console.log("1. Đăng ký người dùng mới");
        console.log("2. Đăng nhập");
        console.log("3. Thoát");
        const choice = prompt("Chọn chức năng: ");

        switch (choice) {
            case '1':
                registerUser();
                break;
            case '2':
                loginUser();
                break;
            case '3':
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    }
}

main();  