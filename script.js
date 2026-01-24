// Custom cursor
const cursor = document.querySelector('.cursor');
const magnets = document.querySelectorAll('.magnet');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Button magnetic effect
magnets.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        cursor.classList.add('active');
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0, 0)';
        cursor.classList.remove('active');
    });
});

// Scroll handlers
let ticking = false;

function updateAnimations() {
    try {
        const scrolled = window.scrollY;
        const windowHeight = window.innerHeight;

        // Footer parallax
        const footerBg = document.querySelector('.footer-bg img');
        if (footerBg) {
            const scrollHeight = document.documentElement.scrollHeight;
            const distFromBottom = scrollHeight - (scrolled + windowHeight);
            if (distFromBottom < windowHeight) {
                footerBg.style.transform = `translateY(${distFromBottom * -0.2}px)`;
            }
        }
    } catch (e) {
        console.warn("Scroll animation error:", e);
    } finally {
        ticking = false;
    }
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateAnimations);
        ticking = true;
    }
}, { passive: true });

window.addEventListener('load', () => {
    updateAnimations();
});

// Scroll reveal observer
const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, revealOptions);

document.querySelectorAll('.fade-up, .about-visual, .project-row').forEach(el => observer.observe(el));
