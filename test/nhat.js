do {
    console.log("\n--- MENU ---");
    console.log("1. Hiển thị mảng");
    console.log("2. Thêm phần tử");
    console.log("3. Sửa phần tử");
    console.log("4. Xóa phần tử");
    console.log("5. Thoát");

    choice = prompt("Chọn một tùy chọn (1-5): ");

    switch (choice) {
        case "1":
            displayArray();
            break;

        case "2":
            const newElement = prompt("Nhập phần tử cần thêm: ");
            addElement(newElement);
            break;

        case "3":
            const indexToUpdate = parseInt(prompt("Nhập vị trí phần tử cần sửa: "));
            const newValue = prompt("Nhập giá trị mới: ");
            updateElement(indexToUpdate, newValue);
            break;

        case "4":
            const indexToRemove = parseInt(prompt("Nhập vị trí phần tử cần xóa: "));
            removeElement(indexToRemove);
            break;

        case "5":
            console.log("Đã thoát chương trình.");
            break;

        default:
            console.log("Vui lòng chọn một tùy chọn hợp lệ.");
    }
} while (choice !== "5");  