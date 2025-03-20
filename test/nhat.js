let jobs = [
    {
        id: 1,
        name: "nhat"
    },
    {
        id: 2,
        name: "nhat2"
    },
    {
        id: 3,
        name: "nhat3"
    },
];
let flag = -1;
function hideJob() {
    let str = '';
    for (let i = 0; i < jobs.length; i++) {
        str += `  
            <li>${jobs[i].name}<button onclick="editJob(${jobs[i].id})">sửa</button><button onclick="deleteJob(${jobs[i].id})">xóa</button></li>  
        `;
    }
    document.getElementsByClassName("jobs")[0].innerHTML = str;
}

function addJob() {
    let jobName = document.getElementById("jobs").value;
    if (flag != -1) {
        let newUpdate = {
            id:jobs[flag].id,
            name: jobName
        }
        jobs.slice(flag, 1, newUpdate);
        flag
        return;
    } else {
        //muoón sửa
    }

    if (jobName.trim() === '') {
        alert("Please enter a job name.");
        return;
    }
    jobs.push({
        id: jobs.length + 1,
        name: jobName
    });
    document.getElementById("jobs").value = ''; 
    hideJob();
}

function deleteJob(id) {
    console.log("gọi hàm xóa",id);
    let index = jobs.findIndex(item => item.id === id);
    jobs.splice(index, 1);
    hideJob();
} 
hideJob();  
function editJob(id) {
    console.log("gọi hàm sửa", id);
    let item = jobs.find(item => item.id == id);
    console.log("item", item);
    document.getElementById("jobs").value = item.name;
    document.getElementsByClassName("btn")[0].innerHTML = "sửa";
    let index = jobs.findIndex(item => item.id == id);
    flag = index;
}
document.getElementById("inputText").value.trim();
