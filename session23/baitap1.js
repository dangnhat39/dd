let array = [];  
for (let i = 0; i < 10; i++) {  
    array[i] = parseInt(prompt("Nhập số nguyên thứ " + (i + 1) + ":"));  
}  
let count = 0;  
for (let i = 0; i < array.length; i++) {  
    if (array[i] >= 10) {  
        count++;  
    }  
}  


console.log("Số lượng số nguyên lớn hơn hoặc bằng 10 là: " + count);  
