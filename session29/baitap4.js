const jobs = [];

function addJob(id, name, description, startTime, status) {
    jobs.push({ id, name, description, startTime, status });
    console.log("Công việc đã được thêm thành công.");
}

function displayJobs() {
    if (jobs.length === 0) {
        console.log("Danh sách công việc trống.");
        return;
    }
    console.log("Danh sách các công việc:");
    jobs.forEach(job => {
        console.log(`ID: ${job.id}, Tên: ${job.name}, Mô tả: ${job.description}, Thời gian bắt đầu: ${job.startTime}, Trạng thái: ${job.status}`);
    });
}

function updateJobStatus(id, status) {
    const job = jobs.find(job => job.id === id);
    if (job) {
        job.status = status;
        console.log(`Trạng thái công việc ID ${id} đã được cập nhật thành ${status}.`);
    } else {
        console.log(`Không tìm thấy công việc với ID ${id}.`);
    }
}

function filterJobsByStatus(status) {
    const filteredJobs = jobs.filter(job => job.status === status);
    if (filteredJobs.length === 0) {
        console.log(`Không có công việc nào có trạng thái "${status}".`);
        return;
    }
    console.log(`Danh sách công việc trạng thái "${status}":`);
    filteredJobs.forEach(job => {
        console.log(`ID: ${job.id}, Tên: ${job.name}, Mô tả: ${job.description}, Thời gian bắt đầu: ${job.startTime}`);
    });
}

function sortJobsByStatus() {
    jobs.sort((a, b) => a.status.localeCompare(b.status));
    console.log("Các công việc đã được sắp xếp theo trạng thái.");
}

function main() {
    const prompt = require('prompt-sync')();

    while (true) {
        console.log("\n--- Quản lý công việc ---");
        console.log("1. Thêm công việc mới");
        console.log("2. Hiển thị tất cả các công việc");
        console.log("3. Cập nhật trạng thái công việc (theo ID)");
        console.log("4. Lọc công việc theo trạng thái");
        console.log("5. Sắp xếp công việc theo trạng thái");
        console.log("6. Thoát");
        const choice = prompt("Chọn chức năng: ");

        switch (choice) {
            case '1':
                const id = prompt("Nhập ID công việc: ");
                const name = prompt("Nhập tên công việc: ");
                const description = prompt("Nhập mô tả công việc: ");
                const startTime = prompt("Nhập thời gian bắt đầu (YYYY-MM-DD HH:mm): ");
                const status = prompt("Nhập trạng thái (hoàn thành/chưa hoàn thành): ");
                addJob(id, name, description, startTime, status);
                break;
            case '2':
                displayJobs();
                break;
            case '3':
                const updateId = prompt("Nhập ID công việc cần cập nhật trạng thái: ");
                const newStatus = prompt("Nhập trạng thái mới (hoàn thành/chưa hoàn thành): ");
                updateJobStatus(updateId, newStatus);
                break;
            case '4':
                const filterStatus = prompt("Nhập trạng thái để lọc (hoàn thành/chưa hoàn thành): ");
                filterJobsByStatus(filterStatus);
                break;
            case '5':
                sortJobsByStatus();
                break;
            case '6':
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}

main();  