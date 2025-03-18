const assert = require('assert');

let products = [
    { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
    { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
    { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
    { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
];

let cart = [];

function buyProduct(productId, quantityToBuy) {
    let product = products.find(p => p.id === productId);

    if (product) {
        if (quantityToBuy > product.quantity) {
            return "Số lượng không đủ.";
        } else {
            product.quantity -= quantityToBuy;
            cart.push({ ...product, quantity: quantityToBuy });
            return `Bạn đã thêm ${quantityToBuy} ${product.name} vào giỏ hàng.`;
        }
    } else {
        return "Sản phẩm không tồn tại.";
    }
}
