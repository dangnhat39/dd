let test1 = ["John.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let test2 = "abc";
let test3 = [];
function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length == 0) {
            console.log("Manng không có phần tử nào");
            return;
        }
        let result = arr.filter((email) => {
            return email.includes("@") && email.includes(".");
        });
        if (result.length > 0) {
            console.log("kết quả là",result);
        }
        else {
            console.log("Không có email hợp lệ");
        }
    }else {
        console.log("Dữ liệu không hợp lệ");
    }
}
filter(test1);  
filter(test2);
filter(test3);