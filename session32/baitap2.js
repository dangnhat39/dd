let count = 0;

document.getElementById("countButton").onclick = function () {
    count++;
    document.getElementById("countDisplay").innerText = "Số lần bấm: " + count;
};  