let danhSach = [];

function renderLession() {
    let str = "";
    for (let i = 0; i < danhSach.length; i++) {
        str += `
        <li>${danhSach[i]}</li>
        `;
    }  
    let listtem = document.getElementById("list");
    listtem.innerHTML = str;
}

function addLession() {
    let input = document.getElementById("jobs").value; 
    if (input) { 
        danhSach.push(input);
        renderLession();
        document.getElementById("jobs").value = "";
        return;
    } else {
        alert("Please enter a job name.");
    }
}

renderLession();