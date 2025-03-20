document.querySelector('.addBtn').addEventListener('click', function () {
    const inputValue = document.getElementById('myInput').value;
    if (inputValue === '') {
        alert('Vui lòng nhập một công việc!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = inputValue;
    
    document.getElementById('myUL').appendChild(li);
    document.getElementById('myInput').value = '';
});
document.getElementById('myUL').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    }
});
