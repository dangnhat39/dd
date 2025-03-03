
let input = prompt("Nhập vào một ký tự:");

if (input) { 
    if (input.length === 1) {
        const charCode = input.charCodeAt(0);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            console.log(`ký tự ${input} là chữ cái`);
        } else {
            console.log(`không phải chữ cái`);
        }
    } else {
        console.log(`không phải chữ cái`);
    }
} else {
    console.log("Bạn chưa nhập ký tự nào.");
}  