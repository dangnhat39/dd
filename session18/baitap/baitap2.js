let math = Number(prompt("Mời bạn nhập điểm toán"));
let literature = Number(prompt("Mời bạn nhập điểm văn"));
let eng = Number(prompt("Mời bạn nhập điểm tiếng Anh"));
let tb = (math + eng + literature) / 3;
if (tb >= 8) {
    document.write("bạn được học sinh giỏi");

} else if (tb > 6.5 && tb < 7.9) {
    document.write("bạn được học sinh khá");
} else if (tb > 5.0 && tb < 6.4) {
    document.write("Bạn được học sinh Trung bình");
} else {
    document.write("Bạn được học sinh yếu");
}