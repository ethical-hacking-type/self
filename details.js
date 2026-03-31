const pageData = {
    // -------- About Me --------
    "about-me": {
        title: "About Me",
        img: "najwan6.jpg.jpeg",
        desc: `
            <p>I am a passionate and dedicated individual with a strong interest in technology and digital creativity. I have experience in areas like Artificial Intelligence, Cybersecurity, Full Stack Development, and Technical Editing. I enjoy learning new things and continuously improving my skills to stay updated in the tech world.</p>
            <p>Beyond technical knowledge, I also work on Video Editing and Photo Editing, where I express my creativity and create engaging digital content.</p>
            <p>Talking about my personality, I am a self-motivated, focused, and hardworking person. I like to take responsibility and complete my work with perfection. I am also creative, adaptable, and always ready to learn new challenges.</p>
            <p>My character is defined by discipline, consistency, and a positive mindset. I believe in growing step by step, staying confident, and never giving up on my goals. I maintain a balance between technical skills and creativity, which helps me stand out.</p>
            <p>My goal is to grow professionally, build impactful projects, and create a strong identity in the tech and creative field.</p>
        `
    },

    // -------- Skills --------
    "skill-ai": {
        title: "Artificial Intelligence",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Training models, prompt engineering, and integrating AI into applications.</p>
            <p>As an AI Specialist, I explore the depths of Retrieval-Augmented Generation (RAG) and complex prompt engineering to craft systems that don't just compute, but truly understand context and intent. Integrating AI effectively reduces manual overhead by magnitudes while scaling business logic effortlessly.</p>
        `
    },
    "skill-cyber": {
        title: "Cybersecurity",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Ethical hacking, threat modeling, and securing information frameworks.</p>
            <p>In a world where data is currency, I build modern defense mechanisms to protect applications against sophisticated vulnerabilities. My approach ensures systems stand resilient against digital threats and maintain absolute data integrity.</p>
        `
    },
    "skill-tech": {
        title: "Technical Editing",
        img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Refining complex technical content for clarity, impact, and precision.</p>
            <p>Communication is the bridge between a complex technological backend and the end-user. I specialize in breaking down advanced concepts into digestible, compelling narratives without losing technical accuracy.</p>
        `
    },
    "skill-dev": {
        title: "Full Stack Development",
        img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Building robust, scalable web architectures from pixel-perfect UI to backend logic.</p>
            <p>I develop high-performance web applications tailored to solve modern problems. From creating dynamic React front-ends to building secure Node.js APIs, I oversee the entire software development lifecycle.</p>
        `
    },
    "skill-video": {
        title: "Video Editing",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Professional video editing and post-production for engaging visual content.</p>
            <p>Fast-paced, dynamic storytelling tailored for any platform. I specialize in high-retention editing techniques that maximize viewer engagement from start to finish.</p>
        `
    },
    "skill-photo": {
        title: "Photo Editing",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Advanced photo retouching, color grading, and visual enhancement.</p>
            <p>Elevating basic photography into striking, polished brand assets across all digital formats, ensuring your core message is visually undeniable.</p>
        `
    },

    // -------- Services --------
    "service-ai": {
        title: "AI Integration",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Implementing LLMs, automating workflows, and building intelligent agents for your business.</p>
            <p>Let me transform your business processes by deeply integrating cognitive AI tools. Whether it's custom chatbots, data-analytics engines fueled by machine learning, or automated agents, I provide end-to-end intelligent solutions.</p>
        `
    },
    "service-cyber": {
        title: "Security Audits",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Identifying vulnerabilities and implementing robust security protocols to protect your data.</p>
            <p>I offer comprehensive security reviews of your existing web infrastructure. From penetration testing to fixing critical Zero-Day flaws, I ensure your platforms adhere to the highest global security standards.</p>
        `
    },
    "service-video": {
        title: "Video & Content Edit",
        img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Professional video editing and technical content refinement to boost your digital presence.</p>
            <p>Enhance your personal or corporate brand with high-retention video content. I craft dynamic, engaging video materials optimized for short-form platforms (Reels, TikTok) and long-form storytelling.</p>
        `
    },
    "service-photo": {
        title: "Photo Editing",
        img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
        desc: `
            <p>Transforming raw images into stunning visuals with advanced retouching techniques.</p>
            <p>Whether you require sleek product photography touch-ups or stunning personal portraits, my photo editing services harness both technical skill and aesthetic intuition to make your visuals truly stand out.</p>
        `
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Parse URL parameter e.g., ?id=skill-ai
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id');

    const titleEl = document.getElementById("detail-title");
    const imgEl = document.getElementById("detail-img");
    const descEl = document.getElementById("detail-desc");

    if (pageId && pageData[pageId]) {
        const data = pageData[pageId];
        titleEl.textContent = data.title;
        imgEl.src = data.img;
        descEl.innerHTML = data.desc;
    } else {
        titleEl.textContent = "Topic Not Found";
        descEl.innerHTML = "<p>Sorry, the topic you are looking for does not exist or was removed.</p>";
        imgEl.style.display = "none";
    }
});

// Implement 3D Background exactly as the index page does (from original script.js)
const canvas = document.querySelector('#bg-canvas');
if(canvas) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: 0xff014f,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    camera.position.z = 3;

    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
