let test1 = ["Apple", "Banana", "Orange"];
let test2 = "abc";
let test3 = [];
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Manng không có phần tử nào");
            return;
        }
        let result = arr.filter(function length(a, b, c) {
            return a.length > 5;
        })
        console.log("kết quả là",result);
    } else {
        console.log("Dữ liệu không hợp lệ");
    }

}
filter(test1);
filter(test2);
filter(test3);