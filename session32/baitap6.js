const textElement = document.querySelector('.text');
let fontSize = 16;

document.getElementById('increase').addEventListener('click', () => {
    fontSize += 2;
    textElement.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease').addEventListener('click', () => {
    fontSize = Math.max(10, fontSize - 2);
    textElement.style.fontSize = fontSize + 'px';
});  