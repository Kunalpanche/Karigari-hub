document.addEventListener('DOMContentLoaded', () => {
    // Sample product data
    const products = [
        { name: 'Handcrafted Pottery', price: 49.99, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa' },
        { name: 'Woven Basket', price: 29.99, image: 'https://images.unsplash.com/photo-1606755456206-b25206cde27e' },
        { name: 'Artisan Jewelry', price: 79.99, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338' },
        { name: 'Wooden Sculpture', price: 99.99, image: 'https://images.unsplash.com/photo-1610288311735-39b7facbd095' },
    ];

    // Populate featured products
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
});









document.addEventListener('DOMContentLoaded', () => {
    // ... (existing code remains unchanged) ...

    // Artisan page functionality
    if (document.querySelector('#artisan-profile')) {
        const artisanProducts = [
            { name: 'Handcrafted Pottery Vase', price: 49.99, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa' },
            { name: 'Ceramic Mug Set', price: 29.99, image: 'https://images.unsplash.com/photo-1614528767034-77f6e4f77d18' },
            { name: 'Decorative Clay Plate', price: 39.99, image: 'https://images.unsplash.com/photo-1610701596295-4dc5d6289c92' },
        ];

        const artisanProductGrid = document.querySelector('#artisan-profile .product-grid');
        populateProductGrid(artisanProductGrid, artisanProducts);
    }

    // Product page functionality
    if (document.querySelector('#product-details')) {
        const buyNowBtn = document.getElementById('buy-now-btn');
        const addToCartBtn = document.getElementById('add-to-cart-btn');
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainProductImage = document.querySelector('.main-product-image');

        buyNowBtn.addEventListener('click', () => {
            alert('Thank you for your purchase!');
        });

        addToCartBtn.addEventListener('click', () => {
            alert('Product added to cart!');
        });

        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainProductImage.src = thumbnail.src;
            });
        });

        const relatedProducts = [
            { name: 'Ceramic Mug Set', price: 29.99, image: 'https://images.unsplash.com/photo-1614528767034-77f6e4f77d18' },
            { name: 'Decorative Clay Plate', price: 39.99, image: 'https://images.unsplash.com/photo-1610701596295-4dc5d6289c92' },
            { name: 'Handmade Pottery Bowl', price: 34.99, image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa' },
        ];

        const relatedProductGrid = document.querySelector('#related-products .product-grid');
        populateProductGrid(relatedProductGrid, relatedProducts);
    }

    // Helper function to populate product grids
    function populateProductGrid(grid, products) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            `;
            grid.appendChild(productCard);
        });
    }
});