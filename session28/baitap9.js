const prompt = require("prompt-sync")();

let books = [];

function addBook() {
    let id = parseInt(prompt("Nhập ID sách: "));
    let title = prompt("Nhập tên sách: ");
    let author = prompt("Nhập tác giả: ");
    let year = parseInt(prompt("Nhập năm xuất bản: "));
    let price = parseFloat(prompt("Nhập giá sách: "));
    let isAvailable = true;

    books.push({ id, title, author, year, price, isAvailable });
    console.log("Sách đã được thêm thành công!");
}

function displayBooks() {
    if (books.length === 0) {
        console.log("Thư viện hiện không có sách nào.");
    } else {
        console.log("\nDanh sách sách trong thư viện:");
        console.table(books);
    }
}

function searchBook() {
    let keyword = prompt("Nhập tiêu đề sách cần tìm: ").toLowerCase();
    let foundBooks = books.filter(book => book.title.toLowerCase().includes(keyword));

    if (foundBooks.length > 0) {
        console.log("\nKết quả tìm kiếm:");
        console.table(foundBooks);
    } else {
        console.log("Không tìm thấy sách nào với tiêu đề đã nhập.");
    }
}

function updateBookStatus() {
    let id = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái: "));
    let book = books.find(book => book.id === id);

    if (book) {
        book.isAvailable = !book.isAvailable;
        console.log(`Trạng thái sách đã được cập nhật: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
    } else {
        console.log("Không tìm thấy sách có ID này.");
    }
}

function deleteBook() {
    let id = parseInt(prompt("Nhập ID sách cần xóa: "));
    let index = books.findIndex(book => book.id === id);

    if (index !== -1) {
        let confirmDelete = prompt(`Bạn có chắc chắn muốn xóa sách "${books[index].title}"? (y/n): `);
        if (confirmDelete.toLowerCase() === 'y') {
            books.splice(index, 1);
            console.log("Sách đã được xóa khỏi danh sách.");
        } else {
            console.log("Hủy xóa sách.");
        }
    } else {
        console.log("Không tìm thấy sách có ID này.");
    }
}

function sortBooksByPrice() {
    books.sort((a, b) => a.price - b.price);
    console.log("Danh sách sách đã được sắp xếp theo giá tăng dần.");
    displayBooks();
}

function showMenu() {
    while (true) {
        console.log("\n===== QUẢN LÝ SÁCH TRONG THƯ VIỆN =====");
        console.log("1. Thêm sách mới");
        console.log("2. Hiển thị danh sách sách");
        console.log("3. Tìm kiếm sách theo tiêu đề");
        console.log("4. Cập nhật trạng thái mượn/trả sách");
        console.log("5. Xóa sách theo ID");
        console.log("6. Sắp xếp sách theo giá tăng dần");
        console.log("7. Thoát");

        let choice = prompt("Chọn chức năng (1-7): ");

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                displayBooks();
                break;
            case "3":
                searchBook();
                break;
            case "4":
                updateBookStatus();
                break;
            case "5":
                deleteBook();
                break;
            case "6":
                sortBooksByPrice();
                break;
            case "7":
                console.log("Thoát chương trình.");
                return;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
        }
    }
}

showMenu();
