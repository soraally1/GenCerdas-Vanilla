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
})
    
const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const dragonImage = document.getElementById('dragon-image');

// Sample responses from the dragon chatbot
const botResponses = [
    "Tentu! Untuk beasiswa luar negeri, saya rekomendasikan melihat program LPDP, Fulbright, dan Chevening. Apa kamu tertarik pada salah satu dari ini?",
    "Untuk dokumen aplikasi beasiswa, biasanya kamu perlu menyiapkan CV, transkrip nilai, surat rekomendasi, dan esai. Mau saya bantu untuk salah satunya?",
    "Beasiswa dalam negeri yang populer antara lain Bidikmisi, beasiswa PPA, dan beasiswa perusahaan seperti Djarum. Apa kamu sudah mencoba mendaftar?",
    "Batas waktu pendaftaran beasiswa berbeda-beda. Untuk tahun ini, banyak yang berakhir di bulan April-Mei. Ada beasiswa spesifik yang kamu tanyakan?",
    "Untuk meningkatkan peluang mendapatkan beasiswa, pastikan nilai akademismu bagus, aktif di organisasi, dan kuasai bahasa Inggris dengan baik!"
];

// Add event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send message
function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    messageInput.value = '';
    
    // Simulate typing animation
    setTimeout(function() {
        // Show "typing" animation
        dragonImage.classList.add('animate__animated', 'animate__pulse');
        
        // After some delay, send a response
        setTimeout(function() {
            // Get a random response
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            addMessage(randomResponse, 'bot');
            
            // Remove typing animation
            dragonImage.classList.remove('animate__animated', 'animate__pulse');
        }, 1500);
    }, 500);
}

// Function to add a message to the chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message animate__animated animate__fadeIn`;
    
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="avatar">
                <img src="https://via.placeholder.com/100/FF5722/FFFFFF?text=G" alt="G'Gon Avatar">
            </div>
            <div class="message-content">
                <p>${text}</p>
                <div class="timestamp">${time}</div>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <div class="timestamp">${time}</div>
            </div>
        `;
    }
    
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Initial animation for the dragon
setTimeout(function() {
    dragonImage.classList.add('animate__animated', 'animate__bounceIn');
}, 200);

