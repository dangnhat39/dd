let dtb = prompt("Nhập điểm trung bình của bạn: ");
let xepLoai = dtb>=8?"Giởi":(dtb>=6.5?"Khá":(dtb>=5?"Trung bình":(dtb>=3.5?"Yếu":"Kém")));
console.log(xepLoai);
