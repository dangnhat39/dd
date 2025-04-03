
document.addEventListener("DOMContentLoaded", function () {
    const items = document.getElementById("category-menu");
    items.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/project_dangnhat/pages/dashboard.html";
    });

    const itemss = document.getElementById("category-pro");
    itemss.addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/project_dangnhat/pages/dashboard.html";
    });
});
const modal = document.querySelector(".modal"); 
const openModal = document.getElementById("myModal"); 
const cancelButton = document.getElementById("cancelButton");


openModal.addEventListener("click", function () {
    modal.style.display = "flex";
});

cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
});


window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
const editModal = document.querySelector(".edit-modal");
const openEditModals = document.getElementsByClassName("edit-button");
const cancelButtonEditModal = document.getElementsByClassName("cancel-button");

for (let i = 0; i < openEditModals.length; i++) {
    openEditModals[i].addEventListener("click", function () {
        editModal.style.display = "flex";
    });
}

for (let i = 0; i < cancelButtonEditModal.length; i++) {
    cancelButtonEditModal[i].addEventListener("click", function () {
        editModal.style.display = "none";
    });
}

window.onclick = function (event) {
    if (event.target === editModal) {
        editModal.style.display = "none";
    }
}  
