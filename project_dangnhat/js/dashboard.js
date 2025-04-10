document.addEventListener("DOMContentLoaded", function () {
    // Navigation
    const items = document.getElementById("category-menu");
    items.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/project_dangnhat/pages/dashboard.html";
    });

    const itemss = document.getElementById("category-pro");
    itemss.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/project_dangnhat/pages/dashboard.html";
    });

    // Modal functionality
    const modal = document.querySelector(".modal");
    const openModal = document.getElementById("myModal");
    const cancelButton = document.getElementById("cancelButton");
    const saveButton = document.querySelector(".save-button");

    openModal.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    cancelButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    // Edit modal functionality
    const editModal = document.querySelector(".edit-modal");
    const openEditModals = document.getElementsByClassName("edit-button");
    const cancelButtonEditModal = document.getElementsByClassName("cancel-button");
    const editSaveButton = document.querySelector("#edit-modal .save-button");

    for (let i = 0; i < openEditModals.length; i++) {
        openEditModals[i].addEventListener("click", function () {
            editModal.style.display = "flex";
        });
    }

    for (let i = 0; i < cancelButtonEditModal.length; i++) {
        cancelButtonEditModal[i].addEventListener("click", function () {
            editModal.style.display = "none";
        });
    }

    window.onclick = function (event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    }

    // Logout functionality
    const logoutIcon = document.getElementById('logout-icon');
    const logoutButton = document.getElementById('logout-button');
    logoutIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        logoutButton.style.display = logoutButton.style.display === 'block' ? 'none' : 'block';
    });

    logoutButton.addEventListener('click', function (event) {
        event.stopPropagation();
        const confirmLogout = confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            window.location.href = '/project_dangnhat/pages/login.html';
        }
    });

    window.addEventListener('click', function () {
        logoutButton.style.display = 'none';
    });

    // Search functionality
    document.getElementById("search-name").addEventListener("input", function () {
        const keyword = this.value.toLowerCase();
        const rows = document.querySelectorAll("tbody tr");

        rows.forEach(row => {
            const maDanhMuc = row.cells[0].textContent.toLowerCase();
            const tenDanhMuc = row.cells[1].textContent.toLowerCase();

            if (maDanhMuc.includes(keyword) || tenDanhMuc.includes(keyword)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        });
    });

    // Category data management
    let categories = JSON.parse(localStorage.getItem('categories')) || [
        { id: 'DM001', name: 'Quần áo', status: 'active' },
        { id: 'DM002', name: 'Kính mắt', status: 'inactive' },
        { id: 'DM003', name: 'Giày dép', status: 'active' },
        { id: 'DM004', name: 'Thời trang nam', status: 'inactive' },
        { id: 'DM005', name: 'Thời trang nữ', status: 'inactive' },
        { id: 'DM006', name: 'Hoa quả', status: 'inactive' },
        { id: 'DM007', name: 'Rau', status: 'active' },
        { id: 'MD008', name: 'Điện thoại', status: 'inactive' },
    ];

    // Product data (giả định)
    let products = JSON.parse(localStorage.getItem('products')) || [];

    // Save new category
    saveButton.addEventListener('click', function (e) {
        e.preventDefault();

        const maDanhMuc = document.getElementById('maDanhMuc').value;
        const tenDanhMuc = document.getElementById('tenDanhMuc').value;
        const trangThai = document.querySelector('input[name="trangThai"]:checked').value === 'dangHoatDong' ? 'active' : 'inactive';

        if (!maDanhMuc || !tenDanhMuc) {
            alert('Vui lòng điền đầy đủ thông tin');
            return;
        }

        // Check if ID already exists
        if (categories.some(cat => cat.id === maDanhMuc)) {
            alert('Mã danh mục đã tồn tại');
            return;
        }

        // Check if Name already exists
        if (categories.some(cat => cat.name.toLowerCase() === tenDanhMuc.toLowerCase())) {
            alert('Tên danh mục đã tồn tại');
            return;
        }


        const newCategory = {
            id: maDanhMuc,
            name: tenDanhMuc,
            status: trangThai
        };

        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
        alert('Đã thêm danh mục thành công!');

        // Reset form and hide modal
        document.getElementById('maDanhMuc').value = '';
        document.getElementById('tenDanhMuc').value = '';
        document.getElementById('dangHoatDong').checked = true;
        modal.style.display = 'none';

        // Refresh table
        renderTable();
    });

    // Edit category
    let currentEditIndex = -1;

    // Add event listeners to edit buttons
    document.addEventListener('click', function (e) {
        if (e.target.closest('.edit-button')) {
            const row = e.target.closest('tr');
            const id = row.cells[0].textContent;
            currentEditIndex = categories.findIndex(cat => cat.id === id);

            if (currentEditIndex !== -1) {
                const category = categories[currentEditIndex];
                document.getElementById('categoryCode').value = category.id;
                document.getElementById('categoryName').value = category.name;

                if (category.status === 'active') {
                    document.getElementById('statusActive').checked = true;
                } else {
                    document.getElementById('statusInactive').checked = true;
                }

                editModal.style.display = 'flex';
            }
        }
    });

    // Save edited category
    editSaveButton.addEventListener('click', function (e) {
        e.preventDefault();

        const id = document.getElementById('categoryCode').value;
        const name = document.getElementById('categoryName').value;
        const status = document.querySelector('input[name="categoryStatus"]:checked').value;

        if (currentEditIndex !== -1) {
            categories[currentEditIndex] = {
                id: id,
                name: name,
                status: status
            };

            localStorage.setItem('categories', JSON.stringify(categories));
            editModal.style.display = 'none';
            renderTable();
            alert('Đã cập nhật danh mục thành công!');
        }
    });

    // Delete category
    document.addEventListener('click', function (e) {
        if (e.target.closest('.delete')) {
            const row = e.target.closest('tr');
            const categoryIdToDelete = row.cells[0].textContent;

            // Kiểm tra xem có sản phẩm nào thuộc về danh mục này không
            const hasProducts = products.some(product => product.categoryId === categoryIdToDelete);

            if (hasProducts) {
                alert('Không thể xóa danh mục này vì nó đang chứa sản phẩm.');
                return; // Ngăn chặn việc xóa
            }

            if (confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
                categories = categories.filter(cat => cat.id !== categoryIdToDelete);
                localStorage.setItem('categories', JSON.stringify(categories));
                renderTable();
            }
        }
    });

    const rowsPerPage = 10;
    const table = document.querySelector("table tbody");
    const pagination = document.querySelector(".pagination");
    const statusSelect = document.getElementById("status");
    const sortableHeaders = document.querySelectorAll("th[data-sort]");

    let currentPage = 1;
    let filteredRows = [];
    let currentSort = { key: null, asc: true };

    function renderTable() {
        table.innerHTML = '';

        filteredRows = categories.map(category => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = category.id;

            const nameCell = document.createElement('td');
            nameCell.textContent = category.name;

            const statusCell = document.createElement('td');
            statusCell.textContent = category.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động';
            statusCell.className = category.status;

            const actionCell = document.createElement('td');

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete';
            deleteButton.innerHTML = '<img src="../assets/icons/Button.jpg" alt="">';

            const editButton = document.createElement('button');
            editButton.className = 'edit-button';
            editButton.innerHTML = '<img src="../assets/icons/_Button base.png" alt="">';

            actionCell.appendChild(deleteButton);
            actionCell.appendChild(editButton);

            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(statusCell);
            row.appendChild(actionCell);

            return row;
        });

        applyFilter();
    }

    function displayRows(page) {
        table.innerHTML = "";
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        const rowsToShow = filteredRows.slice(start, end);
        rowsToShow.forEach(row => table.appendChild(row));
    }

    function updatePagination() {
        pagination.innerHTML = "";
        const totalPages = Math.ceil(filteredRows.length / rowsPerPage);

        const prev = document.createElement("li");
        prev.className = "page-item";
        prev.innerHTML = `<a href="#" class="page-link">«</a>`;
        prev.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                displayRows(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(prev);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = "page-item";
            li.innerHTML = `<a href="#" class="page-link ${i === currentPage ? "active" : ""}">${i}</a>`;
            li.addEventListener("click", () => {
                currentPage = i;
                displayRows(currentPage);
                updatePagination();
            });
            pagination.appendChild(li);
        }

        const next = document.createElement("li");
        next.className = "page-item";
        next.innerHTML = `<a href="#" class="page-link">»</a>`;
        next.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                displayRows(currentPage);
                updatePagination();
            }
        });
        pagination.appendChild(next);
    }

    function applyFilter() {
        const selected = statusSelect.value;

        filteredRows = categories
            .filter(category => {
                return (
                    selected === "all" ||
                    (selected === "active" && category.status === "active") ||
                    (selected === "inactive" && category.status === "inactive")
                );
            })
            .map(category => {
                const row = document.createElement('tr');

                const idCell = document.createElement('td');
                idCell.textContent = category.id;

                const nameCell = document.createElement('td');
                nameCell.textContent = category.name;

                const statusCell = document.createElement('td');
                statusCell.textContent = category.status === 'active' ? 'Đang hoạt động' : 'Ngừng hoạt động';
                statusCell.className = category.status;

                const actionCell = document.createElement('td');

                const deleteButton = document.createElement('button');
                deleteButton.className = 'delete';
                deleteButton.innerHTML = '<img src="../assets/icons/Button.jpg" alt="">';

                const editButton = document.createElement('button');
                editButton.className = 'edit-button';
                editButton.innerHTML = '<img src="../assets/icons/_Button base.png" alt="">';

                actionCell.appendChild(deleteButton);
                actionCell.appendChild(editButton);

                row.appendChild(idCell);
                row.appendChild(nameCell);
                row.appendChild(statusCell);
                row.appendChild(actionCell);

                return row;
            });

        if (currentSort.key !== null) {
            sortRows(currentSort.key, currentSort.asc);
        }

        currentPage = 1;
        displayRows(currentPage);
        updatePagination();
    }

    function sortRows(columnIndex, asc = true) {
        filteredRows.sort((a, b) => {
            const aText = a.cells[columnIndex].textContent.trim().toLowerCase();
            const bText = b.cells[columnIndex].textContent.trim().toLowerCase();

            if (!isNaN(aText) && !isNaN(bText)) {
                return asc ? aText - bText : bText - aText;
            }

            return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
        });
    }

    sortableHeaders.forEach((th, index) => {
        th.addEventListener("click", () => {
            const asc = currentSort.key !== index ? true : !currentSort.asc;
            currentSort = { key: index, asc };
            sortRows(index, asc);
            currentPage = 1;
            displayRows(currentPage);
            updatePagination();

            sortableHeaders.forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));
            th.classList.add(asc ? "sorted-asc" : "sorted-desc");
        });
    });

    statusSelect.addEventListener("change", applyFilter);

    // Initialize
    renderTable();

    // Thêm 10 danh mục mới vào localStorage (chạy một lần)
    const newCategoriesToAdd = [
        { id: 'DM010', name: 'Đồ dùng cá nhân', status: 'active' },
        { id: 'DM011', name: 'Đồ chơi trẻ em', status: 'inactive' },
        { id: 'DM012', name: 'Sản phẩm cho mẹ và bé', status: 'active' },
        { id: 'DM013', name: 'Chăm sóc sức khỏe', status: 'inactive' },
        { id: 'DM014', name: 'Thiết bị gia đình', status: 'active' },
        { id: 'DM015', name: 'Dụng cụ làm vườn', status: 'inactive' },
        { id: 'DM016', name: 'Thức ăn cho thú cưng', status: 'active' },
        { id: 'DM017', name: 'Đồ thủ công mỹ nghệ', status: 'active' },
        { id: 'DM018', name: 'Vật tư nông nghiệp', status: 'active' },
        { id: 'DM019', name: 'Linh kiện điện tử', status: 'inactive' },
    ];

    let currentCategories = JSON.parse(localStorage.getItem('categories')) || [
        { id: 'DM001', name: 'Quần áo', status: 'active' },
        { id: 'DM002', name: 'Kính mắt', status: 'inactive' },
        { id: 'DM003', name: 'Giày dép', status: 'active' },
        { id: 'DM004', name: 'Thời trang nam', status: 'inactive' },
        { id: 'DM005', name: 'Thời trang nữ', status: 'inactive' },
        { id: 'DM006', name: 'Hoa quả', status: 'inactive' },
        { id: 'DM007', name: 'Rau', status: 'active' },
        { id: 'MD008', name: 'Điện thoại', status: 'inactive' },
    ];

    // kiểm tra id đã tồn tại chưa
    const newCategoriesToAddFiltered = newCategoriesToAdd.filter(newCat =>
        !currentCategories.some(currentCat => currentCat.id === newCat.id)
    );

    currentCategories = currentCategories.concat(newCategoriesToAddFiltered);
    localStorage.setItem('categories', JSON.stringify(currentCategories));

    console.log('Đã thêm (nếu chưa tồn tại) 10 danh mục mới vào localStorage.');
    console.log('Dữ liệu categories hiện tại trong localStorage:', JSON.parse(localStorage.getItem('categories')));

});



