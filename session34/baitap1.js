let users = JSON.parse(localStorage.getItem("users")) || [];
function register() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (email.includes("@") && (email.endsWith(".vn") || email.endsWith(".com"))) {
        console.log("đúng định dạng email")
    } else {
        alert("sai rồi")
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu không đúng");
        console.log("sai mật khẩu");
    }
    if (users.some) (user => user.email === email))) {
        alert("email không đúng");
        return;
    }
    if (users.some) (users => users.email === email)) {
        alert("email không đúng");
        return;
    }
    let user = {
        id: Date.now(),
        email: email,
        password: password
        
    };
    user.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location = "./login.html"
}