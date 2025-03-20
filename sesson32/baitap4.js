function validateEmail() {
    let email = document.getElementById("emailInput").value;
    let message = document.getElementById("message");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) {
        message.innerText = "Email hợp lệ";
        message.style.color = "green";
    } else {
        message.innerText = "Email không hợp lệ";
        message.style.color = "red";
    }
}