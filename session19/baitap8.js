let month = Number(prompt("Nhap 1 thang bat ki trong nam"));
let season;
switch (month) {
    case 1:
    case 2:
    case 3:
        season = "Mua Xuan";
        break;
    case 4:
    case 5:
    case 6:
        season = "Mua Ha";
        break;
    case 7:
    case 8:
    case 9:
        season = "Mua Thu";
        break;
    case 10:
    case 11:
    case 12:
        season = "Mua Dong";
        break;
    default:
        season = "Thang khong hop le";
}
document.write("Mua: " + season);