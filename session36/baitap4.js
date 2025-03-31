function color() {
    let loadColor = document.body.style.backgroundColor;
    document.body.style.background = loadColor == 'black' ? 'white' : 'black';

}
color();