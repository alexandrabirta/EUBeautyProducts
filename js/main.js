document.addEventListener("DOMContentLoaded", function() {
    fetch('php/get_products.php')
    .then(response => response.json())
    .then(products => {
        const productsSection = document.getElementById('products');
        productsSection.innerHTML = ''; // Clear the section before loading new products
        products.forEach(product => {
            productsSection.innerHTML += `
                <div class="product-card">
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: €${product.price}</p>
                    <p>Made in ${product.country}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                    <button onclick="addToFavorites(${product.id})">Add to Favorites</button>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading products:', error));
});

function addToCart(productId) {
    fetch('php/add_to_cart.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `product_id=${productId}&quantity=1`
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        // Aici ar putea fi adăugat un update al interfeței pentru a reflecta schimbarea în coș
    })
    .catch(error => console.error('Error:', error));
}
