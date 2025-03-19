let employees = [
    { name: 'Nguyễn Văn A', position: 'Developer' },
    { name: 'Trần Thị B', position: 'Designer' },
    { name: 'Phạm Văn C', position: 'Project Manager' },
    { name: 'Lê Thị D', position: 'QA Engineer' },
    { name: 'Vũ Văn E', position: 'DevOps' },
    { name: 'Hoàng Thị F', position: 'HR Manager' }
];

const nameInput = document.getElementById('name');
const positionInput = document.getElementById('position');
const addBtn = document.getElementById('addBtn');
const tableBody = document.querySelector('#employeeTable tbody');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumbersDiv = document.getElementById('pageNumbers');

const itemsPerPage = 3; // Số lượng nhân viên trên mỗi trang
let currentPage = 1;

function renderTable() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentEmployees = employees.slice(startIndex, endIndex);

    tableBody.innerHTML = '';
    currentEmployees.forEach((employee, index) => {
        const row = tableBody.insertRow();
        const sttCell = row.insertCell(0);
        const nameCell = row.insertCell(1);
        const positionCell = row.insertCell(2);

        sttCell.textContent = startIndex + index + 1;
        nameCell.textContent = employee.name;
        positionCell.textContent = employee.position;
    });
}

function renderPagination() {
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    pageNumbersDiv.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('span');
        pageNumber.textContent = i;
        pageNumber.className = 'page-number';
        if (i === currentPage) {
            pageNumber.classList.add('current-page');
        }
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            renderTable();
            renderPagination();
        });
        pageNumbersDiv.appendChild(pageNumber);
    }

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
}

function addEmployee() {
    const name = nameInput.value.trim();
    const position = positionInput.value.trim();
    if (name && position) {
        employees.push({ name, position });
        nameInput.value = '';
        positionInput.value = '';
        renderTable();
        renderPagination();
    }
}

addBtn.addEventListener('click', addEmployee);

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable();
        renderPagination();
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(employees.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderTable();
        renderPagination();
    }
});

renderTable();
renderPagination();