// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Effect
const typeEffectSpan = document.querySelector('.type-effect');
const words = ["Web Developer", "Cybersecurity Learner", "Programmer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typeEffectSpan.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typeEffectSpan.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // 2 seconds pause at end of word
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500); // 0.5 second pause before typing next word
    } else {
        setTimeout(type, isDeleting ? 100 : 200); // Typing speed
    }
}

document.addEventListener('DOMContentLoaded', type);
