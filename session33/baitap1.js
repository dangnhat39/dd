function togglePassword() {
    const passwordField = document.getElementById('password');
    const passwordDisplay = document.querySelector('.password-display');


    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordDisplay.textContent = passwordField.value;
        passwordDisplay.style.display = 'block';
    } else {
        passwordField.type = "password";
        passwordDisplay.style.display = 'none';
    }
}  