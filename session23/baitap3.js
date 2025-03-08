let arr = [];
let length = Number(prompt("moi bạn nhập vào số phần tử trong mảng"));
let count = 0;
if (length > 0) {
    for (let i = 1; i <= length; i++) {
        do {
            let number = prompt("moi bạn nhập vào giá trị vị trí thứ " + i);
            if (Number.isInteger(Number(number))) {
                arr.push(number);
                break;
            } else {
                alert("moi bạn nhập lại giá trị đúng yêu cầu tại vị trí " + i);
            }
        } while (1);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    arr.length === 0 ? console.log("mảng không có phần tử") : console.log(count);

} else {
    console.log("số lượng phần tử không hợp lệ")
}