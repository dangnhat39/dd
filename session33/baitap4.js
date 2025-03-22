const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRsd33VBftr_OOrs9uJXPyRPnQMDpFv3grDBmz316XAKJdgdPC1qcEAqJi8PcLT9C0RoE1l0VjTzlBGi0DxCs7Lsjk3mxaIRWV3yOgIfanL0l5Scuht544G2yMHsuw8vA91GyqnyRkmLJg&usqp=CAc',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4LtdZPWP1BJfEG86uDDC4ILEvARIkDguIiVxRe2-ZBwJg6hY1J2GQjUXrCw8m-8LF_A0qPHVrz4oWwMkOMT41DuseHIduqhkt1iuVUWE9fAacyVwmeJ01pw-CT8Xg56PCibEEb82Z-5E&usqp=CAc',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'data:image/webp;base64,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',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEULKoUeM-zh4oGZTp8J3Ycv7IDmj2uEAi-WgIw0nxOQ&usqp=CAE&s',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQusYMx9HPO7e3XySlIKi5KjVVZHVUv960ry8fSlZbB6jF2KaHAv4eEcpomZHZCS1ujyF38YHtP-vpix9Ky66V4pU5mzJND8hwvyDkaSA-spVsX0r3FTjMagQhOSr04q0L01B82sg&usqp=CAc',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'
    }
];

function displayProducts(products) {
    const productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productCard = `  
            <div class="col-md-4 product-card">  
                <div class="card">  
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">  
                    <div class="card-body">  
                        <h5 class="card-title">${product.name}</h5>  
                        <p class="card-text">${product.description}</p>  
                        <p class="card-text"><strong>${product.price.toLocaleString()} VNĐ</strong></p>  
                        <a href="#" class="btn btn-primary">Buy</a>  
                    </div>  
                </div>  
            </div>  
        `;
        productContainer.innerHTML += productCard;
    });
}
document.getElementById('searchInput').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts);
});

displayProducts(products);      