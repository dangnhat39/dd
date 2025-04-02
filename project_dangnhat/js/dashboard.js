
document.addEventListener("DOMContentLoaded", function () {
    const items = document.getElementsByClassName("category-menu");
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "/project_dangnhat/pages/dashboard.html";
        });
    }

    const itemss = document.getElementsByClassName("category-pro");
    for (let i = 0; i < itemss.length; i++) {
        itemss[i].addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "/project_dangnhat/pages/product.html";
        });
    }
});
