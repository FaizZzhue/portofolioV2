console.log('Hello Faiz')

// Humburger menu
function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-list a");
    const navMenu = document.getElementById("navMenu");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });
});

// Tema menu
document.querySelector('.button-thema').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const icon = document.querySelector('.button-thema i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
    } else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
    }
});

// Contact menu
const phoneIcon = document.getElementById('phoneIcon');
document.addEventListener('mousemove', (e) => {
    const rect = phoneIcon.getBoundingClientRect();
    const iconX = rect.left + rect.width / 2;
    const iconY = rect.top + rect.height / 2;

    const distance = Math.hypot(e.clientX - iconX, e.clientY - iconY);

    if (distance < 100) { // radius 100px
        phoneIcon.style.transform = 'rotate(180deg)';
    } else {
        phoneIcon.style.transform = 'rotate(0deg)';
    }
});

// Skills menu
document.addEventListener("DOMContentLoaded", () => {
    const flip = document.querySelectorAll('.skills-cirular')

    flip.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});

// Email menu
document.querySelector(".button-contact").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thanks, ${name}! Your message has been sent.`);
    } else {
        alert("Please fill out all fields.");
    }
});

// Send menu
const btn = document.querySelector('.button-contact');
const icon = btn.querySelector('i');

btn.addEventListener('click', () => {
    icon.classList.add('fly');

    // reset animasi 
    icon.addEventListener('animationend', () => {
        icon.classList.remove('fly');
    }, { once: true });
});