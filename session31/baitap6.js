document.getElementById('loginButton').addEventListener('click', function () {
    const correctUsername = 'huanrose@gmail.com';
    const correctPassword = '123456';

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;

    if (inputUsername === correctUsername && inputPassword === correctPassword) {
        console.log('Đăng nhập thành công');
    } else {
        console.log('Đăng nhập thất bại');
    }
});