function save() {
    let name = document.getElementById("name").value;
    localStorage.setItem("name", name);
    showName();
}
function showName() {
    let name = localStorage.getItem("name");
    document.getElementById("title").innerHTML = "Chao ban," + name;
}
function changeName() {
    console.log("changeName");
    localStorage.getItem("name").value = localStorage.getItem("name");
    save();
    showName()
}