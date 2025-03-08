const n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));

if (isNaN(n) || n <= 0) {
    console.log("Số lượng phần tử không hợp lệ.");
} else {
    const arr = [];
    for (let i = 0; i < n; i++) {
        const phanTu = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
        if (isNaN(phanTu)) {
            console.log("Phần tử không hợp lệ.");
            break;
        }
        arr.push(phanTu);
    }

    if (arr.length < 2) {
        console.log("Mảng không đủ phần tử.");
    } else {
        let lonNhat = arr[0];
        let lonThuHai = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > lonNhat) {
                lonThuHai = lonNhat;
                lonNhat = arr[i];
            } else if (arr[i] > lonThuHai && arr[i] !== lonNhat) {
                lonThuHai = arr[i];
            }
        }

        if (lonNhat === lonThuHai) {
            console.log("Không có số lớn thứ hai trong mảng.");
        } else {
            console.log("Số lớn thứ hai trong mảng là:", lonThuHai);
        }
    }
}