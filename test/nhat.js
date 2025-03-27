// // let jobs = [
// //     {
// //         id: 1,
// //         name: "nhat"
// //     },
// //     {
// //         id: 2,
// //         name: "nhat2"
// //     },
// //     {
// //         id: 3,
// //         name: "nhat3"
// //     },
// // ];
// // let flag = -1;
// // function hideJob() {
// //     let str = '';
// //     for (let i = 0; i < jobs.length; i++) {
// //         str += `  
// //             <li>${jobs[i].name}<button onclick="editJob(${jobs[i].id})">sửa</button><button onclick="deleteJob(${jobs[i].id})">xóa</button></li>  
// //         `;
// //     }
// //     document.getElementsByClassName("jobs")[0].innerHTML = str;
// // }

// // function addJob() {
// //     let jobName = document.getElementById("jobs").value;
// //     if (flag != -1) {
// //         let newUpdate = {
// //             id:jobs[flag].id,
// //             name: jobName
// //         }
// //         jobs.slice(flag, 1, newUpdate);
// //         flag
// //         return;
// //     } else {
// //         //muoón sửa
// //     }

// //     if (jobName.trim() === '') {
// //         alert("Please enter a job name.");
// //         return;
// //     }
// //     jobs.push({
// //         id: jobs.length + 1,
// //         name: jobName
// //     });
// //     document.getElementById("jobs").value = ''; 
// //     hideJob();
// // }

// // function deleteJob(id) {
// //     console.log("gọi hàm xóa",id);
// //     let index = jobs.findIndex(item => item.id === id);
// //     jobs.splice(index, 1);
// //     hideJob();
// // } 
// // hideJob();  
// // function editJob(id) {
// //     console.log("gọi hàm sửa", id);
// //     let item = jobs.find(item => item.id == id);
// //     console.log("item", item);
// //     document.getElementById("jobs").value = item.name;
// //     document.getElementsByClassName("btn")[0].innerHTML = "sửa";
// //     let index = jobs.findIndex(item => item.id == id);
// //     flag = index;
// // }
// // document.getElementById("inputText").value.trim();
// bài 9 sesion31
<!DOCTYPE html>  
<html lang="vi">  

<head>  
    <meta charset="UTF-8" />  
    <title>Quản lý công việc (Task Board)</title>  
    <link rel="stylesheet" href="baitap5.css" />  
    <style>  
        body {  
            font-family: Arial, sans-serif;  
            margin: 20px;  
        }  
        .task-input {  
            margin-bottom: 20px;  
        }  
        .board {  
            display: flex;  
            justify-content: space-between;  
        }  
        .column {  
            width: 30%;  
            padding: 10px;  
            border: 1px solid #ccc;  
        }  
        .task {  
            display: flex;  
            justify-content: space-between;  
            margin: 5px 0;  
        }  
        button {  
            cursor: pointer;  
        }  
    </style>  
</head>  

<body>  
    <h2>🗂️ Quản lý công việc (Task Board)</h2>  

    <div class="task-input">  
        <input type="text" id="taskName" placeholder="Nhập tên công việc..." />  
        <button onclick="addJobs()">Thêm</button>  
    </div>  

    <div class="board">  
        <div class="column" id="pendingCol">  
            <h3>🕐 Chờ xử lý</h3>  
            <div id="pendingTasks"></div>  
        </div>  
        <div class="column" id="inProgressCol">  
            <h3>🔨 Đang làm</h3>  
            <div id="inProgressTasks"></div>  
        </div>  
        <div class="column" id="doneCol">  
            <h3>✅ Hoàn thành</h3>  
            <div id="doneTasks"></div>  
        </div>  
    </div>  
    
    <script>  
        document.addEventListener("DOMContentLoaded", loadTasks);  

        function loadTasks() {  
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
            tasks.forEach(task => {  
                addTaskToColumn(task);  
            });  
        }  

        function addJobs() {  
            const taskInput = document.getElementById("taskName").value.trim();  
            if (taskInput === "") {  
                alert("Bạn vui lòng nhập tên công việc");  
                return;  
            }  
            const task = { name: taskInput, status: "pending" };  
            let tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
            tasks.push(task);  
            localStorage.setItem('tasks', JSON.stringify(tasks));  
            addTaskToColumn(task);  
            document.getElementById("taskName").value = ""; // Clear the input  
        }  

        function addTaskToColumn(task) {  
            const taskDiv = document.createElement("div");  
            taskDiv.classList.add("task");  
            taskDiv.innerHTML = `  
                <span>${task.name}</span>  
                <button onclick="changeStatus('${task.name}')">Chuyển trạng thái</button>  
            `;  

            if (task.status === "pending") {  
                document.getElementById("pendingTasks").appendChild(taskDiv);  
            } else if (task.status === "inProgress") {  
                document.getElementById("inProgressTasks").appendChild(taskDiv);  
            } else if (task.status === "done") {  
                document.getElementById("doneTasks").appendChild(taskDiv);  
            }  
        }  

        function changeStatus(taskName) {  
            let tasks = JSON.parse(localStorage.getItem('tasks'));  
            tasks = tasks.map(task => {  
                if (task.name === taskName) {  
                    if (task.status === "pending") {  
                        task.status = "inProgress";  
                    } else if (task.status === "inProgress") {  
                        task.status = "done";  
                    }  
                }  
                return task;  
            });  
            localStorage.setItem('tasks', JSON.stringify(tasks));  
            refreshBoard();  
        }  

        function refreshBoard() {  
            document.getElementById("pendingTasks").innerHTML = "";  
            document.getElementById("inProgressTasks").innerHTML = "";  
            document.getElementById("doneTasks").innerHTML = "";  
            loadTasks();  
        }  
    </script>  
</body>  

</html>  