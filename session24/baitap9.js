let mang = [];
let choice;
let n;

do {
    console.log(`
================== MENU ===================
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào
4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.
5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”
6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.
7. Thoát chương trình
===========================================
`);
    choice = parseInt(prompt("Lựa chọn của bạn: "));
    switch (choice) {
        case 1:
            let inputString = prompt("Nhập chuỗi ký tự: ");
            mang.push(inputString);
            break;
        case 2:
            console.log("Chuỗi ký tự: ", mang.join(", "));
            break;
        case 3:
            let str = mang.join("");
            let letters = 0;
            let digits = 0;
            for (let i = 0; i < str.length; i++) {
                if (/[a-zA-Z]/.test(str[i])) {
                    letters++;
                } else if (/[0-9]/.test(str[i])) {
                    digits++;
                }
            }
            console.log(`Số lượng ký tự là chữ: ${letters}, số lượng ký tự là số: ${digits}`);
            break;
        case 4:
            let originalString = mang.join("");
            let convertedString = "";
            for (let i = 0; i < originalString.length; i++) {
                let char = originalString[i];
                if (char === char.toUpperCase()) {
                    convertedString += char.toLowerCase();
                } else {
                    convertedString += char.toUpperCase();
                }
            }
            console.log("Chuỗi sau khi chuyển đổi: ", convertedString);
            break;
        case 5:
            let secondString = prompt("Nhập chuỗi thứ 2: ");
            let mixedString = "";
            let maxLength = Math.max(mang.join("").length, secondString.length);
            for (let i = 0; i < maxLength; i++) {
                if (i < mang.join("").length) mixedString += mang.join("")[i];
                if (i < secondString.length) mixedString += secondString[i];
            }
            console.log("Chuỗi sau khi trộn: ", mixedString);
            break;
        case 6:
            let words = mang.join(" ").split(' ');
            for (let i = 0; i < words.length - 1; i++) {
                for (let j = i + 1; j < words.length; j++) {
                    if (words[i].length > words[j].length) {
                        let temp = words[i];
                        words[i] = words[j];
                        words[j] = temp;
                    }
                }
            }
            console.log("Các từ sau khi sắp xếp: ", words.join(", "));
            break;
        case 7:
            console.log("Thoát chương trình");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại.");
    }
} while (choice !== 7);