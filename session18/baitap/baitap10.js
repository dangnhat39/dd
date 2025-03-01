let number = parseInt(prompt("Nhập một số nguyên từ 0 đến 999: "));

if (number < 0 || number > 999 || isNaN(number)) {
    alert("Giá trị nhập vào không hợp lệ.");
} else {
    let numbersInWords = [
        "không", "một", "hai", "ba", "bốn", "năm", "sáu",
        "bảy", "tám", "chín", "mười", "mười một", "mười hai",
        "mười ba", "mười bốn", "mười lăm", "mười sáu",
        "mười bảy", "mười tám", "mười chín", "hai mươi",
        "hai mốt", "hai hai", "hai ba", "hai bốn",
        "hai năm", "hai sáu", "hai bảy", "hai tám",
        "hai chín", "ba mươi", "ba mốt", "ba hai",
        "ba ba", "ba bốn", "ba năm", "ba sáu",
        "ba bảy", "ba tám", "ba chín", "bốn mươi",
        "bốn mốt", "bốn hai", "bốn ba", "bốn bốn",
        "bốn năm", "bốn sáu", "bốn bảy", "bốn tám",
        "bốn chín", "năm mươi", "năm mốt", "năm hai",
        "năm ba", "năm bốn", "năm năm", "năm sáu",
        "năm bảy", "năm tám", "năm chín", "sáu mươi",
        "sáu mốt", "sáu hai", "sáu ba", "sáu bốn",
        "sáu năm", "sáu sáu", "sáu bảy", "sáu tám",
        "sáu chín", "bảy mươi", "bảy mốt", "bảy hai",
        "bảy ba", "bảy bốn", "bảy năm", "bảy sáu",
        "bảy bảy", "bảy tám", "bảy chín", "tám mươi",
        "tám mốt", "tám hai", "tám ba", "tám bốn",
        "tám năm", "tám sáu", "tám bảy", "tám tám",
        "tám chín", "chín mươi", "chín mốt", "chín hai",
        "chín ba", "chín bốn", "chín năm", "chín sáu",
        "chín bảy", "chín tám", "chín chín"
    ];

    alert("Số bạn nhập là: " + numbersInWords[number]);
}  