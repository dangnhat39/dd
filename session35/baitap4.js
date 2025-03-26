let employees = [
    { id: 1, name: 'Nguyễn Văn A', position: 'Developer' },
    { id: 2, name: 'Trần Thị B', position: 'Designer' },
    { id: 3, name: 'Phạm Văn C', position: 'Project Manager' },
    { id: 4, name: 'Lê Thị D', position: 'QA Engineer' },
    { id: 5, name: 'Vũ Văn E', position: 'DevOps' },
    { id: 6, name: 'Hoàng Thị F', position: 'HR Manager' }
];
let currentPage = 1;
const itemsPerPage = 3;

function displayEmployees(page) {
    const employeeTable = document.getElementById('employeeTable');
    employeeTable.innerHTML = '';   
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, employees.length);
    for (let i = startIndex; i < endIndex; i++) {
        const employee = employees[i];
        const row = document.createElement('tr');
        row.innerHTML = `  
            <td>${employee.id}</td>  
            <td>${employee.name}</td>  
            <td>${employee.position}</td>  
        `;
        employeeTable.appendChild(row);
    } 
    updatePagination();
} 
function updatePagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(employees.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.classList.add('page-btn');
        btn.onclick = () => {
            currentPage = i;
            displayEmployees(currentPage);
        };
        pagination.appendChild(btn);
    }
} 
function searchEmployees() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredEmployees = employees.filter(employee =>
        employee.name.toLowerCase().includes(searchQuery)
    );

    
    document.getElementById('employeeCount').textContent = `Tổng số nhân viên: ${filteredEmployees.length}`;
    displayFilteredEmployees(filteredEmployees);
}

function displayFilteredEmployees(filteredEmployees) {
    const employeeTable = document.getElementById('employeeTable');
    employeeTable.innerHTML = '';

     
    filteredEmployees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `  
            <td>${employee.id}</td>  
            <td>${employee.name}</td>  
            <td>${employee.position}</td>  
        `;
        employeeTable.appendChild(row);
    });

     
    document.getElementById('pagination').innerHTML = ''; // Xóa phân trang  
}

function addEmployee() {
    const nameInput = document.getElementById('nameInput').value;
    const positionInput = document.getElementById('positionInput').value;

    if (nameInput && positionInput) {
        const newEmployee = {
            id: employees.length + 1,
            name: nameInput,
            position: positionInput
        };
        employees.push(newEmployee);
        document.getElementById('nameInput').value = '';
        document.getElementById('positionInput').value = '';
        displayEmployees(currentPage);
        document.getElementById('employeeCount').textContent = `Tổng số nhân viên: ${employees.length}`;
    } else {
        alert("Vui lòng nhập tên và chức vụ.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displayEmployees(currentPage);

    document.getElementById('searchInput').addEventListener('input', searchEmployees);
    document.getElementById('addButton').addEventListener('click', addEmployee);
});  
