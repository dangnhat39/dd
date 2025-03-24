document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Kiểm tra email không bỏ trống và trùng khớp  
    if (email && password) {
        // Giả định, dữ liệu đăng ký trong bài 1  
        const registeredUsers = [
            { email: 'user@example.com', password: '123456' }
        ];

        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Đăng nhập thành công!');
            // Chuyển trang chủ hoặc thực hiện chuyển hướng tới nơi khác  
            window.location.href = 'homepage.html'; // Đổi link trang chủ theo yêu cầu  
        } else {
            alert('Email hoặc mật khẩu không đúng!');
        }
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});  