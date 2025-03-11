/* 
    Xây dựng hàm nhận vào một tham số là một mảng cho trước. 
    tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó. 
*/

function findMin(arr) {
    // kiểm tra xem arr có phải là mảng hay không?
    if (Array.isArray(arr) == false) {
        console.log("dữ liệu không hợp lệ");
        return;
    }
    if (arr.length == 0) {
        console.log("mảng không chứa phần tử");
        return;
    }
    let minElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (minElement > arr[i]) {
            minElement = arr[i];
        }
    }
    console.log(111111, minElement);
    return minElement;



}
// findMin([]);
// findMin("fdfdfdf");
findMin([4, 4, 6, 7, 1, 2, 4]);

