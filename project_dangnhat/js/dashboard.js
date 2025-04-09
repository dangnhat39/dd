document.addEventListener("DOMContentLoaded", function () {
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
});
const modal = document.querySelector(".modal");
const openModal = document.getElementById("myModal");
const cancelButton = document.getElementById("cancelButton");


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
const editModal = document.querySelector(".edit-modal");
const openEditModals = document.getElementsByClassName("edit-button");
const cancelButtonEditModal = document.getElementsByClassName("cancel-button");

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
document.addEventListener('DOMContentLoaded', function () {
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
});
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
//sắp xếp trang
document.addEventListener("DOMContentLoaded", function () {
    const rowsPerPage = 10;
    const table = document.querySelector("table tbody");
    const allRows = Array.from(table.querySelectorAll("tr"));
    const pagination = document.querySelector(".pagination");
    const statusSelect = document.getElementById("status");
    const sortableHeaders = document.querySelectorAll("th[data-sort]");

    let currentPage = 1;
    let filteredRows = [...allRows];
    let currentSort = { key: null, asc: true };

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

        filteredRows = allRows.filter(row => {
            const statusCell = row.cells[2];
            const isActive = statusCell.classList.contains("active");
            const isInactive = statusCell.classList.contains("inactive");

            return (
                selected === "all" ||
                (selected === "active" && isActive) ||
                (selected === "inactive" && isInactive)
            );
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

            // Cập nhật icon (tuỳ chỉnh nếu bạn muốn đổi mũi tên)
            sortableHeaders.forEach(h => h.classList.remove("sorted-asc", "sorted-desc"));
            th.classList.add(asc ? "sorted-asc" : "sorted-desc");
        });
    });

    statusSelect.addEventListener("change", applyFilter);

    applyFilter();
});

//sắp xếp danh mục



