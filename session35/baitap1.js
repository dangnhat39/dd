document.getElementById('addTask').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const editButton = document.createElement('button');
        editButton.textContent = 'Sửa';
        editButton.classList.add('edit');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.classList.add('delete');

        editButton.addEventListener('click', function () {
            const newTaskText = prompt('Chỉnh sửa công việc:', taskText);
            if (newTaskText) {
                listItem.firstChild.textContent = newTaskText;
            }
        });

        deleteButton.addEventListener('click', function () {
            listItem.remove();
        });

        listItem.appendChild(editButton);
        listItem.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Vui lòng nhập công việc!');
    }
});  