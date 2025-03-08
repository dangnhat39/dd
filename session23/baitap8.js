let arr = [];
let length = Number(prompt("Mời bạn nhập vào số phần tử trong mảng"));

if (length > 0) {
    for (let i = 1; i <= length; i++) {
        do {
            let number = prompt("Mời bạn nhập vào giá trị vị trí thứ " + i);
            if (Number.isInteger(Number(number))) {
                arr.push(Number(number));
                break;
            } else {
                alert("Mời bạn nhập lại giá trị đúng yêu cầu tại vị trí " + i);
            }
        } while (true);
    }

    let n = arr.length;
    let result = "Là dãy số Fibonacci";

    if (n < 1) {
        result = "Không phải dãy số Fibonacci";
    } else if (n === 1) {
        result = arr[0] === 0 ? "Là dãy số Fibonacci" : "Không phải dãy Fibonacci";
    } else if (n === 2) {
        result = (arr[0] === 0 && arr[1] === 1) || (arr[0] === 1 && arr[1] === 1)
            ? "Là dãy số Fibonacci" : "Không phải dãy Fibonacci";
    } else {
        for (let i = 2; i < n; i++) {
            if (arr[i] !== arr[i - 1] + arr[i - 2]) {
                result = "Không phải dãy số Fibonacci";
                break;
            }
        }
    }
    console.log(result);
} else {
    console.log("Số lượng phần tử không hợp lệ");
}