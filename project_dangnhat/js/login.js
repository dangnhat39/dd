
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn form gửi đi mặc định

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // --- Validate dữ liệu không được để trống ---
        if (email === '') {
            alert('Email không được để trống');
            return;
        }

        if (password === '') {
            alert('Mật khẩu không được để trống');
            return;
        }

        // --- Lấy dữ liệu tài khoản từ localStorage ---
        const registeredAccounts = JSON.parse(localStorage.getItem('registeredAccounts')) || [];

        // --- Kiểm tra đăng nhập ---
        const matchedUser = registeredAccounts.find(user =>
            user.email === email && user.password === password
        );

        if (!matchedUser) {
            alert('Cảnh báo lỗi: Email hoặc Mật khẩu không đúng');
            return;
        }

        // --- Thành công: chuyển hướng Dashboard ---
        alert('Đăng nhập thành công!');
        window.location.href = '/project_dangnhat/pages/dashboard.html'; // chỉnh lại đường dẫn nếu cần
    });
});
