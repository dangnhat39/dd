function filterArray(arr) {
    if (!Array.isArray(arr)) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }

    const result = arr.filter(num => typeof num === 'number' && num >= 10);

    if (result.length === 0) {
        console.log("Mảng không có phần tử nào");
    } else {
        console.log(result);
    }
}

// Test cases
filterArray([1, 22, 10, 9, 8]); // Output: [22, 10]
filterArray([]); // Output: Mảng không có phần tử nào
filterArray("abc"); // Output: Dữ liệu không hợp lệ