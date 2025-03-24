document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            addTodoToDOM(todo);
        });
    }

    function addTodoToDOM(todo) {
        const li = document.createElement('li');
        li.textContent = todo;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Xóa';
        deleteBtn.onclick = () => {
            deleteTodo(todo);
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    }

  
    addBtn.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            addTodoToLocalStorage(todoText);
            addTodoToDOM(todoText);
            todoInput.value = '';
        }
    });

   
    function addTodoToLocalStorage(todo) {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    
    function deleteTodo(todo) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(t => t !== todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        
        loadTodos();
        todoList.innerHTML = '';
        loadTodos();
    }

     
    loadTodos();
});  