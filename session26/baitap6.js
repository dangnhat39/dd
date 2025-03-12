let test1 = ["2025-03-10", "2024-12-25", "2023-07-01"];
let test2 = [];
let test3 = "abc";

function convertDateFormat(dates) {
    if (!Array.isArray(dates)) {
        console.log("Dữ liệu không hợp lệ")
        return;
    }

    if (dates.length === 0) {
        console.log("Mảng không có phần tử nào")
        return;
    }

    let convertedDates = dates.reduce((acc, date) => {
        let parts = date.split("-");
        if (parts.length === 3) {
            let [year, month, day] = parts;
            let dateObj = new Date(`${year}-${month}-${day}`);
            if (!isNaN(dateObj.getTime())) {
                acc.push(`${day}/${month}/${year}`);
            }
        }
        return acc;
    }, []);

    console.log(convertedDates.length > 0 ? convertedDates : "Mảng không có phần tử hợp lệ");
}

convertDateFormat(test1);
convertDateFormat(test2);
convertDateFormat(test3);