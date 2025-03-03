const char = prompt("xin moi nhap ki tu");
if (((char.indexOf('0') && char.indexOf('1') && char.indexOf('2') && char.indexOf("3") && char.indexOf('4') && char.indexOf('5') && char.indexOf('6') && char.indexOf('7') && char.indexOf('8') && char.indexOf('9')) == -1)) {
    alert(`${char} la chu cai `);
} else {
    alert(`ki tu ${char} khong phai chu cai`);
}
console.log(char.indexOf())