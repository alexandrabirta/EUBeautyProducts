document.addEventListener("DOMContentLoaded", function() {
    fetch('php/get_favorites.php')
    .then(response => response.json())
    .then(favorites => {
        const favoritesSection = document.getElementById('favorites');
        favoritesSection.innerHTML = ''; // Clear the section before loading new favorites
        favorites.forEach(product => {
            favoritesSection.innerHTML += `
                <div class="product-card">
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>Price: €${product.price}</p>
                    <p>Made in ${product.country}</p>
                    <button onclick="removeFromFavorites(${product.id})">Remove from Favorites</button>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading favorites:', error));
});
