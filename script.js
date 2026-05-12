
const products = [
    { id: 1, name: "Argentina Home 2026", type: "Home", country: "Argentina", price: 120.00, img: "https://gullysports.in/cdn/shop/files/5693051A-D980-454A-AF78-1BA623E91656.jpg?v=1776585624", desc: "The official 3-star champions kit." },
    { id: 2, name: "Argentina Away 2026", type: "Away", country: "Argentina", price: 115.00, img: "https://u-mercari-images.mercdn.net/photos/m93818000634_1.jpg", desc: "Deep blue modern aesthetic away kit." },
    { id: 3, name: "Brazil Home 2026", type: "Home", country: "Brazil", price: 130.00, img: "https://www.jerseybdclub.com/wp-content/uploads/2026/02/Brazil-World-Cup-2026-Home-Jersey.webp", desc: "Classic Yellow with rainforest pattern." },
    { id: 4, name: "Brazil Away 2026", type: "Away", country: "Brazil", price: 110.00, img: "https://static-01.daraz.com.bd/p/904235532754a681e04bbda75671f185.jpg", desc: "Wave-inspired blue away design." },
    { id: 5, name: "France Home 2026", type: "Home", country: "France", price: 125.00, img: "https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/623152983_1561288088688363_7713843544279999969_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_ohc=kMY5j3QxjhkQ7kNvwGuWs8Z&_nc_oc=Adp0ZbRWfmgvS_v9CYTy26JXwbZ3PKtPecur2fpRzDhvTRnETPZJds3xZl7ZmDhMCeo&_nc_zt=23&_nc_ht=scontent.fcgp27-1.fna&_nc_gid=K6iCrui467OjkTIFIqFJaw&_nc_ss=7b289&oh=00_Af6h0ytx85WZLrxM7bxGMFOYhny1t__YkKmg2rUISRf1qg&oe=6A0805D6", desc: "Elegant royal blue with giant cockerel." },
    { id: 6, name: "France Away 2026", type: "Away", country: "France", price: 120.00, img: "https://jerseyfreakbd.com/_next/image?url=https%3A%2F%2Fadmin.jerseyfreakbd.com%2Fpublic%2Fuploads%2Fall%2Fqm0VMvP0yI3Hlwrt4iYJLueRBxhULQEI995C8C3W.jpg&w=3840&q=75", desc: "Vintage pinstripe white kit." },
    { id: 7, name: "Germany Home Kit", type: "Home", country: "Germany", price: 120.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-s6owvkBSomsPbkcX_KtFdO2eLB4n6QUu-Q&s", desc: "Iconic eagle-inspired shoulder graphics." },
    { id: 8, name: "Germany Away Kit", type: "Away", country: "Germany", price: 115.00, img: "https://store.fifa.com/cdn/shop/files/image_9b42b582-6a6d-41a8-bd3a-e6fc6caeb107.jpg?v=1775564043", desc: "Bold vibrant pink and purple gradient." },
    { id: 9, name: "Portugal Home 2026", type: "Home", country: "Portugal", price: 125.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2iqwxKTDHu5A_GNmwK2z9brAHT7Vn5s3KA&s", desc: "Classic red with national pride." },
    { id: 10, name: "Portugal Away 2026", type: "Away", country: "Portugal", price: 110.00, img: "https://futballgear.in/wp-content/uploads/2026/02/a756d130.jpg", desc: "Azulejo tile inspired blue/white kit." },
    { id: 11, name: "England Home Kit", type: "Home", country: "England", price: 115.00, img: "data:image/jpeg;base64,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", desc: "Clean white with classic navy details." },
    { id: 12, name: "England Away Kit", type: "Away", country: "England", price: 110.00, img: "https://media.gq-magazine.co.uk/photos/69ca514965d34a251445646e/3:4/w_748%2Cc_limit/england-nike-home-stadium-shirt-2026_ss5_p-203531763+pv-5+u-p14h5cafuonbxrto3maa+v-jlzam7a0k3dzcsgna44f.jpg", desc: "Modern purple with side graphics." },
    { id: 13, name: "Spain Home 2026", type: "Home", country: "Spain", price: 120.00, img: "https://fulltimestore.in/cdn/shop/files/804e8e17.jpg?v=1765620695", desc: "Vibrant red with wave patterns." },
    { id: 14, name: "Spain Away 2026", type: "Away", country: "Spain", price: 110.00, img: "https://thejerseyarena.in/wp-content/uploads/2026/04/Spain-away-2026-jersey-in-India.jpg", desc: "Pale yellow with beach-inspired hues." },
    { id: 15, name: "Netherlands Home", type: "Home", country: "Netherlands", price: 115.00, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLO8lQRtuRSfrc1cEP_crUPDy1LPGv5jXHA&s", desc: "The iconic Total Football Orange." },
    { id: 16, name: "Netherlands Away", type: "Away", country: "Netherlands", price: 110.00, img: "https://www.gogoalshopcloud.com/upload/ttmall/img/20260130/50c568795d2165a61b23be2e26089788.png", desc: "Deep blue with geometric patterns." },
];

let cart = [];
const productGrid = document.getElementById('product-grid');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

function displayProducts(productsToDisplay) {
    productGrid.innerHTML = "";
    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <span class="tag">${product.type}</span>
            <div class="img-container">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="price-row">
                    <span class="price">$${product.price.toFixed(2)}</span>
                    <button class="add-btn" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    handleScrollReveal();
}

function filterProducts(type) {
    const filtered = products.filter(p => p.type === type);
    displayProducts(filtered);
    window.location.hash = "products";
}

function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateUI();
    if (!cartSidebar.classList.contains('active')) toggleCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateUI();
}

function updateUI() {
    cartCount.innerText = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <i class="fa-solid fa-trash remove-item" onclick="removeFromCart(${index})"></i>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.innerText = `$${total.toFixed(2)}`;
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function handleScrollReveal() {
    const cards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));
}

cartBtn.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
overlay.addEventListener('click', toggleCart);

displayProducts(products);
setInterval(nextSlide, 5000);

document.querySelector('.subscribe button').addEventListener('click', () => {
    const input = document.querySelector('.subscribe input');
    if (input.value !== "") {
        alert("Welcome to the Elite Fan Club!");
        input.value = "";
    }
});