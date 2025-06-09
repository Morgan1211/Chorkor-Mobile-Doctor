// Sample Pharmacy Data
const products = [
    { id: 1, name: "Paracetamol", price: 5.99, category: "Pain Relief" },
    { id: 2, name: "Ibuprofen", price: 7.50, category: "Pain Relief" },
    { id: 3, name: "Amoxicillin", price: 12.99, category: "Antibiotics" },
    { id: 4, name: "Vitamin C", price: 9.99, category: "Vitamins" }
];

// Load Products
function loadProducts(category = 'All') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    const filtered = category === 'All' 
        ? products 
        : products.filter(p => p.category === category);
    
    filtered.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="images/med-placeholder.png" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="btn-add" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
    });
}

// Initialize Pharmacy Screen
document.querySelectorAll('[data-screen="pharmacy"]').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('pharmacyScreen').style.display = 'block';
        loadProducts();
    });
});