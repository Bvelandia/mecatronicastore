// Variables globales
let cartItems = [];
let cartCount = 0;

// Elementos del DOM
const cartIcon = document.querySelector('.cart-icon');
const cartBadge = document.querySelector('.badge');
const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const closeCartButton = document.querySelector('.close-cart');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const checkoutButton = document.getElementById('whatsapp-checkout');
const mobileToggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// Función para inicializar todos los event listeners
function initEventListeners() {
    // Menú móvil
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Carrito
    if (cartIcon) {
        cartIcon.addEventListener('click', openCart);
    }

    if (closeCartButton) {
        closeCartButton.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }

    // Botones de añadir al carrito
    if (addToCartButtons) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', handleAddToCart);
        });
    }

    // Botón de checkout por WhatsApp
    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleWhatsAppCheckout);
    }

    // Formularios
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterFormSubmit);
    }} 