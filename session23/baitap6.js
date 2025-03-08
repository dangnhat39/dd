let arr = [' ', false, 0, 5, 10, 'Hello world!', 'JavaScript', 0, null, true, 7, '', undefined];
for (let i = 0; i < arr.length; i++) {
    if (false == arr[i] || null == arr[i] || undefined == arr[i]) {
        arr.splice(i, 1);
        i--;
    }
} 
console.log(arr)