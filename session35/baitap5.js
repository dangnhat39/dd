// Dữ liệu danh mục mẫu  
let categories = [
    { code: 'DM001', name: 'Quần áo', status: 'Đang hoạt động' },
    { code: 'DM002', name: 'Kính mắt', status: 'Ngừng hoạt động' },
    { code: 'DM003', name: 'Giày dép', status: 'Đang hoạt động' },
    { code: 'DM004', name: 'Thời trang nam', status: 'Ngừng hoạt động' },
    { code: 'DM005', name: 'Thời trang nữ', status: 'Ngừng hoạt động' },
    { code: 'DM006', name: 'Hoa quả', status: 'Ngừng hoạt động' },
    { code: 'DM007', name: 'Rau', status: 'Đang hoạt động' },
    { code: 'DM008', name: 'Điện thoại', status: 'Đang hoạt động' },
];

// Hàm hiển thị danh sách danh mục  
function displayCategories() {
    const categoryTable = document.getElementById('categoryTable');
    categoryTable.innerHTML = ''; // Xóa nội dung trước đó  

    categories.forEach((category, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `  
            <td>${category.code}</td>  
            <td>${category.name}</td>  
            <td>  
                <span class="${category.status === 'Đang hoạt động' ? 'active' : 'inactive'}">  
                    ${category.status}  
                </span>  
            </td>  
            <td>  
                <button onclick="editCategory(${index})">✎</button>  
                <button onclick="deleteCategory(${index})">🗑️</button>  
            </td>  
        `;
        categoryTable.appendChild(row);
    });
}

// Hàm thêm danh mục mới  
function addCategory() {
    const codeInput = document.getElementById('codeInput').value.trim();
    const nameInput = document.getElementById('nameInput').value.trim();
    const statusInput = document.querySelector('input[name="status"]:checked').value;

    // Kiểm tra để đảm bảo không có trường nào bị bỏ trống  
    if (!codeInput || !nameInput) {
        alert("Mã danh mục và tên danh mục không được để trống.");
        return;
    }

    // Kiểm tra xem mã danh mục đã tồn tại chưa  
    const exists = categories.some(category => category.code === codeInput);
    if (exists) {
        alert("Mã danh mục đã tồn tại.");
        return;
    }

    const newCategory = {
        code: codeInput,
        name: nameInput,
        status: statusInput
    };

    categories.push(newCategory);
    document.getElementById('codeInput').value = '';
    document.getElementById('nameInput').value = '';
    document.querySelector('input[name="status"][value="active"]').checked = true; // Đặt lại trạng thái  
    displayCategories();
}

// Hàm xóa danh mục  
function deleteCategory(index) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
        categories.splice(index, 1);
        displayCategories();
    }
}

// Hàm chỉnh sửa danh mục  
function editCategory(index) {
    const category = categories[index];
    document.getElementById('codeInput').value = category.code;
    document.getElementById('nameInput').value = category.name;
    document.querySelector(`input[name="status"][value="${category.status === 'Đang hoạt động' ? 'active' : 'inactive'}"]`).checked = true;

    // Xóa danh mục và thêm sự kiện cho nút thêm để cập nhật  
    document.getElementById('addButton').onclick = function () {
        categories[index] = {
            code: category.code,
            name: document.getElementById('nameInput').value.trim(),
            status: document.querySelector('input[name="status"]:checked').value
        };
        resetForm();
        displayCategories();
    };
}

// Hàm làm mới form  
function resetForm() {
    document.getElementById('codeInput').value = '';
    document.getElementById('nameInput').value = '';
    document.querySelector('input[name="status"][value="active"]').checked = true;
    document.getElementById('addButton').onclick = addCategory; // Trả lại sự kiện ban đầu  
}

// Khởi tạo trang  
document.addEventListener('DOMContentLoaded', displayCategories);  