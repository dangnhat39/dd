
const employees = [
    { stt: 1, name: 'John', age: 18, address: 'New York' },
    { stt: 2, name: 'Mike', age: 22, address: 'Canada' },
    { stt: 3, name: 'Linda', age: 19, address: 'California' },
    { stt: 4, name: 'Peter', age: 25, address: 'London' },
    { stt: 5, name: 'Tony', age: 17, address: 'New York' }
];

const tableBody = document.querySelector('#employeeTable tbody'); // Giả sử bảng có id là "employeeTable"

employees.forEach(employee => {
    const row = document.createElement('tr');

    Object.values(employee).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    tableBody.appendChild(row);
});