const prompt = require("prompt-sync")(); 

let employees = []; 


function addEmployee() {
    let id = prompt("Nhập ID nhân viên: ");
    let name = prompt("Nhập tên nhân viên: ");
    let position = prompt("Nhập vị trí: ");
    let salary = parseFloat(prompt("Nhập mức lương: "));

    employees.push({ id, name, position, salary });
    console.log("Nhân viên đã được thêm thành công!");
}


function deleteEmployee() {
    let id = prompt("Nhập ID nhân viên cần xóa: ");
    let index = employees.findIndex(emp => emp.id === id);

    if (index !== -1) {
        let confirmDelete = prompt(`Bạn có chắc chắn muốn xóa nhân viên ${employees[index].name}? (y/n): `);
        if (confirmDelete.toLowerCase() === 'y') {
            employees.splice(index, 1);
            console.log("Nhân viên đã được xóa!");
        } else {
            console.log("Hủy xóa nhân viên.");
        }
    } else {
        console.log("Không tìm thấy nhân viên có ID này!");
    }
}


function updateSalary() {
    let id = prompt("Nhập ID nhân viên cần cập nhật lương: ");
    let employee = employees.find(emp => emp.id === id);

    if (employee) {
        let newSalary = parseFloat(prompt("Nhập mức lương mới: "));
        employee.salary = newSalary;
        console.log("Mức lương đã được cập nhật!");
    } else {
        console.log("Không tìm thấy nhân viên có ID này!");
    }
}


function searchEmployee() {
    let name = prompt("Nhập tên nhân viên cần tìm: ");
    let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));

    if (foundEmployees.length > 0) {
        console.log("Danh sách nhân viên tìm thấy:");
        console.table(foundEmployees);
    } else {
        console.log("Không tìm thấy nhân viên nào!");
    }
}


function showMenu() {
    while (true) {
        console.log("\n===== QUẢN LÝ NHÂN VIÊN =====");
        console.log("1. Thêm nhân viên");
        console.log("2. Xóa nhân viên");
        console.log("3. Cập nhật lương nhân viên");
        console.log("4. Tìm kiếm nhân viên");
        console.log("5. Thoát");

        let choice = prompt("Chọn chức năng (1-5): ");

        switch (choice) {
            case "1":
                addEmployee();
                break;
            case "2":
                deleteEmployee();
                break;
            case "3":
                updateSalary();
                break;
            case "4":
                searchEmployee();
                break;
            case "5":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại!");
        }
    }
}


showMenu();
