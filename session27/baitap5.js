function chiaMang(mang, n) {  
   
    if (!Array.isArray(mang) || typeof n !== 'number' || n <= 0) {  
        return "dữ liệu không hợp lệ";  
    }  
    
    
    return Array.from({ length: Math.ceil(mang.length / n) }, (v, i) =>   
        mang.slice(i * n, i * n + n)  
    );  
}  


console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 3)); 
console.log(chiaMang([1, 2, 3, 4, 5, 6, 7, 8], 2)); 
console.log(chiaMang("abc", 3)); 