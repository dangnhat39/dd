const items = document.getElementsByClassName("category-menu");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "/project_dangnhat/pages/dashboard.html";
    });
}
