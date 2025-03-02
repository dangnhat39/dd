let username = prompt("Nhập tên người dùng:");

if (username === null || username === "") {
    alert("Cancelled");
} else if (username === "ADMIN") {
    let password = prompt("Nhập mật khẩu:");

    if (password === null) {
        alert("Cancelled");
    } else if (password === "TheMaster") {
        alert("Welcome");
    } else {
        alert("Wrong password");
    }
} else {
    alert("I Don't know you");
}  