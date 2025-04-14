document.getElementById("go-to-dashboard").addEventListener("click", function () {
    window.location.href = "/Project_DangNhat/pages/dashboard.html";
});

const addProductBtn = document.querySelector('.add-product');
const addProductModal = document.getElementById('add-product-modal');
const editProductModal = document.getElementById('edit-product-modal');
const cancelAddBtn = document.getElementById('cancel-add');
const cancelEditBtn = document.querySelector('.cancel-button');
const closeEditModalBtn = document.querySelector('.close-button');
const saveAddBtn = document.querySelector('.save-button');
const saveEditBtn = editProductModal.querySelector('.save-button');
const categoryFilter = document.getElementById('category-filter');
const statusFilter = document.getElementById('status-filter');
const searchInput = document.getElementById('search-name');
const tbody = document.querySelector('tbody');

let products = JSON.parse(localStorage.getItem('products')) || [];

function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
}

function renderProducts() {
    tbody.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.dataset.id = product.id; // Lưu id để dễ cập nhật/xóa
        row.innerHTML = `
            <td>${product.product_code}</td>
            <td>${product.product_name}</td>
            <td>${parseInt(product.price).toLocaleString()} đ</td>
            <td>${product.stock}</td>
            <td>${product.discount}%</td>
            <td><span class="${product.status.toLowerCase()}">${product.status === 'ACTIVE' ? 'Đang hoạt động' : 'Ngừng hoạt động'}</span></td>
            <td>
                <button><img src="../assets/icons/trash-2.png" alt="Delete"></button>
                <button><img src="../assets/icons/Icon.png" alt="Edit"></button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Tải dữ liệu khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    if (products.length === 0) {
        // Nếu không có dữ liệu trong localStorage, thêm dữ liệu ban đầu từ bảng HTML
        const initialRows = tbody.querySelectorAll('tr');
        initialRows.forEach(row => {
            const product = {
                id: products.length + 1,
                product_code: row.cells[0].textContent,
                product_name: row.cells[1].textContent,
                category_id: ['iphone', 'samsung', 'oppo'].some(brand => row.cells[1].textContent.toLowerCase().includes(brand)) ? 1 : 2,
                stock: parseInt(row.cells[3].textContent),
                price: parseInt(row.cells[2].textContent.replace(/[^0-9]/g, '')),
                discount: parseInt(row.cells[4].textContent),
                image: "https://example.com/image.jpg", // Giá trị mặc định
                status: row.cells[5].querySelector('span').className.toUpperCase(),
                description: `${row.cells[1].textContent} description`, // Giá trị mặc định
                created_at: new Date().toISOString().replace('T', ' ').slice(0, 19)
            };
            products.push(product);
        });
        saveToLocalStorage();
    }
    renderProducts();
});

// Hiển thị modal thêm sản phẩm
addProductBtn.addEventListener('click', () => {
    addProductModal.style.display = 'block';
});

// Đóng modal thêm sản phẩm
cancelAddBtn.addEventListener('click', () => {
    addProductModal.style.display = 'none';
});

// Đóng modal chỉnh sửa sản phẩm
cancelEditBtn.addEventListener('click', () => {
    editProductModal.style.display = 'none';
});

closeEditModalBtn.addEventListener('click', () => {
    editProductModal.style.display = 'none';
});

// Thêm sản phẩm mới
saveAddBtn.addEventListener('click', () => {
    const maSanPham = document.getElementById('maSanPham').value;
    const tenSanPham = document.getElementById('tenSanPham').value;
    const giaSanPham = document.getElementById('giaSanPham').value;
    const soLuong = document.getElementById('soLuong').value;
    const giamGia = document.getElementById('giamGia').value;
    const trangThai = document.querySelector('input[name="trangThai"]:checked').value;

    if (maSanPham && tenSanPham && giaSanPham && soLuong) {
        const newProduct = {
            id: products.length + 1,
            product_code: maSanPham,
            product_name: tenSanPham,
            category_id: ['iphone', 'samsung', 'oppo'].some(brand => tenSanPham.toLowerCase().includes(brand)) ? 1 : 2,
            stock: parseInt(soLuong),
            price: parseInt(giaSanPham),
            discount: parseInt(giamGia),
            image: "https://example.com/image.jpg", // Giá trị mặc định
            status: trangThai.toUpperCase(),
            description: `${tenSanPham} description`, // Giá trị mặc định
            created_at: new Date().toISOString().replace('T', ' ').slice(0, 19)
        };
        products.push(newProduct);
        saveToLocalStorage();
        renderProducts();
        addProductModal.style.display = 'none';

        // Reset form
        document.getElementById('maSanPham').value = '';
        document.getElementById('tenSanPham').value = '';
        document.getElementById('giaSanPham').value = '';
        document.getElementById('soLuong').value = '';
        document.getElementById('giamGia').value = '0';
        document.getElementById('dangHoatDong').checked = true;
    } else {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
    }
});

// Xử lý sự kiện chỉnh sửa và xóa sản phẩm
tbody.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (!row) return;

    const productId = parseInt(row.dataset.id);
    const productIndex = products.findIndex(p => p.id === productId);

    // Xóa sản phẩm
    if (e.target.closest('button').querySelector('img[alt="Delete"]')) {
        if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
            products.splice(productIndex, 1);
            saveToLocalStorage();
            renderProducts();
        }
    }

    // Chỉnh sửa sản phẩm
    if (e.target.closest('button').querySelector('img[alt="Edit"]')) {
        editProductModal.style.display = 'block';

        const product = products[productIndex];
        document.getElementById('editMaSanPham').value = product.product_code;
        document.getElementById('editTenSanPham').value = product.product_name;
        document.getElementById('editGiaSanPham').value = product.price;
        document.getElementById('editSoLuong').value = product.stock;
        document.getElementById('editGiamGia').value = product.discount;
        document.getElementById('editDangHoatDong').checked = product.status === 'ACTIVE';
        document.getElementById('editNgungHoatDong').checked = product.status === 'INACTIVE';

        // Lưu thông tin chỉnh sửa
        saveEditBtn.onclick = () => {
            products[productIndex] = {
                ...products[productIndex],
                product_code: document.getElementById('editMaSanPham').value,
                product_name: document.getElementById('editTenSanPham').value,
                category_id: ['iphone', 'samsung', 'oppo'].some(brand => document.getElementById('editTenSanPham').value.toLowerCase().includes(brand)) ? 1 : 2,
                stock: parseInt(document.getElementById('editSoLuong').value),
                price: parseInt(document.getElementById('editGiaSanPham').value),
                discount: parseInt(document.getElementById('editGiamGia').value),
                status: document.querySelector('input[name="editTrangThai"]:checked').value.toUpperCase(),
                description: `${document.getElementById('editTenSanPham').value} description`
            };
            saveToLocalStorage();
            renderProducts();
            editProductModal.style.display = 'none';
        };
    }
});

// Lọc và tìm kiếm sản phẩm
function filterProducts() {
    const category = categoryFilter.value;
    const status = statusFilter.value;
    const searchText = searchInput.value.toLowerCase();
    const rows = tbody.querySelectorAll('tr');

    rows.forEach(row => {
        const productId = parseInt(row.dataset.id);
        const product = products.find(p => p.id === productId);
        const tenSanPham = product.product_name.toLowerCase();
        const trangThai = product.status.toLowerCase();
        const categoryMatch = !category || (category === 'phone' && product.category_id === 1) || (category === 'laptop' && product.category_id === 2);
        const statusMatch = !status || trangThai === status;
        const searchMatch = !searchText || tenSanPham.includes(searchText);

        if (categoryMatch && statusMatch && searchMatch) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Gắn sự kiện cho các bộ lọc và tìm kiếm
categoryFilter.addEventListener('change', filterProducts);
statusFilter.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);
document.addEventListener('DOMContentLoaded', function () {
    const logoSection = document.querySelector('.logo-section');

    if (logoSection) {
        logoSection.addEventListener('click', function () {
            window.location.href = 'category-manager.html';
        });
    } else {
        console.error('Không tìm thấy phần tử có class "logo-section".');
    }
});