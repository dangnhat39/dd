let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
function addJob() {
    let newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
    let jobName = document.getElementById("taskName").value.trim();
    let newJob = {
        id: newId,
        taskName: jobName,
        status: 1,
    };
    jobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    document.getElementById("taskName").value = "";
}
function render() {
    let str = "";
    let pending = jobs.filter(item => item.status == 1);
    let inProgress = jobs.filter(item => item.status == 2);
    let done = jobs.filter(item => item.status == 3);
    let strPending = "";
    let strDoing = "";
    let strDone = "";

    for (let i = 0; i < pending.length; i++) {
        strPending += `
          <p>
            ${pending[i].taskName}
            <h3 style="background-color: yellow;">🕐 Chờ xử lý</h3>
          </p>
        `;
    }
    for (let i = 0; i < inProgress.length; i++) {
        strDoing += `
          <p>
            ${inProgress[i].taskName}
            <h3 style="background-color: orange;">🔄 Đang thực hiện</h3>
          </p>
        `;
    }
    for (let i = 0; i < done.length; i++) {
        strDone += `
          <p>
            ${done[i].taskName}
            <h3 style="background-color: green;">✅ Hoàn thành</h3>
          </p>
        `;
    }
}