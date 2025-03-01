let hours = parseInt(prompt("Nhập giờ (0-23): "));
let minutes = parseInt(prompt("Nhập phút (0-59): "));
let seconds = parseInt(prompt("Nhập giây (0-59): "));

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    alert("Giá trị nhập vào không hợp lệ. Vui lòng kiểm tra lại.");
} else {
    let period = hours >= 12 ? "PM" : "AM";
    let hours12 = hours % 12;
    hours12 = hours12 === 0 ? 12 : hours12;

    alert(`Thời gian trong định dạng 12 giờ: ${hours12}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${period}`);
}  