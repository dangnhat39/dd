let arr = [];
function input(arr) {
    let n = +prompt("mời bạn nhập số phần tử từ 10-20")
    if (n < 10 || n > 20 || !Number.isInteger(n)) {
        alert("lỗi cú pháp mời bạn nhập lại")
        return false;
    } else {
        for (let i = 0; i < n; i++) {
            do {
                arr[i] = +prompt(`mời bạn nhập phần tử thứ ${i + 1}`);
                if (Number.isInteger(arr[i])) {
                    break;
                } else {
                    alert("lỗi cú pháp mời bạn nhập lại ")
                }
            } while (1);
        }
    }
    return arr;
}

function isprime(number) {
    if (!Number.isFinite(number)) {
        return -1;
    }
    if (number === 2) {
        return 1;
    }
    if (number % 2 == 0 || number < 2) {
        return 0;
    }
    let count = 3;
    while (count < number) {
        if (number % count === 0) {
            return 0;
        }
        count += 2;
    }
    return 1;
}

function filter(arr) {
    arr = input(arr);
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            console.log("Mảng không có phần tử nào");
            return;
        }
        let result = arr.filter((item) => isprime(item) && item % 2 !== 0);
        result ? console.log(result) : console.log("mảng không có số nguyên tố")
    } else {
        console.log("dữ liệu không hợp lệ")
    }
}
filter(arr);
