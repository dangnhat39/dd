document.getElementById('checkButton').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    const characterCount = text.length;
    document.getElementById('characterCount').textContent = characterCount + ' ký tự';
});  