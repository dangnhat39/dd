let a = prompt("Hãy Nhập tên người dùng vào đây");
if (a === "ADMIN") {
    let password = prompt("Hãy nhập mật khẩu");
    if (password === "TheMaster") {
        document.write("Welcome");
    } else if (password === null) {
        document.write("Cancelled");
    } else {
        document.write("Wrong password");
    }
} else if (a === null) {
    document.write("Cancelled");
} else {
    document.write("I Don’t know you");
}
