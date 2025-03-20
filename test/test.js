
function validateEmail() {
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");
    if (email.includes("@")) {
        message.innerText = "Email hợp lệ";
        message.style.color = "green"
    } else {
        message.style.color = "red";
        message.textContent = "Email không hợp 
    }
}