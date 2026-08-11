// ═══════════════════════════════════════════════════════════════════
// Mohammed Najwan T — Professional Portfolio
// Premium Interactions & Animations
// ═══════════════════════════════════════════════════════════════════

// ── Mobile Menu Toggle ──
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ── Typing Effect ──
const typeEffectSpan = document.querySelector('.type-effect');
const words = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Digital Creator",
    "AI Learner",
    "Video Editor",
    "Photo Editor",
    "Ethical Hacker"
];
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
        setTimeout(type, 2200);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 400);
    } else {
        setTimeout(type, isDeleting ? 50 : 120);
    }
}

// ── Header Scroll Effect ──
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ── Cursor Glow Effect ──
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow && window.innerWidth > 768) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ── Counter Animation ──
function animateCounters() {
    const counters = document.querySelectorAll('.stat-num[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            counter.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    });
}

// ── Scroll Reveal Animations ──
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');

            // Trigger counter animation when hero comes into view
            if (entry.target.id === 'hero') {
                animateCounters();
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// ── Active Link on Scroll ──
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// ── 3D Tilt Effect with Glare ──
function init3DTilt() {
    const cards = document.querySelectorAll('.skills-box, .services-box, .projects-box');

    cards.forEach(card => {
        let glare = null;
        card.style.position = 'relative';
        glare = document.createElement('div');
        glare.classList.add('glare');
        card.appendChild(glare);

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

            if (glare) {
                glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)`;
                glare.style.opacity = 1;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            if (glare) {
                glare.style.opacity = 0;
            }
        });
    });
}

// ── 3D Background Animation using Three.js ──
function init3DBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Material - purple to match theme
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.025,
        color: 0x7c3aed,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Second particle system for accent color
    const particlesGeometry2 = new THREE.BufferGeometry();
    const particlesCount2 = 500;
    const posArray2 = new Float32Array(particlesCount2 * 3);

    for (let i = 0; i < particlesCount2 * 3; i++) {
        posArray2[i] = (Math.random() - 0.5) * 12;
    }

    particlesGeometry2.setAttribute('position', new THREE.BufferAttribute(posArray2, 3));

    const particlesMaterial2 = new THREE.PointsMaterial({
        size: 0.02,
        color: 0x06d6a0,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh2 = new THREE.Points(particlesGeometry2, particlesMaterial2);
    scene.add(particlesMesh2);

    camera.position.z = 3;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - window.innerWidth / 2);
        mouseY = (event.clientY - window.innerHeight / 2);
    });

    // Resize handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Animation Loop
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        const targetX = mouseX * 0.0005;
        const targetY = mouseY * 0.0005;

        // Slow rotation
        particlesMesh.rotation.y += 0.0008;
        particlesMesh.rotation.x += 0.0003;
        particlesMesh2.rotation.y -= 0.0005;
        particlesMesh2.rotation.x -= 0.0002;

        // Mouse follow
        particlesMesh.rotation.y += 0.03 * (targetX - particlesMesh.rotation.y * 0.01);
        particlesMesh.rotation.x += 0.03 * (targetY - particlesMesh.rotation.x * 0.01);

        // Wave
        const positions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const x = positions[i3];
            positions[i3 + 2] += Math.sin(elapsedTime * 1.5 + x) * 0.005;
            positions[i3 + 2] *= 0.995;
        }
        particlesGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}

// ── Smooth Scroll for anchor links ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ── Add stagger classes to grid items ──
function addStaggerClasses() {
    const grids = document.querySelectorAll('.soft-skills-grid, .prof-skills-grid');
    grids.forEach(grid => {
        const items = grid.children;
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add(`stagger-${(i % 5) + 1}`);
        }
    });
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    type();
    init3DTilt();
    init3DBackground();
    addStaggerClasses();

    // Add reveal class to sections and boxes for animation
    document.querySelectorAll('section, .skills-box, .services-box, .projects-box, .resume-card, .soft-skill-item, .prof-skill-item, .lang-card, .contact-box').forEach(el => {
        el.classList.add('reveal-init');
        observer.observe(el);
    });
});
