// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close menu when a nav link is clicked
navLinkItems.forEach(item => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Scroll animations
document.addEventListener("DOMContentLoaded", () => {
    // Animate feature cards with delay
    const featureCards = document.querySelectorAll('.cardfitur');
    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Animate cards on scroll
    const animateOnScroll = () => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (cardPosition < screenPosition) {
                card.style.transform = 'translateY(-10px)';
                card.style.opacity = '1';
            }
        });
    };
    
    // Add sticky navbar effect
    const navbar = document.querySelector('.navbar');
    const navbarSticky = () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 138, 76, 0.95)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 138, 76, 0.9)';
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }
    };
    
    // Add dinosaur parallax effect
    const dinoImg = document.querySelector('.dino-img');
    const parallaxDino = () => {
        const scrollValue = window.scrollY;
        if (dinoImg && window.innerWidth > 768) {
            dinoImg.style.transform = `translateY(calc(-50% + ${scrollValue * 0.2}px))`;
        }
    };
    
    // Initialize animations
    animateOnScroll();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        animateOnScroll();
        navbarSticky();
        parallaxDino();
    });
    
    // Add resize event listener
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        }
    });
});