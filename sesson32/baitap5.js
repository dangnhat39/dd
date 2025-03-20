const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.onclick = function () {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task";

        const taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;
        taskDiv.appendChild(taskLabel);

        const removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.className = "remove";
        removeButton.onclick = function () {
            taskList.removeChild(taskDiv);
        };
        taskDiv.appendChild(removeButton);

        taskList.appendChild(taskDiv);
        taskInput.value = ""; 
    } else {
        alert("Vui lòng nhập nhiệm vụ!");
    }
};  