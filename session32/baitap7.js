function openModal(imageSrc) {
    document.getElementById('largeImage').src = imageSrc;
    document.getElementById('overlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
}  