// Nối chuỗi và số sẽ cho ra chuỗi
let result = "javascript" + 5;
console.log(result); // Kết quả: "javascript5"

// Trừ một số từ một chuỗi sẽ cho ra NaN (Không phải là số)
result = "javascript" - 1;
console.log(result); // Kết quả: NaN

// Nối chuỗi và số sẽ cho ra chuỗi
result = "3" + 2;
console.log(result); // Kết quả: "32"

// Trừ một số từ một chuỗi có thể chuyển đổi thành số
result = "5" - 4;
console.log(result); // Kết quả: 1

// isNaN kiểm tra xem giá trị có phải là NaN (Không phải là số) không
result = isNaN("123");
console.log(result); // Kết quả: false (vì "123" là một số hợp lệ)

// isNaN kiểm tra xem giá trị có phải là NaN (Không phải là số) không
result = isNaN("hello");
console.log(result); // Kết quả: true (vì "hello" không phải là một số hợp lệ)

// Number.isNaN kiểm tra xem giá trị có phải là NaN (Không phải là số) không
result = Number.isNaN("123");
console.log(result); // Kết quả: false (vì "123" không phải là NaN)

// Number.isNaN kiểm tra xem giá trị có phải là NaN (Không phải là số) không
result = Number.isNaN(NaN);
console.log(result); // Kết quả: true (vì NaN là NaN)