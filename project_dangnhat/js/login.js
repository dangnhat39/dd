document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        let isValid = true;

        emailError.textContent = '';
        passwordError.textContent = '';
        if (email === '') {
            isValid = false;
        }
        if (password === '') {
            passwordError.textContent = 'Email và mật khẩu không đúng';
            isValid = false;
        }
        if (!isValid) return;
        const registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];
        const matchedUser = registeredAccounts.find(user =>
            user.email === email && user.password === password
        );
        if (!matchedUser) {
            passwordError.textContent = 'Cảnh báo lỗi: Email hoặc Mật khẩu không đúng';
            return;
        }
        window.location.href = '/project_dangnhat/pages/dashboard.html';
    });
});
