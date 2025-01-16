
// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Add animation effect
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'translateY(-5px)';
        }, 200);
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#1a252f';
    } else {
        navbar.style.backgroundColor = '#2C3E50';
    }
});
