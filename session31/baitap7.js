document.querySelector('.addBtn').addEventListener('click', function () {
    const inputValue = document.getElementById('myInput').value;
    if (inputValue === '') {
        alert('Vui lòng nhập một công việc!');
        return;
    }
    const li = document.createElement('li');
    li.textContent = inputValue;
    const span = document.createElement('span');
    span.textContent = '\u00D7'; 
    span.className = 'close';
    li.appendChild(span);
    span.addEventListener('click', function () {
        li.remove();
    });
    document.getElementById('myUL').appendChild(li);
    document.getElementById('myInput').value = '';
});
document.getElementById('myUL').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked'); 
    }
});
