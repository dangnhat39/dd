
// Pattern a
console.log("Pattern a:");
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

// Pattern b
console.log("Pattern b:");
for (let i = 5; i >= 1; i--) {
    console.log('*'.repeat(i));
}

// Pattern c
console.log("Pattern c:");
for (let i = 1; i <= 5; i++) {
    console.log(' '.repeat(5 - i) + '*'.repeat(i));
}

// Pattern d
console.log("Pattern d:");
for (let i = 5; i >= 1; i--) {
    console.log(' '.repeat(5 - i) + '*'.repeat(i));
}

// Drawing directly on the browser
document.write("<pre>");

// Pattern a
document.write("Pattern a:<br>");
for (let i = 1; i <= 5; i++) {
    document.write('*'.repeat(i) + "<br>");
}

// Pattern b
document.write("Pattern b:<br>");
for (let i = 5; i >= 1; i--) {
    document.write('*'.repeat(i) + "<br>");
}

// Pattern c
document.write("Pattern c:<br>");
for (let i = 1; i <= 5; i++) {
    document.write(' '.repeat(5 - i) + '*'.repeat(i) + "<br>");
}

// Pattern d
document.write("Pattern d:<br>");
for (let i = 5; i >= 1; i--) {
    document.write(' '.repeat(5 - i) + '*'.repeat(i) + "<br>");
}

document.write("</pre>");