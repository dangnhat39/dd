let books = [];
let cart = [];

function addBook(id, name, price, quantity, category) {
    const newBook = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        category: category
    };
    books.push(newBook);
    console.log(`Đã thêm sách: ${name}`);
}

function displayBooksByCategory(category) {
    console.log(`Danh sách sách thể loại "${category}":`);
    const filteredBooks = books.filter(book => book.category === category);
    if (filteredBooks.length === 0) {
        console.log("Không có sách nào trong thể loại này.");
    } else {
        filteredBooks.forEach(book => {
            console.log(`ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`);
        });
    }
}

function searchBook(term) {
    const foundBooks = books.filter(book => book.id === term || book.name.toLowerCase().includes(term.toLowerCase()));
    if (foundBooks.length === 0) {
        console.log("Không tìm thấy sách nào.");
    } else {
        foundBooks.forEach(book => {
            console.log(`ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`);
        });
    }
}

function buyBook(id, quantity) {
    const book = books.find(book => book.id === id);
    if (book) {
        if (book.quantity >= quantity) {
            book.quantity -= quantity;
            cart.push({ id: book.id, name: book.name, price: book.price, quantity: quantity });
            console.log(`Mua ${quantity} cuốn "${book.name}" thành công!`);
        } else {
            console.log("Số lượng yêu cầu vượt quá số lượng có sẵn.");
        }
    } else {
        console.log("Không tìm thấy sách với ID đó.");
    }
}

function sortBooksByPrice(order) {
    const sortedBooks = [...books].sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    console.log(`Danh sách sách đã sắp xếp theo giá ${order === "asc" ? "tăng dần" : "giảm dần"}:`);
    sortedBooks.forEach(book => {
        console.log(`ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}`);
    });
}

function calculateTotal() {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });
    console.log(`Tổng số lượng sách đã mua: ${totalQuantity}, Tổng tiền: ${totalPrice}`);
}

function displayTotalBooksInStock() {
    const totalQuantity = books.reduce((sum, book) => sum + book.quantity, 0);
    console.log(`Tổng số lượng sách trong kho: ${totalQuantity}`);
}

function main() {
    let exit = false;
    do {
        console.log("\nChọn thao tác: ");
        console.log("1. Hiển thị sách theo thể loại");
        console.log("2. Thêm sách mới vào kho");
        console.log("3. Tìm kiếm sách");
        console.log("4. Mua sách");
        console.log("5. Sắp xếp sách theo giá (Tăng dần)");
        console.log("6. Sắp xếp sách theo giá (Giảm dần)");
        console.log("7. Tính tổng số lượng sách đã mua và tổng tiền");
        console.log("8. Hiển thị tổng số lượng sách trong kho");
        console.log("9. Thoát chương trình");

        const choice = parseInt(prompt("Nhập số tương ứng: "));

        switch (choice) {
            case 1:
                const category = prompt("Nhập thể loại: ");
                displayBooksByCategory(category);
                break;
            case 2:
                const id = parseInt(prompt("Nhập ID sách: "));
                const name = prompt("Nhập tên sách: ");
                const price = parseFloat(prompt("Nhập giá sách: "));
                const quantity = parseInt(prompt("Nhập số lượng sách: "));
                const newCategory = prompt("Nhập thể loại sách: ");
                addBook(id, name, price, quantity, newCategory);
                break;
            case 3:
                const searchTerm = prompt("Nhập tên hoặc ID sách cần tìm: ");
                searchBook(searchTerm);
                break;
            case 4:
                const buyId = parseInt(prompt("Nhập ID sách cần mua: "));
                const buyQuantity = parseInt(prompt("Nhập số lượng muốn mua: "));
                buyBook(buyId, buyQuantity);
                break;
            case 5:
                sortBooksByPrice("asc");
                break;
            case 6:
                sortBooksByPrice("desc");
                break;
            case 7:
                calculateTotal();
                break;
            case 8:
                displayTotalBooksInStock();
                break;
            case 9:
                exit = true;
                console.log("Cảm ơn bạn đã sử dụng chương trình.");
                break;
            default:
                console.log("Chọn không hợp lệ, vui lòng thử lại.");
        }
    } while (!exit);
}

main();  