let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let cart = []; 
let choice;


function displayProducts() {
    console.log("\n---- Sản phẩm ----");
    products.forEach(product => {
        console.log(`ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Số lượng: ${product.quantity}, Loại: ${product.category}`);
    });
}
function buyProduct() {
    let productId = Number(prompt("Nhập ID sản phẩm bạn muốn mua: "));
    let quantityToBuy = Number(prompt("Nhập số lượng bạn muốn mua: "));

    let product = products.find(p => p.id === productId);

    if (product) {
        if (quantityToBuy > product.quantity) {
            console.log("Số lượng không đủ.");
        } else {
            product.quantity -= quantityToBuy; 
            cart.push({ ...product, quantity: quantityToBuy }); 
            console.log(`Bạn đã thêm ${quantityToBuy} ${product.name} vào giỏ hàng.`);
        }
    } else {
        console.log("Sản phẩm không tồn tại.");
    }
} 
function sortProductsByPriceAsc() {
    products.sort((a, b) => a.price - b.price);
    displayProducts();
}
function sortProductsByPriceDesc() {
    prodicts.sort((a, b))=> b.price - a.price);
    displayProducts();
}
do {
    console.log("\n---- Menu ----");
    console.log("1. Hiển thị sản phẩm");
    console.log("2. Mua sản phẩm");
    console.log("3. Sắp xếp sản phẩm theo giá (Tăng dần)");
    console.log("4. Sắp xếp sản phẩm theo giá (Giảm dần)");
    console.log("5. Tính tổng tiền trong giỏ hàng");
    console.log("6. Thoát");

    choice = Number(prompt("Mời bạn nhập lựa chọn: "));

    switch (choice) {
        case 1:
            displayProducts();
            break;
        case 2:
            buyProduct();
            break;
        case 3:
            sortProductsByPriceAsc();
            break;
        case 4:
            sortProductsByPriceDesc();
            break;
        case 5:
            calculateTotalPrice();
            break;
        case 6:
            console.log("Thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại.");
    }
} while (choice !== 6);  