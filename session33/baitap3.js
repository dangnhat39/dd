document.getElementById('filterButton').addEventListener('click', function () {
    const selectedCategory = document.getElementById('categorySelect').value;
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (selectedCategory === "" || product.getAttribute('data-category') === selectedCategory) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none';  
        }
    });
});  