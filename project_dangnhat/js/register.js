document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const fullNameInput = document.getElementById('full-name');
    const firstNameInput = document.getElementById('first-name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const agreeCheckbox = document.getElementById('agree');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    form.addEventListener('submit', function (event) {
        let isValid = true;
        const registeredEmails = JSON.parse(localStorage.getItem('registeredEmails')) || [];
        if (registeredEmails.includes(emailInput.value.trim())) {
            isValid = false;
        }

        if (fullNameInput.value.trim() === '') {
            isValid = false;
        }

        if (firstNameInput.value.trim() === '') {
            isValid = false;
        }

        if (emailInput.value.trim() === '') {
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
        }

        if (passwordInput.value === '') {
            isValid = false;
            passwordError.textContent = 'Mật khẩu không được để trống.';
        } else {
            passwordError.textContent = '';
        }

        if (passwordInput.value.length < 8) {
            isValid = false;
            passwordError.textContent = 'Mật khẩu phải có ít nhất 8 ký tự.';
        }

        if (confirmPasswordInput.value === '') {
            isValid = false;
            confirmPasswordError.textContent = 'Xác nhận mật khẩu không được để trống.';
        } else {
            confirmPasswordError.textContent = '';
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            isValid = false;
            confirmPasswordError.textContent = 'Mật khẩu không trùng khớp.';
        }

        if (!agreeCheckbox.checked) {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

            registeredAccounts.push({
                email: emailInput.value.trim(),
                password: passwordInput.value
            });

            localStorage.setItem('registeredAccounts', JSON.stringify(registeredAccounts));

            window.location.href = '/project_dangnhat/pages/login.html?registration=success';
        }
    });
});