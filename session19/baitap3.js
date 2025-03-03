let select = prompt("Bạn ấn phím (1) để đổi từ USD sang VNĐ ấn phím (2)để từ VNĐ sang USD");
if (select == 1) {
    let usd = prompt("Nhập số tiền đô bạn muốn đổi");
    let vnd = usd * 25000; 
    document.write("Số tiền của bạn là " + vnd + " VNĐ");
} else if (select == 2) {
    let vnd = prompt("Nhập số tiền VN mà bạn muốn đổi");
    let usd = vnd / 25000;
    document.write("Số tiền đô của bạn là" + usd + " đô");
}
