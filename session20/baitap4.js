let string = prompt("Nhập vào một chuỗi bất kỳ:");
let search = prompt("Nhập vào ký tự cần tìm kiếm:");

let found = false;

for (let i = 0; i < string.length; i++) {
    if (string[i] === search) {
        found = true;
        break;
    }
}

if (found) {
    document.write(`Ký tự '${search}' có tồn tại trong chuỗi.`);
} else {
    document.write(`Ký tự '${search}' không tồn tại trong chuỗi.`);
}