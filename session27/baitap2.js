function main() {
    let choice;
    let studentArr = [];
    do {
        choice = menu(choice);
        switch (choice) {
            case 1:
                studentArr = inputStudent();
                break;
            case 2:
                showStudent(studentArr);
                break;
            case 3:
                seachStudent(studentArr);
                break;
            case 4:
                studentArr = deleStudent(studentArr);
                break;
            case 5:
                alert("bạn đã thoát chương trình")
                break;

            default:
                alert("lỗi cú pháp")
                break;
        }
    } while (choice !== 5);
}
function menu(choice) {
    choice = +prompt(`==========MENU=========
    1.Nhập danh sách sinh viên.
    2.Hiển thị danh sách sinh viên.
    3.Tìm sinh viên theo tên.
    4.Xóa sinh viên khỏi danh sách.
    5.Thoát.
========================
        Mời bạn nhập lựa chọn:`)
    return choice;
}
function inputStudent() {
    let arr = [];
    let n;
    do {
        n = +prompt("mời bạn nhập số lượng sinh viên")
        if (Number.isInteger(n)) {
            break;
        } else {
            alert("lỗi cú pháp!Mời bạn nhập lại")
        }
    } while (1);
    for (let i = 0; i < n; i++) {
        do {
            let Studen = prompt(`Mời bạn nhập sinh viên thứ ${i + 1}`)
            if (Number.isInteger(n)) {
                arr.push(Studen);
                break;
            } else {
                alert("lỗi cú pháp!Mời bạn nhập lại")
            }
        } while (1);
    }
    return arr;
}
function showStudent(arr) {
    for (let i = 0; i < arr.length; i++) {
        alert(`Sinh viên thứ ${i + 1} là: ${arr[i]}`)
    }
}
function seachStudent(arr) {
    let seach = prompt("mời bạn nhập người muốn tìm kiếm");
    let result = arr.find(item => item === seach);
    result ? alert(result + "có trong mang") : alert("không tìm thấy " + seach);
}
function deleStudent(arr) {
    let search = prompt("mời bạn nhập người muốn xóa");
    let result = arr.indexOf(search);
    if (result !== -1) {
        arr.splice(result, 1);
        alert(search + " đã đc xóa");
    } else {
        alert("không tìm thấy " + search);
    }
    return arr;
}
main();