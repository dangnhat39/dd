
// Khởi tạo mảng số nguyên gồm 10 phần tử khác nhau
let array = [];
while (array.length < 10) {
    const randomNumber = Math.floor(Math.random() * 100); // Tạo số ngẫu nhiên từ 0 đến 99
    if (!array.includes(randomNumber)) { // Kiểm tra xem số đã có trong mảng chưa
        array.push(randomNumber); // Nếu chưa có thì thêm vào mảng
    }
}

// Tìm phần tử lớn nhất và vị trí của nó
let maxValue = array[0];
let maxIndex = 0;

for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
        maxValue = array[i];
        maxIndex = i;
    }
}

// Hiển thị kết quả
console.log("Mảng số nguyên là:", array);
console.log("Giá trị lớn nhất là:", maxValue, "tại vị trí:", maxIndex);


