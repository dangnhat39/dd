let test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let test2 = "abc";
let test3 = [];
function filterArray(arr) {
    if(Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Mảng không có phần tử nào");
            return;  
        }
        let result = arr.filter((num) => {
            function isPrime(num) {
                if (num <= 1) return false;
                for (let i = 2; i < num; i++) {
                    if (num % i === 0) return false;
                }
                return true;
            }
            return isPrime(num);
        });
        console.log("kết quả là",result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filterArray(test1);
filterArray(test2);
filterArray(test3);