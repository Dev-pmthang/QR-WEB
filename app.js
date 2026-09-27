/* ========================================
   Shooting Stars - App Logic
   ======================================== */

// ===== STAR FIELD GENERATION =====
function createStarField() {
    const container = document.getElementById('starsContainer');
    const count = Math.min(250, Math.floor(window.innerWidth * window.innerHeight / 4000));

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2.5 + 0.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 4 + 2;
        const delay = Math.random() * 5;
        const minOpacity = Math.random() * 0.3 + 0.1;
        const maxOpacity = Math.random() * 0.5 + 0.5;

        star.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            --duration: ${duration}s;
            --delay: ${delay}s;
            --min-opacity: ${minOpacity};
            --max-opacity: ${maxOpacity};
        `;

        // Some stars have color
        if (Math.random() > 0.85) {
            const colors = ['var(--star-blue)', 'var(--star-purple)', 'var(--star-pink)', 'var(--star-gold)'];
            star.style.background = colors[Math.floor(Math.random() * colors.length)];
        }

        container.appendChild(star);
    }
}

// ===== ANIMATED COUNTER =====
function animateCounter(elementId, target, duration = 2000) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.floor(start + (target - start) * eased);
        el.textContent = value.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== METEOR SHOWER =====
let meteorShowerActive = false;

function triggerMeteorShower() {
    if (meteorShowerActive) return;
    meteorShowerActive = true;

    const container = document.getElementById('shootingStars');
    container.classList.add('meteor-shower');
    showToast('🌠 Mưa sao băng!');

    // Create 15 extra meteors
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.className = 'extra-meteor';
            meteor.style.top = (Math.random() * 60) + '%';
            meteor.style.right = '-100px';
            meteor.style.animationDuration = (Math.random() * 1.5 + 1) + 's';
            meteor.style.animationDelay = '0s';
            container.appendChild(meteor);

            // Remove after animation
            setTimeout(() => {
                meteor.remove();
            }, 3000);
        }, i * 200);
    }

    setTimeout(() => {
        container.classList.remove('meteor-shower');
        meteorShowerActive = false;
    }, 5000);
}

// ===== SPEED TOGGLE =====
let speedMode = 1; // 1 = normal, 2 = fast, 3 = slow
function toggleSpeed() {
    speedMode = speedMode % 3 + 1;
    const shootingStars = document.querySelectorAll('.shooting-star');
    const labels = ['', '🚀 Tốc độ nhanh', '🐢 Tốc độ chậm', '⭐ Tốc độ bình thường'];
    
    shootingStars.forEach(star => {
        if (speedMode === 2) {
            star.style.animationDuration = '1.5s';
        } else if (speedMode === 3) {
            star.style.animationDuration = '6s';
        } else {
            star.style.animationDuration = '';
        }
    });

    showToast(labels[speedMode]);
}

// ===== THEME CHANGE =====
let currentTheme = 0;
const themes = ['', 'theme-aurora', 'theme-sunset'];
const themeNames = ['🌌 Vũ trụ tím', '🌿 Bắc cực quang', '🌅 Hoàng hôn'];

function changeTheme() {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.className = themes[currentTheme];
    showToast(themeNames[currentTheme]);
}

// ===== WISH =====
function makeWish() {
    const overlay = document.getElementById('wishOverlay');
    overlay.style.display = 'flex';
    // Force reflow for animation
    overlay.offsetHeight;
    overlay.classList.add('active');

    // Trigger a small meteor shower
    triggerMeteorShower();
}

function closeWish() {
    const overlay = document.getElementById('wishOverlay');
    overlay.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 500);
}

// ===== CURSOR TRAIL =====
let lastTrailTime = 0;
function createCursorTrail(e) {
    const now = Date.now();
    if (now - lastTrailTime < 50) return; // Throttle
    lastTrailTime = now;

    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    const size = Math.random() * 5 + 2;
    const colors = ['#818cf8', '#a78bfa', '#c084fc', '#f472b6', '#fbbf24'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.cssText = `
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
    `;

    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 800);
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ===== PARALLAX =====
function handleParallax(e) {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;

    const nebulaClouds = document.querySelectorAll('.nebula-cloud');
    nebulaClouds.forEach((cloud, i) => {
        const speed = (i + 1) * 8;
        cloud.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Create star field
    createStarField();

    // Animate star counter
    setTimeout(() => animateCounter('starCount', 1247, 3000), 1500);

    // Mouse trail (desktop only)
    if (window.matchMedia('(hover: hover)').matches) {
        document.addEventListener('mousemove', createCursorTrail);
        document.addEventListener('mousemove', handleParallax);
    }

    // Touch sparkle (mobile)
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createCursorTrail({
                    clientX: touch.clientX + (Math.random() - 0.5) * 40,
                    clientY: touch.clientY + (Math.random() - 0.5) * 40
                });
            }, i * 50);
        }
    });

    // Click anywhere to create sparkle burst
    document.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a')) return;
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                createCursorTrail({
                    clientX: e.clientX + (Math.random() - 0.5) * 60,
                    clientY: e.clientY + (Math.random() - 0.5) * 60
                });
            }, i * 30);
        }
    });
});

// Resize handler - regenerate stars
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const container = document.getElementById('starsContainer');
        container.innerHTML = '';
        createStarField();
    }, 300);
});
