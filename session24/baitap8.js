let mang = [];
let choice;
let n;

do {
    console.log(`
================== MENU ===================
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình
===========================================
`);
    choice = parseInt(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            let input = prompt("Nhập chuỗi ký tự: ");
            mang = input.split(' ');
            break;
        case 2:
            console.log("Chuỗi ký tự: " + mang.join(' '));
            break;
        case 3:
            let wordCount = {};
            for (let i = 0; i < mang.length; i++) {
                let word = mang[i];
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
            console.log("Các từ con trùng lặp và số lần xuất hiện: ", wordCount);
            break;
        case 4:
            let maxLength = 0;
            let minLength = Infinity;
            for (let i = 0; i < mang.length; i++) {
                let wordLength = mang[i].length;
                if (wordLength > maxLength) maxLength = wordLength;
                if (wordLength < minLength) minLength = wordLength;
            }
            let longestWords = [];
            let shortestWords = [];
            for (let i = 0; i < mang.length; i++) {
                if (mang[i].length === maxLength) longestWords.push(mang[i]);
                if (mang[i].length === minLength) shortestWords.push(mang[i]);
            }
            console.log("Từ có độ dài lớn nhất: ", longestWords);
            console.log("Từ có độ dài nhỏ nhất: ", shortestWords);
            break;
        case 5:
            let charCount = {};
            let joinedString = mang.join('');
            for (let i = 0; i < joinedString.length; i++) {
                let char = joinedString[i];
                charCount[char] = (charCount[char] || 0) + 1;
            }
            let maxCharCount = 0;
            for (let char in charCount) {
                if (charCount[char] > maxCharCount) maxCharCount = charCount[char];
            }
            let mostFrequentChars = [];
            for (let char in charCount) {
                if (charCount[char] === maxCharCount) mostFrequentChars.push(char);
            }
            console.log("Ký tự xuất hiện nhiều nhất: ", mostFrequentChars, "với số lần: ", maxCharCount);
            break;
        case 6:
            let snakeCaseString = '';
            for (let i = 0; i < mang.length; i++) {
                snakeCaseString += mang[i].toLowerCase();
                if (i < mang.length - 1) snakeCaseString += '_';
            }
            console.log("Chuỗi dạng snake_case: ", snakeCaseString);
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);